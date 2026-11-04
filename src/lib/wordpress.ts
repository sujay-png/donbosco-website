import fs from 'node:fs';
import path from 'node:path';
import type { NewsEventItem } from '../data/news-events';

const DEFAULT_WP_API = 'https://dashboard.donboscoschoolshirva.com/wp-json/wp/v2';
const FALLBACK_IMAGE = '/about/old-school.jpg';
const SKIP_SLUGS = new Set(['hello-world']);
const CACHE_TTL_MS = 60_000;
const REQUEST_TIMEOUT_MS = 15_000;
const CACHE_FILE = path.resolve(process.cwd(), 'src/data/wordpress-cache.json');

const DEFAULT_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 DonBoscoSchool/1.0',
  'Accept': 'application/json, text/plain, */*',
};

type WpRendered = { rendered?: string };
type WpTerm = { taxonomy?: string; slug?: string; name?: string };
type WpMedia = {
  source_url?: string;
  media_details?: { sizes?: Record<string, { source_url?: string }> };
};
type WpAuthor = { name?: string };
type WpPost = {
  id: number;
  slug: string;
  date: string;
  title?: WpRendered;
  excerpt?: WpRendered;
  content?: WpRendered;
  _embedded?: {
    author?: WpAuthor[];
    'wp:featuredmedia'?: WpMedia[];
    'wp:term'?: WpTerm[][];
  };
};

let cachedPosts: NewsEventItem[] | null = null;
let cachedAt = 0;

function wpApiBase() {
  const raw = (import.meta.env.WORDPRESS_API_URL as string | undefined)?.trim();
  if (!raw) return DEFAULT_WP_API;
  const cleaned = raw.replace(/\/$/, '');
  if (!cleaned.includes('/wp-json')) {
    return `${cleaned}/wp-json/wp/v2`;
  }
  return cleaned;
}

function decodeHtml(value: string) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num: string) => String.fromCharCode(Number(num)))
    .replace(/&nbsp;/gi, ' ')
    .replace(/&hellip;/gi, '…')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripHtml(html: string) {
  return decodeHtml(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function sanitizeHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/\son\w+='[^']*'/gi, '');
}

function htmlToParagraphs(html: string) {
  const parts = html
    .split(/<\/p>/i)
    .map((chunk) => stripHtml(chunk))
    .filter(Boolean);

  if (parts.length > 0) return parts;

  const text = stripHtml(html);
  return text ? [text] : [];
}

