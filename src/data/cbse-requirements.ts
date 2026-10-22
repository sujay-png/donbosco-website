export interface CbseRequirementItem {
  id: string;
  no: string;
  title: string;
  category: 'affiliation' | 'safety' | 'governance' | 'academics';
  categoryLabel: string;
  imgSrc: string;
  pdfUrl?: string;
  pageUrl?: string;
  fileSize?: string;
  authority: string;
  description: string;
}

export const cbseRequirementsData: CbseRequirementItem[] = [
  {
    id: 'affiliation-cert-1',
    no: '01',
    title: 'Affiliation Certificate (Page 1)',
    category: 'affiliation',
    categoryLabel: 'Affiliation & Approvals',
    imgSrc: '/cbse/afiliation-c-1.jpg',
    pdfUrl: '/cbse/affiliation-page-1.pdf',
    fileSize: '1.1 MB',
    authority: 'Central Board of Secondary Education (CBSE)',
    description: 'Initial provisional affiliation approval grant order from CBSE New Delhi for Secondary School syllabus.'
  },
  {
    id: 'affiliation-cert-2',
    no: '02',
    title: 'Affiliation Certificate (Page 2)',
    category: 'affiliation',
    categoryLabel: 'Affiliation & Approvals',
    imgSrc: '/cbse/afiliation-c-2.jpg',
    pdfUrl: '/cbse/affiliation-page-2.pdf',
    fileSize: '97 KB',
    authority: 'Central Board of Secondary Education (CBSE)',
    description: 'Official extension and confirmation of Senior Secondary affiliation accreditation from CBSE.'
  },
  {
    id: 'society-registration',
    no: '03',
    title: 'Certificate of Registration of Society / Trust',
    category: 'affiliation',
    categoryLabel: 'Affiliation & Approvals',
    imgSrc: '/cbse/3.jpg',
    pdfUrl: '/mandatory-public-disclosure/trust-registration-certificate.pdf',
    fileSize: '477 KB',
    authority: 'Catholic Board of Education & Trust Registrar',
    description: 'Statutory registration and renewal documentation of the Catholic Board of Education sponsoring the institution.'
  },
  {
    id: 'noc-state-govt',
    no: '04',
    title: 'No Objection Certificate (NOC)',
    category: 'affiliation',
    categoryLabel: 'Affiliation & Approvals',
    imgSrc: '/cbse/4.jpg',
    pdfUrl: '/mandatory-public-disclosure/noc-state-govt.pdf',
    fileSize: '219 KB',
    authority: 'Government of Karnataka (Dept of Education)',
    description: 'State Government NOC authorizing English Medium CBSE curriculum operations in Udupi District.'
  },
  {
    id: 'recognition-rte',
    no: '05',
    title: 'Recognition Certificate Under RTE Act, 2009',
    category: 'safety',
    categoryLabel: 'Safety & Health',
    imgSrc: '/cbse/5.jpg',
    pdfUrl: '/mandatory-public-disclosure/rte-recognition-certificate.pdf',
    fileSize: '772 KB',
    authority: 'Department of Public Instruction, Karnataka',
    description: 'Official RTE 2009 compliance certificate granting recognition for primary and middle school grades.'
  },
  {
    id: 'building-safety',
    no: '06',
    title: 'Building Safety Certificate',
    category: 'safety',
    categoryLabel: 'Safety & Health',
    imgSrc: '/cbse/6.jpg',
    pdfUrl: '/mandatory-public-disclosure/building-safety-certificate.pdf',
    fileSize: '153 KB',
    authority: 'Chartered Structural Engineer / PWD Norms',
    description: 'Structural stability and campus safety verification in strict compliance with the National Building Code (NBC).'
  },
  {
    id: 'fire-safety',
    no: '07',
    title: 'Fire Safety Certificate',
    category: 'safety',
    categoryLabel: 'Safety & Health',
    imgSrc: '/cbse/7-1.jpg',
    pdfUrl: '/mandatory-public-disclosure/fire-safety-certificate.pdf',
    fileSize: '158 KB',
    authority: 'Karnataka State Fire & Emergency Services',
    description: 'Valid fire prevention, emergency exit, and hydrants clearance certificate issued by the competent authority.'
  },
  {
    id: 'deo-certificate',
    no: '08',
    title: 'DEO Certificate / Self Certification',
    category: 'affiliation',
    categoryLabel: 'Affiliation & Approvals',
    imgSrc: '/cbse/8-1.jpg',
    pdfUrl: '/mandatory-public-disclosure/deo-self-certification.pdf',
    fileSize: '916 KB',
    authority: 'District Education Officer (DEO), Udupi',
    description: 'DEO verification letter and school self-certification submitted for affiliation renewal and compliance.'
  },
  {
    id: 'water-sanitation',
    no: '09',
    title: 'Water, Health and Sanitation Certificates',
    category: 'safety',
    categoryLabel: 'Safety & Health',
    imgSrc: '/cbse/10-2.jpg',
    pdfUrl: '/mandatory-public-disclosure/water-health-sanitation-certificate.pdf',
    fileSize: '1.05 MB',
    authority: 'Taluk Health Officer & Public Health Lab',
    description: 'Drinking water potability laboratory test report and campus hygiene sanitation clearance certificate.'
  },
  {
    id: 'fee-structure',
    no: '10',
    title: 'Fee Structure of the School',
    category: 'governance',
    categoryLabel: 'Institutional Framework',
    imgSrc: '/cbse/Fee.jpg',
    pageUrl: '/fee-structure',
    authority: 'School Management Committee & PTA',
    description: 'Official fee breakdown for Primary, Middle, Secondary, and Senior Secondary classes without capitation fees.'
  },
  {
    id: 'academic-calendar',
    no: '11',
    title: 'Annual Academic Calendar',
    category: 'academics',
    categoryLabel: 'Academics & Outcomes',
    imgSrc: '/cbse/DON.jpg',
    pdfUrl: '/mandatory-public-disclosure/annual-academic-calendar.pdf',
    pageUrl: '/academic-calendar',
    fileSize: '2.0 MB',
    authority: 'Academic Council & CBSE',
    description: 'Comprehensive schedule of term examination dates, co-curricular events, sports meets, and official holidays.'
  },
  {
    id: 'smc-committee',
    no: '12',
    title: 'School Management Committee (SMC)',
    category: 'governance',
    categoryLabel: 'Institutional Framework',
    imgSrc: '/cbse/SCHOOL-MNGMT.jpg',
    pageUrl: '/about/school-management',
    authority: 'Don Bosco Educational Society',
    description: 'Official list of administrative committee members, educationists, and parent trustees governing the institution.'
  },
  {
    id: 'pta-members',
    no: '13',
    title: 'Parents Teachers Association (PTA) Members',
    category: 'governance',
    categoryLabel: 'Institutional Framework',
    imgSrc: '/cbse/pta.jpg',
    pageUrl: '/parent-teacher-association',
    authority: 'General PTA Body',
    description: 'Roster of parent and teacher executive committee representatives fostering school-community synergy.'
  },
  {
    id: 'board-results',
    no: '14',
    title: 'Three-Year Board Examination Results',
    category: 'academics',
    categoryLabel: 'Academics & Outcomes',
    imgSrc: '/cbse/Board-R.jpg',
    pageUrl: '/board-results',
    authority: 'CBSE Examination Controller',
    description: 'Official Class X and Class XII board examination performance records highlighting consecutive 100% pass scores.'
  },
  {
    id: 'land-certificate',
    no: '15',
    title: 'Land Certificate & Title Deed',
    category: 'affiliation',
    categoryLabel: 'Affiliation & Approvals',
    imgSrc: '/cbse/th2.png',
    pdfUrl: '/cbse/Land-certificate.pdf',
    fileSize: '173 KB',
    authority: 'Sub-Registrar Office, Kaup / Tahsildar',
    description: 'Official land ownership and non-encumbrance certificate confirming over 2.00 acres of dedicated educational campus.'
  }
];

export const cbseHighlights = [
  { label: 'Affiliation Status', val: 'CBSE Affiliated', sub: 'Secondary & Sr. Secondary' },
  { label: 'Affiliation Number', val: '830838', sub: 'School Code: 45731' },
  { label: 'Total Verified Certs', val: '15 Documents', sub: 'All Regulatory Cleared' },
  { label: 'Campus Land Area', val: '8,093 Sq. Mtrs.', sub: 'Title Deed Certified' }
];
