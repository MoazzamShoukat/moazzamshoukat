export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export const headerNav: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "PTE Coaching",
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
        label: "PTE Core (Canada PR)",
        href: "/pte-core-preparation/",
        description: "CLB 9/10 preparation for Canadian Express Entry"
      }
    ]
  },
  {
    label: "NAATI CCL Urdu",
    href: "/naati-ccl-urdu-preparation/"
  },
  {
    label: "IELTS",
    href: "/ielts-trainer-lahore/"
  },
  {
    label: "Australia PR",
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
        label: "PR Points Guidance Lahore",
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
    label: "All Services",
    href: "/services/"
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
  { label: "Online PTE Classes", href: "/online-pte-classes/" },
  { label: "PTE Trainer in Lahore", href: "/pte-trainer-lahore/" },
  { label: "PTE Core for Canada PR", href: "/pte-core-preparation/" },
  { label: "NAATI CCL Urdu Preparation", href: "/naati-ccl-urdu-preparation/" },
  { label: "IELTS Trainer in Lahore", href: "/ielts-trainer-lahore/" },
  { label: "Australia Skilled Migration (189/190/491)", href: "/australia-skilled-migration/" },
  { label: "Skills Assessment (ACS / EA CDR)", href: "/skill-assessment-guidance/" },
  { label: "Australia PR Points Guidance", href: "/australian-immigration-consultant/" },
  { label: "Canada Express Entry & PNP", href: "/canada-immigration/" },
  { label: "AI Research & Audio Models", href: "/ai-research/" }
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Moazzam", href: "/about/" },
  { label: "All Services", href: "/services/" },
  { label: "Pricing & Fees", href: "/pricing/" },
  { label: "Success Stories", href: "/success-stories/" },
  { label: "Knowledge Hub & Blog", href: "/blog/" },
  { label: "AI & Tech Research", href: "/ai-research/" },
  { label: "Contact & Consultations", href: "/contact/" }
];
