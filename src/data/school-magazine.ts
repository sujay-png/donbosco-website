export interface SchoolMagazineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  coverImage: string;
  pdfUrl: string;
  fileSize: string;
  pagesApprox?: string;
  period: 'recent' | 'archive';
  highlights: string[];
  description: string;
}

export const magazineIntro = {
  title: "School Magazine — Bosco Rays",
  subtitle: "Our annual school magazine, “Bosco Rays,” is a vibrant tapestry of student imagination, literary flair, artistic masterpieces, and year-round campus memories.",
  motto: "“Preserving the thoughts, creativity, and milestones that illuminate each scholastic year.”"
};

export const schoolMagazines: SchoolMagazineItem[] = [
  {
    id: "magazine-2023-2024",
    year: "2023-2024",
    title: "Bosco Rays 2023–2024",
    subtitle: "Annual School Magazine Edition",
    coverImage: "/magazine/2023-2024-cover.jpg",
    pdfUrl: "/magazine/2023-2024-magazine.pdf",
    fileSize: "13.5 MB",
    period: "recent",
    highlights: ["Principal's Address", "Student Poetry & Essays", "State & National Accolades", "Cultural & Sports Gallery"],
    description: "The 2023–2024 edition of Bosco Rays encapsulates a landmark year of academic triumphs, club activities, environmental initiatives, and outstanding sports meets, featuring original contributions from students of Kindergarten through Senior Secondary."
  },
  {
    id: "magazine-2022-2023",
    year: "2022-2023",
    title: "Bosco Rays 2022–2023",
    subtitle: "Annual School Magazine Edition",
    coverImage: "/magazine/2022-2023-cover.jpg",
    pdfUrl: "/magazine/2022-2023-magazine.pdf",
    fileSize: "10.1 MB",
    period: "recent",
    highlights: ["Post-Pandemic Revival", "Creative Arts Showcase", "House Championship Retrospective", "Staff & Student Reflections"],
    description: "Celebrating the vibrant resurgence of in-person scholastic life, the 2022–2023 magazine highlights student creative writing, dramatic performances, diocesan value education honors, and holistic sports triumphs."
  },
  {
    id: "magazine-2019-2021",
    year: "2019-2021",
    title: "Bosco Rays 2019–2021",
    subtitle: "Biennial Special Combined Edition",
    coverImage: "/magazine/2019-2021-cover.jpg",
    pdfUrl: "/magazine/2019-2021-magazine.pdf",
    fileSize: "25.0 MB",
    period: "archive",
    highlights: ["Two-Year Milestone Chronicle", "Resilience & Remote Learning", "Science & Innovation", "Alumni Spotlights"],
    description: "A special commemorative biennial chronicle covering 2019 through 2021, documenting our school community's incredible resilience, digital learning milestones, creative essays, and unwavering Don Bosco spirit during changing times."
  },
  {
    id: "magazine-2018-2019",
    year: "2018-2019",
    title: "Bosco Rays 2018–2019",
    subtitle: "Annual School Magazine Edition",
    coverImage: "/magazine/2018-2019-cover.jpg",
    pdfUrl: "/magazine/2018-2019-magazine.pdf",
    fileSize: "36.0 MB",
    period: "archive",
    highlights: ["Annual Day Festivities", "Scouts & Guides Camps", "Literary Competitions", "Graduation Retrospectives"],
    description: "Rich with pictorial memories and thought-provoking student prose, the 2018–2019 publication honors student leadership, NCC & Scouts activities, artistic exhibitions, and community service initiatives."
  },
  {
    id: "magazine-2017-2018",
    year: "2017-2018",
    title: "Bosco Rays 2017–2018",
    subtitle: "Annual School Magazine Edition",
    coverImage: "/magazine/2017-2018-cover.jpg",
    pdfUrl: "/magazine/2017-2018-magazine.pdf",
    fileSize: "26.5 MB",
    period: "archive",
    highlights: ["Historical Milestones", "Foundation Retrospectives", "Art & Drawing Highlights", "Student Council Year in Review"],
    description: "An archival treasure documenting Don Bosco English Medium School Shirva's continued legacy of excellence, featuring inaugural clubs, choir performances, inter-school athletics, and creative student writings."
  }
];
