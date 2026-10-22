export interface GeneralInfoItem {
  no: string;
  label: string;
  value: string;
  icon?: string;
  link?: string;
}

export interface DisclosureDocument {
  no: string;
  title: string;
  authority: string;
  fileUrl: string;
  fileSize: string;
  fileType: 'PDF';
  tag: string;
}

export interface AcademicLinkItem {
  no: string;
  title: string;
  description: string;
  linkText: string;
  url: string;
  isExternal?: boolean;
  isDownload?: boolean;
  icon: string;
}

export interface BoardExamResult {
  year: string;
  registered: number;
  passed: number;
  passPercentage: string;
  remarks: string;
}

export interface StaffInfo {
  principal: {
    name: string;
    qualifications: string;
  };
  totalTeachers: number;
  breakdown: {
    pgt: number;
    tgt: number;
    prt: number;
  };
  sectionRatio: string;
  specialEducators: number;
  counsellors: number;
}

export interface InfrastructureItem {
  no: string;
  parameter: string;
  detail: string;
  metric?: string;
  icon: string;
}

export const generalInfo: GeneralInfoItem[] = [
  {
    no: '1',
    label: 'Name of the School',
    value: 'Don Bosco English Medium School Shirva',
    icon: 'school'
  },
  {
    no: '2',
    label: 'Affiliation No (CBSE)',
    value: '830838',
    icon: 'certificate'
  },
  {
    no: '3',
    label: 'School Code',
    value: '45731',
    icon: 'badge'
  },
  {
    no: '4',
    label: 'Complete Address with Pin Code',
    value: 'Don Bosco English Medium School, Shirva, Kaup Taluk, Udupi District, Karnataka – 574116',
    icon: 'pin'
  },
  {
    no: '5',
    label: 'Principal Name & Qualification',
    value: 'Rev. Fr Rolwyn Joy Aranha, M.Sc., B.Ed',
    icon: 'person'
  },
  {
    no: '6',
    label: 'School Email ID',
    value: 'shirvadonboscoschool@gmail.com',
    link: 'mailto:shirvadonboscoschool@gmail.com',
    icon: 'email'
  },
  {
    no: '7',
    label: 'Contact Details',
    value: '8722089715 / 6362565727 / 0820-2553320',
    link: 'tel:+918722089715',
    icon: 'phone'
  }
];

export const complianceDocuments: DisclosureDocument[] = [
  {
    no: '1',
    title: 'Copies of Affiliation / Upgradation Letter and Recent Extension of Affiliation',
    authority: 'Central Board of Secondary Education (CBSE)',
    fileUrl: '/mandatory-public-disclosure/affiliation-upgradation-letter.pdf',
    fileSize: '97 KB',
    fileType: 'PDF',
    tag: 'Affiliation'
  },
  {
    no: '2',
    title: 'Copies of Societies / Trust / Company Registration / Renewal Certificate',
    authority: 'The Catholic Board of Education & Trust Reg.',
    fileUrl: '/mandatory-public-disclosure/trust-registration-certificate.pdf',
    fileSize: '477 KB',
    fileType: 'PDF',
    tag: 'Trust / Society'
  },
  {
    no: '3',
    title: 'Copy of No Objection Certificate (NOC) Issued by State Govt / UT',
    authority: 'Government of Karnataka (Dept of Education)',
    fileUrl: '/mandatory-public-disclosure/noc-state-govt.pdf',
    fileSize: '219 KB',
    fileType: 'PDF',
    tag: 'State NOC'
  },
  {
    no: '4',
    title: 'Copies of Recognition Certificate Under RTE Act, 2009 and its Renewal',
    authority: 'Department of Public Instruction Karnataka',
    fileUrl: '/mandatory-public-disclosure/rte-recognition-certificate.pdf',
    fileSize: '772 KB',
    fileType: 'PDF',
    tag: 'RTE 2009'
  },
  {
    no: '5',
    title: 'Copy of Valid Building Safety Certificate as per National Building Code',
    authority: 'Public Works Department (PWD) / Chartered Engineer',
    fileUrl: '/mandatory-public-disclosure/building-safety-certificate.pdf',
    fileSize: '153 KB',
    fileType: 'PDF',
    tag: 'Building Safety'
  },
  {
    no: '6',
    title: 'Copy of Valid Fire Safety Certificate Issued by Competent Authority',
    authority: 'Karnataka State Fire & Emergency Services',
    fileUrl: '/mandatory-public-disclosure/fire-safety-certificate.pdf',
    fileSize: '158 KB',
    fileType: 'PDF',
    tag: 'Fire Safety'
  },
  {
    no: '7',
    title: 'Copy of the DEO Certificate Submitted for Affiliation / Self-Certification',
    authority: 'District Education Officer (DEO), Udupi',
    fileUrl: '/mandatory-public-disclosure/deo-self-certification.pdf',
    fileSize: '916 KB',
    fileType: 'PDF',
    tag: 'DEO Verification'
  },
  {
    no: '8',
    title: 'Copies of Valid Water, Health and Sanitation Certificates',
    authority: 'Taluk Health Officer / Public Health Department',
    fileUrl: '/mandatory-public-disclosure/water-health-sanitation-certificate.pdf',
    fileSize: '1.05 MB',
    fileType: 'PDF',
    tag: 'Sanitation & Health'
  }
];

