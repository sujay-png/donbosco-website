import { activitiesList, kgActivitiesList, type NewsEventItem } from '../data/news-events';
import { fetchWordPressNews } from './wordpress';

function normalizeKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function byNewest(a: NewsEventItem, b: NewsEventItem) {
  return b.rawDate.localeCompare(a.rawDate);
}

function hardcodedNews(): NewsEventItem[] {
  return [...activitiesList, ...kgActivitiesList].map((item) => ({
    ...item,
    source: 'local',
  }));
}

function yearOf(item: NewsEventItem) {
  return item.rawDate.slice(0, 4);
}

export async function getAllNewsEvents(): Promise<NewsEventItem[]> {
  const local = hardcodedNews();
  const wordpress = await fetchWordPressNews();

  // A WordPress post is treated as a re-post of a hardcoded one only when the
  // title matches AND it is from the same year. Annual events (Republic Day,
  // Christmas, ...) posted in later years must still show up.
  const localTitleYears = new Set(local.map((item) => `${normalizeKey(item.title)}|${yearOf(item)}`));
  const usedSlugs = new Set(local.map((item) => item.slug));

  const freshFromWp: NewsEventItem[] = [];
  for (const item of wordpress) {
    if (localTitleYears.has(`${normalizeKey(item.title)}|${yearOf(item)}`)) continue;

    // Avoid URL clashes with hardcoded posts that share the same slug.
    let slug = item.slug;
    if (usedSlugs.has(slug)) slug = `${item.slug}-${yearOf(item)}`;
    let n = 2;
    while (usedSlugs.has(slug)) slug = `${item.slug}-${yearOf(item)}-${n++}`;
    usedSlugs.add(slug);

    freshFromWp.push({ ...item, slug });
  }

  return [...freshFromWp, ...local].sort(byNewest);
}

export async function getNewsCollections() {
  const all = await getAllNewsEvents();
  return {
    all,
    activities: all.filter((item) => item.categorySlug === 'activities'),
    kgActivities: all.filter((item) => item.categorySlug === 'kg-activities'),
  };
}

export async function getEventBySlug(slug: string) {
  const all = await getAllNewsEvents();
  return all.find((item) => item.slug === slug);
}

export async function getRelatedEvents(currentSlug: string, count = 3) {
  const all = await getAllNewsEvents();
  const current = all.find((item) => item.slug === currentSlug);
  if (!current) return all.slice(0, count);

  return all
    .filter((item) => item.slug !== currentSlug && item.categorySlug === current.categorySlug)
    .slice(0, count);
}

export async function getLatestNews(count = 4) {
  const all = await getAllNewsEvents();
  return all.slice(0, count);
}
