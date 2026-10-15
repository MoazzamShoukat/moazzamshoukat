export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  groupTitle: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavSubItem[];
  megaMenu?: NavGroup[];
}

export const headerNav: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Preparation",
    href: "/preparation/naati/vocabulary/",
    megaMenu: [
      {
        groupTitle: "NAATI CCL Urdu",
        items: [
          {
            label: "Vocabulary Dictionary",
            href: "/preparation/naati/vocabulary/",
            description: "7,796+ bilingual terms with Urdu words & 46,700+ dialogue sentences",
            badge: "7,796 Terms"
          },
          {
            label: "Exam Dialogues",
            href: "/preparation/naati/dialogues/",
            description: "Consecutive interpreting scenarios across 6 community domains",
            badge: "Coming Soon"
          },
          {
            label: "Mock Practice Tests",
            href: "/preparation/naati/practice-tests/",
            description: "Timed exam simulations with score deduction analysis",
            badge: "Coming Soon"
          }
        ]
      },
      {
        groupTitle: "PTE Academic & Core",
        items: [
          {
            label: "Speaking",
            href: "/preparation/pte/speaking/",
            description: "Read Aloud, Repeat Sentence, Describe Image, Retell Lecture, ASQ, SGD, RTS"
          },
          {
            label: "Writing",
            href: "/preparation/pte/writing/",
            description: "Summarize Written Text & 20-minute Essay templates"
          },
          {
            label: "Reading",
            href: "/preparation/pte/reading/",
            description: "Fill in the Blanks, Re-order Paragraphs & Multiple Choice"
          },
          {
            label: "Listening",
            href: "/preparation/pte/listening/",
            description: "Summarize Spoken Text & Write from Dictation mastery"
          },
          {
            label: "PTE Core (Canada PR)",
            href: "/preparation/pte-core/",
            description: "CLB 7/9/10 preparation for Canadian Express Entry"
          }
        ]
      },
      {
        groupTitle: "IELTS & Other Tests",
        items: [
          {
            label: "IELTS Academic",
            href: "/preparation/ielts-academic/",
            description: "Band 7.5+ strategies for university admissions & visas"
          },
          {
            label: "IELTS General Training",
            href: "/preparation/ielts-general/",
            description: "Targeted modules for migration to Canada & Australia"
          },
          {
            label: "Duolingo English Test",
            href: "/preparation/duolingo/",
            description: "Adaptive testing tactics for 120-135+ band scores"
          },
          {
            label: "CELPIP",
            href: "/preparation/celpip/",
            description: "Canadian English Language Proficiency Index Program"
          }
        ]
      }
    ]
  },
  {
    label: "Coaching",
    href: "/online-pte-classes/",
    children: [
      {
        label: "Online PTE Classes",
        href: "/online-pte-classes/",
        description: "1-on-1 live coaching for Pakistan, Australia & worldwide"
      },
      {
        label: "PTE Trainer in Lahore",
        href: "/pte-trainer-lahore/",
        description: "In-person & hybrid classes with mock exam simulations"
      },
      {
        label: "PTE Core for Canada PR",
        href: "/pte-core-preparation/",
        description: "CLB 9/10 preparation for Canadian Express Entry"
      },
      {
        label: "NAATI CCL Urdu Preparation",
        href: "/naati-ccl-urdu-preparation/",
        description: "+5 bonus PR points with 50+ authentic dialogues"
      },
      {
        label: "IELTS Trainer in Lahore",
        href: "/ielts-trainer-lahore/",
        description: "Band 7.5+ & 8.0 coaching with speaking room diagnostics"
      }
    ]
  },
  {
    label: "Immigration",
    href: "/australia-skilled-migration/",
    children: [
      {
        label: "Australia Skilled Migration",
        href: "/australia-skilled-migration/",
        description: "Points test optimization for Subclasses 189, 190 & 491"
      },
      {
        label: "Skills Assessment Guidance",
        href: "/skill-assessment-guidance/",
        description: "ACS IT, Engineers Australia CDR & VETASSESS dossiers"
      },
      {
        label: "PR Points Advisory Lahore",
        href: "/australian-immigration-consultant/",
        description: "Strategic case roadmaps & SkillSelect EOI planning"
      },
      {
        label: "Canada Express Entry",
        href: "/canada-immigration/",
        description: "STEM priority draws, CRS points & PNP strategies"
      },
      {
        label: "Student Visa Guidance",
        href: "/student-visa/",
        description: "Genuine Student (GS) statements & admission planning"
      }
    ]
  },
  {
    label: "Pricing",
    href: "/pricing/"
  },
  {
    label: "Success Stories",
    href: "/success-stories/"
  },
  {
    label: "Blog",
    href: "/blog/"
  }
];

export const footerServiceLinks = [
  { label: "Transparent Pricing & Packages", href: "/pricing/" },
  { label: "NAATI CCL Urdu Dictionary (7,796 Terms)", href: "/preparation/naati/vocabulary/" },
  { label: "Online PTE Classes (1-on-1)", href: "/online-pte-classes/" },
  { label: "PTE Trainer in Lahore", href: "/pte-trainer-lahore/" },
  { label: "PTE Core for Canada PR", href: "/pte-core-preparation/" },
  { label: "NAATI CCL Urdu Preparation", href: "/naati-ccl-urdu-preparation/" },
  { label: "IELTS Trainer in Lahore", href: "/ielts-trainer-lahore/" },
  { label: "Australia Skilled Migration (189/190/491)", href: "/australia-skilled-migration/" },
  { label: "Skills Assessment (ACS / EA CDR)", href: "/skill-assessment-guidance/" },
  { label: "Canada Express Entry & PNP", href: "/canada-immigration/" }
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing & Packages", href: "/pricing/" },
  { label: "Preparation Hub", href: "/preparation/naati/vocabulary/" },
  { label: "About Moazzam", href: "/about/" },
  { label: "All Services", href: "/services/" },
  { label: "Success Stories", href: "/success-stories/" },
  { label: "Knowledge Hub & Blog", href: "/blog/" },
  { label: "Contact & Consultations", href: "/contact/" }
];