export const academicDisclosures: AcademicLinkItem[] = [
  {
    no: '1',
    title: 'Fee Structure of the School',
    description: 'Comprehensive annual tuition, activities, and lab fee breakdown across primary, middle, and senior secondary streams.',
    linkText: 'View Fee Structure',
    url: '/fee-structure',
    icon: 'receipt'
  },
  {
    no: '2',
    title: 'Annual Academic Calendar',
    description: 'Schedule of terms, assessment periods, extracurricular events, and school holidays for the active academic session.',
    linkText: 'Download Calendar PDF',
    url: '/mandatory-public-disclosure/annual-academic-calendar.pdf',
    isDownload: true,
    icon: 'calendar'
  },
  {
    no: '3',
    title: 'List of School Management Committee (SMC)',
    description: 'Official roster of SMC members overseeing institutional administration, curriculum standards, and campus welfare.',
    linkText: 'View SMC Members',
    url: '/about/school-management',
    icon: 'users'
  },
  {
    no: '4',
    title: 'List of Parents Teachers Association (PTA) Members',
    description: 'Parent and faculty representatives collaborating on student guidance, parent feedback, and enrichment activities.',
    linkText: 'View PTA Committee',
    url: '/parent-teacher-association',
    icon: 'heart-handshake'
  },
  {
    no: '5',
    title: 'Last Three-Year Result of Board Examination',
    description: 'Official CBSE Class X and Class XII board examination performance records, distinction tallies, and toppers.',
    linkText: 'View Board Results',
    url: '/board-results',
    icon: 'trophy'
  }
];

export const resultsClassX: BoardExamResult[] = [
  {
    year: '2021-22',
    registered: 89,
    passed: 89,
    passPercentage: '100%',
    remarks: '100% Pass — All Students Promoted'
  },
  {
    year: '2022-23',
    registered: 75,
    passed: 75,
    passPercentage: '100%',
    remarks: '100% Pass — Exemplary Distinctions'
  },
  {
    year: '2023-24',
    registered: 74,
    passed: 74,
    passPercentage: '100%',
    remarks: '100% Pass — Consecutive Perfect Score'
  }
];

export const resultsClassXII: BoardExamResult[] = [
  {
    year: '2022-23',
    registered: 30,
    passed: 30,
    passPercentage: '100%',
    remarks: '100% Pass — Outstanding Science & Commerce Cohort'
  },
  {
    year: '2023-24',
    registered: 32,
    passed: 29,
    passPercentage: '93.75%',
    remarks: '93.75% Pass — High First Class Aggregate'
  }
];

export const staffInfo: StaffInfo = {
  principal: {
    name: 'Rev. Fr Rolwyn Joy Aranha',
    qualifications: 'M.Sc., B.Ed'
  },
  totalTeachers: 45,
  breakdown: {
    pgt: 12,
    tgt: 32,
    prt: 1
  },
  sectionRatio: '30:1',
  specialEducators: 0,
  counsellors: 3
};

export const infrastructureData: InfrastructureItem[] = [
  {
    no: '1',
    parameter: 'Total Campus Area of the School',
    detail: '8,093 Sq. Meters (~2.00 Acres)',
    metric: '8,093 m²',
    icon: 'building'
  },
  {
    no: '2',
    parameter: 'Number & Size of Classrooms',
    detail: '24 Spacious Ventilated Classrooms',
    metric: '4,830 m²',
    icon: 'classroom'
  },
  {
    no: '3',
    parameter: 'Number & Size of Laboratories (incl. Computer Lab)',
    detail: '5 Well-equipped Physics, Chem, Bio, Math & Computer Labs',
    metric: '5,759 m²',
    icon: 'flask'
  },
  {
    no: '4',
    parameter: 'Internet Facility',
    detail: 'High-speed broadband Wi-Fi across campus & digital suites',
    metric: 'Active (Y)',
    icon: 'wifi'
  },
  {
    no: '5',
    parameter: 'Number of Girls Toilets',
    detail: 'Hygienic, segregated facilities with sanitation amenities',
    metric: '7 Units',
    icon: 'shield-check'
  },
  {
    no: '6',
    parameter: 'Number of Boys Toilets',
    detail: 'Hygienic, well-maintained sanitation facilities',
    metric: '7 Units',
    icon: 'shield-check'
  }
];

export const inspectionVideo = {
  title: 'Official School Infrastructure Inspection Video',
  description: 'Comprehensive video tour covering our modern classrooms, advanced science and computer laboratories, playground, safety provisions, and student facilities as inspected for CBSE compliance.',
  youtubeUrl: 'https://youtu.be/jCDqwOHPoq4?si=L20ONKoVwMZxpyXY',
  videoId: 'jCDqwOHPoq4',
  embedUrl: 'https://www.youtube-nocookie.com/embed/jCDqwOHPoq4'
};