function formatDisplayDate(rawDate: string) {
  const date = new Date(rawDate);
  if (Number.isNaN(date.getTime())) return rawDate;

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function readingTimeFrom(text: string) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function firstContentImage(html: string) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

function featuredImage(post: WpPost, html: string) {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return (
    media?.media_details?.sizes?.large?.source_url ||
    media?.source_url ||
    firstContentImage(html) ||
    FALLBACK_IMAGE
  );
}

function extractAlbumUrl(html: string) {
  const match = html.match(/https?:\/\/(?:photos\.app\.goo\.gl|photos\.google\.com)\/[^\s"'<>]+/i);
  return match?.[0] ?? null;
}

function mapCategory(post: WpPost): Pick<NewsEventItem, 'category' | 'categorySlug'> {
  const terms = post._embedded?.['wp:term']?.flat().filter((term) => term.taxonomy === 'category') ?? [];
  const kgTerm = terms.find((term) => {
    const haystack = `${term.slug ?? ''} ${term.name ?? ''}`.toLowerCase();
    return haystack.includes('kg');
  });

  if (kgTerm) {
    return {
      category: 'KG Activity',
      categorySlug: 'kg-activities',
    };
  }

  return {
    category: 'School Activity',
    categorySlug: 'activities',
  };
}

function mapAuthor(post: WpPost) {
  const name = post._embedded?.author?.[0]?.name?.trim();
  if (!name || name.toLowerCase() === 'admin') return 'DBEMS Team';
  return name;
}

function mapPost(post: WpPost): NewsEventItem | null {
  if (SKIP_SLUGS.has(post.slug)) return null;

  const title = decodeHtml(post.title?.rendered ?? '').trim();
  if (!title) return null;

  const htmlContent = sanitizeHtml(post.content?.rendered ?? '').trim();
  const paragraphs = htmlToParagraphs(htmlContent);
  const excerptSource = post.excerpt?.rendered || paragraphs[0] || '';
  const excerpt = stripHtml(excerptSource).replace(/\s*\[(?:…|\.\.\.)\]\s*$/, '').trim();
  const { category, categorySlug } = mapCategory(post);

  return {
    id: post.id,
    slug: post.slug,
    title,
    date: formatDisplayDate(post.date),
    rawDate: post.date,
    category,
    categorySlug,
    localImg: featuredImage(post, htmlContent),
    excerpt: excerpt.length > 180 ? `${excerpt.slice(0, 177).trimEnd()}...` : excerpt,
    paragraphs,
    htmlContent: htmlContent || undefined,
    albumUrl: extractAlbumUrl(htmlContent),
    author: mapAuthor(post),
    readingTime: readingTimeFrom(paragraphs.join(' ')),
    source: 'wordpress',
  };
}

function readDiskCache(): NewsEventItem[] | null {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const raw = fs.readFileSync(CACHE_FILE, 'utf-8');
      const data = JSON.parse(raw);
      if (Array.isArray(data) && data.length > 0) {
        return data as NewsEventItem[];
      }
    }
  } catch (err) {
    console.warn('[wordpress] Could not read disk cache:', err);
  }
  return null;
}

function writeDiskCache(items: NewsEventItem[]) {
  try {
    const dir = path.dirname(CACHE_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify(items, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[wordpress] Could not write disk cache:', err);
  }
}

async function fetchWithRetry(url: string, retries = 3, delayMs = 1000): Promise<Response> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        headers: DEFAULT_HEADERS,
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });

      if (response.ok) {
        return response;
      }

      // Retry on 429 rate limit or 5xx server errors
      if (response.status === 429 || response.status >= 500) {
        console.warn(`[wordpress] Attempt ${attempt} failed with HTTP ${response.status}. Retrying in ${delayMs}ms...`);
        if (attempt < retries) {
          await new Promise((resolve) => setTimeout(resolve, delayMs * attempt));
          continue;
        }
      }
      return response;
    } catch (err) {
      lastError = err;
      console.warn(
        `[wordpress] Attempt ${attempt} network error: ${err instanceof Error ? err.message : String(err)}. Retrying in ${delayMs}ms...`
      );
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, delayMs * attempt));
      }
    }
  }
  throw lastError instanceof Error ? lastError : new Error(String(lastError));
}

async function fetchAllWpPosts() {
  const posts: WpPost[] = [];
  const perPage = 100;
  let page = 1;
  const base = wpApiBase();

  while (page <= 20) {
    const url = `${base}/posts?per_page=${perPage}&page=${page}&_embed=1`;
    const response = await fetchWithRetry(url);

    if (!response.ok) {
      if (page === 1) {
        throw new Error(`WordPress API responded with HTTP ${response.status}`);
      }
      break;
    }

    const batch = (await response.json()) as WpPost[];
    if (!Array.isArray(batch) || batch.length === 0) break;

    posts.push(...batch);
    if (batch.length < perPage) break;
    page += 1;
  }

  return posts;
}

export async function fetchWordPressNews(): Promise<NewsEventItem[]> {
  const now = Date.now();

  // 1. In-memory cache valid within CACHE_TTL_MS
  if (cachedPosts && now - cachedAt < CACHE_TTL_MS) {
    return cachedPosts;
  }

  // 2. Try fetching from WordPress API
  try {
    const rawPosts = await fetchAllWpPosts();
    const mapped = rawPosts
      .map(mapPost)
      .filter((item): item is NewsEventItem => item !== null);

    if (mapped.length > 0) {
      cachedPosts = mapped;
      cachedAt = now;
      writeDiskCache(mapped);
      return mapped;
    }
  } catch (error) {
    console.error('[wordpress] Failed to fetch posts from API:', error);
  }

  // 3. Fall back to memory cache if we had one previously
  if (cachedPosts && cachedPosts.length > 0) {
    return cachedPosts;
  }

  // 4. Fall back to persistent disk cache (e.g. build environment or offline)
  const diskCached = readDiskCache();
  if (diskCached && diskCached.length > 0) {
    console.log(`[wordpress] Using fallback disk cache (${diskCached.length} posts)`);
    cachedPosts = diskCached;
    cachedAt = now;
    return diskCached;
  }

  return [];
}
