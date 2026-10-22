export interface AdmissionForm {
  id: string;
  title: string;
  grades: string;
  filename: string;
  url: string;
  fileSize: string;
  description: string;
  badge: string;
}

export interface AgeCriterion {
  grade: string;
  age: string;
  note: string;
  icon: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  detail?: string;
  isOptional?: boolean;
}

export const admissionData = {
  academicYear: "2025 – 26",
  headline: "Admissions Open for Academic Year 2025 – 26",
  subtitle: "Nurturing young minds with holistic CBSE education, moral character, and innovative learning.",
  contactPhone: "+91 87220 89715",
  contactPhoneRaw: "8722089715",
  contactEmail: "shirvadonboscoschool@gmail.com",
  officeHours: "Monday to Friday: 9:00 AM – 4:00 PM | Saturday: 9:00 AM – 1:00 PM",
  onlinePortalUrl: "https://admission.donboscoschoolshirva.edu.in",
  
  offlineGuidelines: [
    "Every candidate for admission must be introduced in person by the parent / guardian who will be responsible to the Principal for the child’s studies and conduct outside the school.",
    "Pupils coming from other schools should produce the ‘Transfer Certificate’ (TC) issued by the head of the school concerned.",
    "Pupils coming from schools outside our District and State will be admitted on submission of Transfer Certificate duly countersigned by the inspecting officers in charge of the institutions in strict conformity with the table of standards issued by the department.",
    "Date of birth furnished in the Transfer Certificate will be taken as correct. In case of pupils to be newly admitted, the correct date of birth should be furnished in the application for admission and necessary documentary evidence must be produced.",
    "After submitting the admission form, the school shall schedule an interaction/written test for the student as per the grades applied.",
    "Admissions are made by the Principal after a personal interview with the student."
  ],

  offlineNote: "Admission forms are available in the school office. They need to be duly filled and submitted to the Principal for further evaluation. Admission forms can also be downloaded directly from this page and submitted to the Principal.",

  downloadableForms: [
    {
      id: "nursery",
      title: "Nursery Admission Form",
      grades: "Nursery / Play School",
      filename: "nursery-admission-form.pdf",
      url: "/admission/nursery-admission-form.pdf",
      fileSize: "1.95 MB",
      description: "Application form for Nursery and Play School admission for children aged 3 years.",
      badge: "Pre-Primary"
    },
    {
      id: "kg",
      title: "Kindergarten Application Form",
      grades: "LKG & UKG",
      filename: "kg-application-form.pdf",
      url: "/admission/kg-application-form.pdf",
      fileSize: "7.8 MB",
      description: "Official registration form for Lower Kindergarten (LKG) and Upper Kindergarten (UKG).",
      badge: "Early Childhood"
    },
    {
      id: "class-1-to-9",
      title: "Class I to IX Admission Form",
      grades: "Grade I through Grade IX",
      filename: "admission-form-class-1-to-9.pdf",
      url: "/admission/admission-form-class-1-to-9.pdf",
      fileSize: "468 KB",
      description: "Comprehensive admission application form for Primary and Middle School standards.",
      badge: "Primary & Secondary"
    }
  ] as AdmissionForm[],

  onlineGuidelines: [
    {
      step: 1,
      title: "Choose Grade & Portal",
      description: "Click on the Apply Now button below as per the choice of the class to be admitted."
    },
    {
      step: 2,
      title: "Complete Online Form",
      description: "Carefully fill the online Admission Form with student name and date of birth exactly as per official approved documents."
    },
    {
      step: 3,
      title: "Print & Sign Form",
      description: "Print the completed admission form and affix the signatures of the authorized parent or guardian."
    },
    {
      step: 4,
      title: "Receive School Notification",
      description: "You will receive an official message regarding the acceptance of your request for admission via registered email or mobile SMS."
    },
    {
      step: 5,
      title: "Campus Verification",
      description: "Submit the physical Admission Form along with all mandatory supporting documents at the school office for final verification."
    }
  ],

  ageCriteria: [
    {
      grade: "Play School",
      age: "3 Years",
      note: "As on June 1st of the academic year",
      icon: "🧸"
    },
    {
      grade: "LKG",
      age: "4 Years",
      note: "As on June 1st of the academic year",
      icon: "🎨"
    },
    {
      grade: "UKG",
      age: "5 Years",
      note: "As on June 1st of the academic year",
      icon: "✏️"
    },
    {
      grade: "Grade 1",
      age: "6 Years",
      note: "As on June 1st of the academic year",
      icon: "📚"
    }
  ] as AgeCriterion[],

  admissionProcessSteps: [
    {
      step: "01",
      title: "Application Submission",
      description: "The admission procedure starts by submitting the application form available either offline at the school office or online via our digital portal."
    },
    {
      step: "02",
      title: "Interaction / Written Test",
      description: "Once the form is submitted, the Admissions Unit schedules an interaction or written test for the student based on the applied grade."
    },
    {
      step: "03",
      title: "Campus Visit & Principal Meeting",
      description: "A school visit is scheduled for the parents and candidate. Both parents must be present for the personal interaction with the Principal."
    },
    {
      step: "04",
      title: "Approval & Document Submission",
      description: "On approval by the Principal, admission is granted. All mandatory documents must be submitted within 7 days of confirmation."
    }
  ],

  requiredDocuments: [
    {
      id: "photos",
      title: "3 Passport Size Photographs",
      detail: "Recent colored passport-size photographs of the student in formal attire."
    },
    {
      id: "aadhar",
      title: "Aadhar Card Copy",
      detail: "Photocopies of Aadhar Cards of both the student and parents/guardians."
    },
    {
      id: "birth-cert",
      title: "Birth Certificate Copy",
      detail: "Official Municipal or Gram Panchayat birth certificate copy."
    },
    {
      id: "caste-cert",
      title: "Caste Certificate Copy",
      detail: "Applicable if seeking reservation/concession under government norms.",
      isOptional: true
    },
    {
      id: "pen-apaar",
      title: "Permanent Education Number (PEN) & APAAR ID",
      detail: "Mandatory as per Ministry of Education / CBSE unified student tracking."
    },
    {
      id: "study-cert",
      title: "Study Certificate",
      detail: "Mandatory for NRI students or students relocating from other schooling boards.",
      isOptional: true
    },
    {
      id: "tc",
      title: "Original Transfer Certificate (TC)",
      detail: "With valid Student Tracking System (STS) Number (where applicable).",
      isOptional: true
    },
    {
      id: "report-card",
      title: "Copy of Latest Report Card",
      detail: "Mark sheet / progress card of the previous academic term or grade.",
      isOptional: true
    }
  ] as DocumentItem[],

  brochure: {
    title: "Don Bosco School Admission Brochure",
    image: "/admission/admission-brochure.png",
    downloadUrl: "/admission/admission-brochure.png",
    description: "Official visual admission brochure outlining academic excellence, state-of-the-art facilities, sports curriculum, and value-based development."
  },

  campusPhotos: [
    {
      src: "/admission/admission-photo-1.jpg",
      alt: "Don Bosco English Medium School Campus & Classrooms",
      caption: "Vibrant and engaging learning spaces"
    },
    {
      src: "/admission/admission-photo-2.jpg",
      alt: "Don Bosco School Shirva Campus Activities",
      caption: "Holistic campus life and co-curricular programs"
    }
  ]
};
