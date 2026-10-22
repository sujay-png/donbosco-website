export interface StudentExhibit {
  id: string;
  itemLetter?: string;
  title: string;
  category: 'sports' | 'academics' | 'scouts' | 'cultural' | 'adventure';
  categoryLabel: string;
  categoryIcon: string;
  date?: string;
  venue?: string;
  organizedBy?: string;
  awardBadge: string;
  studentName?: string;
  grade?: string;
  description: string;
  additionalParagraphs?: string[];
  participants?: Array<{ name: string; prize: string }>;
  subGroups?: Array<{ groupName: string; prize: string; members: string[] }>;
  dignitaries?: string[];
  image?: string;
}

export const studentGalleryIntro = {
  title: "Student Gallery",
  subtitle: "This page exhibits the original works, talents and skills of students. This is a forum where they are given a platform to make reach their work to the community.",
  motto: "Celebrating the dedication, creativity, and extraordinary achievements of Don Bosco learners."
};

export const studentExhibits: StudentExhibit[] = [
  {
    id: "tulunadu-karate-championship-2025",
    itemLetter: "A",
    title: "7th National Level Open Invitational Tulunadu Karate Championship – 2025",
    category: "sports",
    categoryLabel: "Sports & Martial Arts",
    categoryIcon: "🥋",
    date: "18th & 19th January 2025",
    venue: "Udyavara Grama Panchayath Stadium",
    organizedBy: "Kabudo Budokan Karate Do Association Karnataka",
    awardBadge: "National Championship Laurels",
    image: "/achievements/4-14.jpg",
    description: "Organised by Kabudo Budokan Karate Do Association Karnataka, the 7th National Level Open Invitational Tulunadu Karate Championship was held at Udyavara Grama Panchayath Stadium on 18th and 19th January 2025. Nine students from Don Bosco School demonstrated remarkable discipline, kata precision, and fighting spirit to clinch top podium positions.",
    participants: [
      { name: "Ethan Barboza", prize: "First in Kata" },
      { name: "Omkar Viveka Shettigar", prize: "Second in Kata" },
      { name: "Arvin AN", prize: "First in Kata" },
      { name: "Shaikh Mohd Faiq", prize: "Third in Kata and Kumite" },
      { name: "Mark Clement Scott", prize: "Second in Kata and Third in Kumite" },
      { name: "Briana Megan Scott", prize: "First in Kata" },
      { name: "Prahan U L", prize: "Third in Kata" },
      { name: "Samanvi Beedi", prize: "First Place" },
      { name: "Adith", prize: "Second in Karate" }
    ]
  },
  {
    id: "state-level-abacus-competition-janice",
    itemLetter: "B",
    title: "State Level Abacus Competition – Level 2 Champion",
    category: "academics",
    categoryLabel: "Academics & Mental Math",
    categoryIcon: "🧮",
    date: "25th December 2024",
    venue: "Tumkur",
    awardBadge: "State Level Champion",
    studentName: "Janice Zion Castelino",
    grade: "Class 3A",
    description: "Janice Zion Castelino of Class 3A achieved outstanding success by being crowned Champion in the Abacus Level-2 Category at the prestigious State Level Abacus Competition held at Tumkur on 25th December 2024. Her extraordinary speed, mental arithmetic accuracy, and dedication reflect the school's commitment to nurturing sharp mathematical minds from early foundational years."
  },
  {
    id: "geetha-gayana-scouts-guides",
    itemLetter: "C",
    title: "Geetha Gayana Competition – The Bharat Scouts & Guides",
    category: "scouts",
    categoryLabel: "Scouts & Guides",
    categoryIcon: "⚜️",
    date: "30th July 2024",
    venue: "Anandha Thirtha School, Pajaka",
    organizedBy: "The Bharat Scouts and Guides",
    awardBadge: "1st & 3rd Place Winners",
    image: "/clubs/th-22.jpg",
    description: "The Bharat Scouts and Guides organized the Geetha Gayana Competition for the Bulbuls, Cubs, Scouts, and Guides categories at Anandha Thirtha School, Pajaka on July 30th. Demonstrating exceptional vocal harmony and cultural poise, our Bulbuls won First Place and Cubs won Third Place in this highly competitive event.",
    subGroups: [
      {
        groupName: "Bulbuls Participants",
        prize: "First Place (Champions)",
        members: [
          "Nicole Alva",
          "Aurel Saldanha",
          "Sara",
          "Hanin",
          "Izma"
        ]
      },
      {
        groupName: "Cubs Participants",
        prize: "Third Place",
        members: [
          "Alnic Danthy",
          "Rico Nicolas Pinto",
          "Christon",
          "Royvin",
          "Mohammed Ihan",
          "Mohammed Afeel"
        ]
      }
    ]
  },
  {
    id: "road-safety-awareness-scouts-guides",
    itemLetter: "D",
    title: "Road Safety Awareness Programme & Rally",
    category: "scouts",
    categoryLabel: "Scouts & Guides",
    categoryIcon: "🛡️",
    date: "15th January 2025",
    venue: "Shirva Town & Police Station Precinct",
    organizedBy: "Shirva Police Station in association with Bharat Scouts and Guides Udupi District Association",
    awardBadge: "Civic Leadership & Awareness",
    description: "On 15th January 2025, 20 scouts and guides from Don Bosco English Medium School, Shirva, actively participated in the Road Safety Awareness Programme and Rally organized by Shirva Police Station in association with the Bharat Scouts and Guides Udupi District Association. The scoutmaster along with the students actively walked the rally, displaying informative placards and distributing safety flyers to promote road discipline and protect lives.",
    dignitaries: [
      "DYSP Karkala",
      "Smt. Jayashree Maane – Inspector of Shirva",
      "Shri Sakthi Velu – Sub-Inspector of Shirva Police Station",
      "Shri N.M. Hegde – Vice President, Bharat Scouts and Guides Udupi District",
      "Faculty Members & Scoutmasters"
    ]
  },
  {
    id: "podac-bootcamp-adventure-skills",
    itemLetter: "E",
    title: "PODAC Boot Camp Adventure Skills Competition",
    category: "adventure",
    categoryLabel: "Outdoor & Adventure",
    categoryIcon: "🏕️",
    date: "11th January 2025",
    venue: "Prestige International School, Mangalore",
    organizedBy: "PODAC Adventure Club",
    awardBadge: "Outstanding Team Resilience",
    description: "The Don Bosco School Adventure Team showcased exceptional skills and teamwork at the PODAC Boot Camp Adventure Skills Competition, held on January 11, 2025, at Prestige International School, Mangalore. Competing against teams from various institutions, the students displayed remarkable courage, adaptability, and determination as they tackled a series of challenging tasks.",
    additionalParagraphs: [
      "The event offered a platform to test their physical endurance, mental resilience, and problem-solving abilities through activities such as obstacle courses, survival skills, and team challenges. With each task requiring effective collaboration and quick decision-making, the Don Bosco team stood out for their seamless coordination and unwavering team spirit.",
      "This unique competition served as a memorable experience for the participants, fostering important life skills like leadership, perseverance, and camaraderie. The dynamic environment encouraged the students to push their limits while building confidence and mutual trust. The school’s emphasis on holistic development was evident in their outstanding performance, as the team not only excelled in individual tasks but also upheld the values of sportsmanship and unity. The PODAC Boot Camp Adventure proved to be more than just a competition—it was an enriching journey that left the participants with valuable lessons and unforgettable memories."
    ]
  },
  {
    id: "ysm-cultural-dance-competition",
    itemLetter: "F",
    title: "YSM Convention – Cultural Dance Competition",
    category: "cultural",
    categoryLabel: "Cultural & Performing Arts",
    categoryIcon: "💃",
    date: "6th January 2025",
    venue: "Milagres Cathedral Church Hall, Kallianpura",
    organizedBy: "Young Students' Movement (YSM)",
    awardBadge: "1st Place Champions",
    image: "/clubs/th-15.jpg",
    description: "Congratulations to our talented Don Bosco YSM (Young Students' Movement) students for achieving First Place in the cultural dance competition at the YSM Convention held on January 6, 2025, at the Milagres Cathedral Church Hall, Kallianpura. Their mesmerizing performance captivated the audience and judges alike, showcasing their exceptional talent, creativity, and dedication.",
    additionalParagraphs: [
      "The team’s hard work and meticulous preparation were evident in every step, as they flawlessly executed intricate choreography that highlighted the rich cultural heritage and artistic flair of our school. Their graceful movements, synchronized coordination, and vibrant costumes brought the stage to life, earning them well-deserved applause and admiration from the convention's participants and attendees.",
      "This remarkable achievement is a testament to the students’ commitment and teamwork, as well as the guidance and support provided by their mentors. The victory not only reflects their artistic excellence but also reinforces the values of unity, perseverance, and passion upheld by the YSM. We are immensely proud of their accomplishment and wish them continued success in all their future endeavors!"
    ]
  },
  {
    id: "aics-cultural-samskrithi-samagam",
    itemLetter: "G",
    title: "AICS Cultural Competition – Samskrithi Samagam",
    category: "cultural",
    categoryLabel: "Cultural & Performing Arts",
    categoryIcon: "🏆",
    date: "20th November 2024",
    venue: "Madhava Kripa CBSE School, Udupi",
    organizedBy: "Association of ICSE & CBSE Schools (AICS)",
    awardBadge: "Overall Champions (Junior Category)",
    description: "Don Bosco School achieved a remarkable feat by being crowned the Overall Champions in the Junior Category at the Samskrithi Samagam, held on November 20, 2024, at Madhava Kripa CBSE School, Udupi.",
    additionalParagraphs: [
      "The students showcased exceptional talent across various cultural events, earning top honors through their creativity, teamwork, and dedication. Their outstanding performances in diverse competitions reflected their holistic development and commitment to excellence. This achievement stands as a testament to the hard work of the students, the guidance of their mentors, and the unwavering support of the school community. Congratulations to the team for this well-deserved victory!"
    ]
  },
  {
    id: "dh-expressions-deccan-herald",
    itemLetter: "H",
    title: "Deccan Herald (DH) Expressions Competition",
    category: "cultural",
    categoryLabel: "Cultural & Performing Arts",
    categoryIcon: "🎭",
    date: "25th November 2024",
    venue: "St. Aloysius College, Mangalore",
    organizedBy: "Deccan Herald",
    awardBadge: "Second Place (State Level)",
    description: "On November 25, 2024, the talented students of Don Bosco School made the institution proud by securing second place in the prestigious Deccan Herald Expressions competition held at St. Aloysius College, Mangalore. The event, known for its high standards and vibrant participation, provided a platform for students to showcase their creativity and talent.",
    additionalParagraphs: [
      "Themed around “National Integration”, the competition aimed to highlight the spirit of unity in diversity, encouraging students to express their ideas and perspectives creatively. The Don Bosco team stood out with their impactful presentation, which combined artistic elements, meaningful messages, and heartfelt performances. Their dedication, teamwork, and innovative approach left a lasting impression on the judges and audience alike.",
      "This remarkable achievement not only reflects the students’ hard work but also emphasizes the school’s commitment to fostering values of harmony and inclusivity. Congratulations to the team and their mentors for this outstanding accomplishment!"
    ]
  },
  {
    id: "vedic-math-champion-joshua",
    itemLetter: "I",
    title: "Vedic Maths – State Level Abacus Competition",
    category: "academics",
    categoryLabel: "Academics & Mental Math",
    categoryIcon: "⚡",
    date: "25th December 2024",
    venue: "Tumkur",
    awardBadge: "Champion of Champions",
    studentName: "Joshua Vivian Castelino",
    grade: "Class 8A",
    description: "Joshua Vivian Castelino of Class 8A achieved the prestigious title of Champion of Champions in the Vedic Maths Level-1 Category at the State Level Abacus Competition. The event took place in Tumkur on 25th December 2024.",
    additionalParagraphs: [
      "This remarkable achievement showcases his exceptional mathematical abilities, computational agility, and rigorous discipline, setting an inspiring example for his peers. Winning at such a high competitive state level highlights Joshua's passion and mastery over the intricate formulas and speed algorithms of Vedic Mathematics."
    ]
  }
];

export const galleryCategories = [
  { id: 'all', label: 'All Exhibits', count: 9 },
  { id: 'sports', label: 'Sports & Martial Arts', count: 1 },
  { id: 'academics', label: 'Academics & Vedic Math', count: 2 },
  { id: 'scouts', label: 'Scouts & Guides', count: 2 },
  { id: 'cultural', label: 'Cultural & Performing Arts', count: 3 },
  { id: 'adventure', label: 'Outdoor & Adventure', count: 1 },
];
