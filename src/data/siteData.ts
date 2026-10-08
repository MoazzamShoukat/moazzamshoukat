export interface SocialLinks {
  linkedin: string;
  scholar: string;
  upwork: string;
  instagram: string;
  facebook: string;
  coachingInstagram: string;
  coachingFacebook: string;
  whatsapp: string;
  email: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Engineering & Data" | "AI & Research" | "Immigration & Tools";
  tag: string;
  role: string;
  period: string;
  shortDesc: string;
  impactMetrics: { label: string; value: string }[];
  stack: string[];
  gradient: string;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface PublicationItem {
  title: string;
  description: string;
  link: string;
  year?: string;
  venue?: string;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
  location: string;
  highlights?: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export const siteData = {
  name: "Moazzam Shoukat",
  roles: [
    "Senior Software Engineer",
    "Data Engineer & AI Researcher",
    "Immigration Consultant (Canada & Australia)",
    "Master English & NAATI CCL Trainer"
  ],
  tagline: "High-impact backend systems, speech AI research, and verified pathways to Canada & Australia.",
  shortBio: "Senior Software Engineer and Data Engineer with a research foundation in speech processing and deep learning. Concurrently, an accredited immigration strategist and language mentor empowering global mobility.",
  
  contact: {
    phone: "+92-328-048-4399",
    whatsapp: "https://wa.me/923280484399",
    email: "moazzamshoukat1@gmail.com",
    location: "Lahore, Punjab, Pakistan",
    availability: "Available for Software Consulting & Immigration Advisory"
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/moazzamshoukat/",
    scholar: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
    upwork: "https://www.upwork.com/freelancers/~013acf6cdef10719d7",
    instagram: "https://www.instagram.com/moazzamshoukat/",
    facebook: "http://facebook.com/moazzamshoukat",
    coachingInstagram: "https://www.instagram.com/coachingbyms",
    coachingFacebook: "https://www.facebook.com/coachingbyms",
    whatsapp: "https://wa.me/923280484399",
    email: "mailto:moazzamshoukat1@gmail.com"
  },

  stats: [
    { value: "06+", label: "Years Experience", sublabel: "Software & Data Systems" },
    { value: "05", label: "Research Papers", sublabel: "Speech, Audio & AI Surveyed" },
    { value: "98%", label: "Immigration Success", sublabel: "Direct Strategic Pathways" },
    { value: "05+", label: "PR Points Boost", sublabel: "Via NAATI CCL Urdu Mastery" }
  ],

  // Selected Work Projects
  selectedProjects: [
    {
      id: "audio-transformers-survey",
      title: "Audio Transformers & Speech AI Foundations",
      category: "AI & Research",
      tag: "Research & Benchmarking",
      role: "Lead Researcher",
      period: "2023 - 2024",
      shortDesc: "In-depth survey and empirical benchmarking of large audio foundation models, cross-language emotion representation, and transformer architectures in speech processing.",
      impactMetrics: [
        { label: "Citations / Papers", value: "5 Published" },
        { label: "Dialects Studied", value: "Cross-lingual" },
        { label: "Focus", value: "Speech AI" }
      ],
      stack: ["Transformers", "PyTorch", "Audio Foundation Models", "Cross-Lingual Transfer", "Google Scholar"],
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      link: "https://scholar.google.com/citations?user=uU550yYAAAAJ"
    },
    {
      id: "enterprise-scraping-etl",
      title: "High-Throughput Scraping & ETL Pipeline Engine",
      category: "Engineering & Data",
      tag: "Data Engineering",
      role: "Senior Data & Backend Engineer",
      period: "2022 - 2024",
      shortDesc: "Distributed web crawler architecture utilizing Scrapy, Selenium, and custom proxy rotation to ingest millions of unstructured web records into PostgreSQL warehousing tables.",
      impactMetrics: [
        { label: "Data Volume", value: "10M+ Records" },
        { label: "Pipeline Uptime", value: "99.9%" },
        { label: "Latency Reduction", value: "45%" }
      ],
      stack: ["Python", "Scrapy", "Selenium", "PostgreSQL", "Peewee ORM", "Docker", "Cron"],
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
      link: "/experience"
    },
    {
      id: "drf-microservice-backend",
      title: "Scalable Web & API Platform at Emulation AI",
      category: "Engineering & Data",
      tag: "Software Engineering",
      role: "Software Engineer",
      period: "2022 - 2024",
      shortDesc: "Enterprise backend platform featuring Django REST Framework, modular middleware, JWT authentication, and query optimization for high-scale enterprise operations.",
      impactMetrics: [
        { label: "Response Speed", value: "<120ms" },
        { label: "Auth Security", value: "JWT + RBAC" },
        { label: "Architecture", value: "RESTful" }
      ],
      stack: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "AWS", "Git"],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      link: "/experience"
    },
    {
      id: "australia-gsm-points-advisor",
      title: "Australia PR Points & EOI Lodgement Strategy",
      category: "Immigration & Tools",
      tag: "Immigration Advisory",
      role: "Immigration Strategist",
      period: "2020 - Present",
      shortDesc: "Strategic advisory portal and algorithmic point calculation framework helping skilled professionals maximize their Subclass 189, 190, and 491 profiles.",
      impactMetrics: [
        { label: "Success Rate", value: "98%" },
        { label: "Average EOI Boost", value: "+25 Points" },
        { label: "Assessing Bodies", value: "ACS, EA, VETASSESS" }
      ],
      stack: ["ANZSCO Code Mapping", "CRS Points Engine", "SkillSelect Optimization", "Legal Compliance"],
      gradient: "from-amber-600/20 via-yellow-600/10 to-transparent",
      link: "/immigration"
    },
    {
      id: "naati-ccl-urdu-suite",
      title: "NAATI CCL Urdu Masterclass & Dialogue Simulator",
      category: "Immigration & Tools",
      tag: "Language Pedagogy",
      role: "Master Coach",
      period: "2021 - Present",
      shortDesc: "Specialized dialogue interpretation curriculum featuring 100+ audio dialogues, domain-specific terminologies, and real-time error mitigation for 5 PR points.",
      impactMetrics: [
        { label: "1st Attempt Pass", value: "94%" },
        { label: "Points Awarded", value: "+5 PR Points" },
        { label: "Vocabulary Corpus", value: "2,000+ Terms" }
      ],
      stack: ["Audio Interpretation", "Urdu-English Lexicons", "Mock Simulations", "Live Mentoring"],
      gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
      link: "/english-training"
    },
    {
      id: "anemia-detection-ai",
      title: "Non-Invasive Anemia Diagnostic Computer Vision",
      category: "AI & Research",
      tag: "Computer Vision",
      role: "Lead Developer (ITU)",
      period: "Academic Project",
      shortDesc: "Non-invasive diagnostic system analyzing palpebral conjunctiva color histograms and machine learning models for early anemia detection without blood samples.",
      impactMetrics: [
        { label: "Accuracy", value: "High Diagnostic" },
        { label: "Method", value: "Non-Invasive" },
        { label: "Domain", value: "Digital Health" }
      ],
      stack: ["Python", "OpenCV", "Scikit-Learn", "Computer Vision", "Digital Health"],
      gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
      link: "/education-research"
    }
  ] as ProjectItem[],

  // Career Experience from CV
  experiences: [
    {
      id: "emulation-ai",
      company: "Emulation AI (Pvt) Ltd",
      role: "Software Engineer",
      period: "Nov 2022 - Dec 2024",
      location: "Pakistan",
      type: "Full-Time",
      description: "Spearheaded backend architecture, high-throughput REST APIs, and automated data processing pipelines for machine learning and web systems.",
      responsibilities: [
        "Architected enterprise web applications using Django, leveraging its ORM, custom middleware, and authentication frameworks.",
        "Optimized database queries and API response times by integrating Django REST Framework (DRF) with custom serialization.",
        "Built automated ETL pipelines for data extraction and warehousing using Scrapy, Selenium, Python, Peewee, and PostgreSQL.",
        "Conducted systems analysis, documented architecture flows, and implemented disaster recovery backup strategies."
      ],
      technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Peewee", "Scrapy", "Selenium", "Docker", "AWS"]
    },
    {
      id: "ibtidah-solutions",
      company: "Ibtidah Solutions (Pvt) Ltd",
      role: "Data Engineer",
      period: "Dec 2018 - Nov 2022",
      location: "Lahore, Pakistan",
      type: "Full-Time",
      description: "Designed core data pipelines, warehousing schemas, and mathematical modeling systems to support enterprise analytics and client operations.",
      responsibilities: [
        "Engineered scalable data ingestion pipelines and user-centric database schemas for warehousing.",
        "Maintained robust web scraping infrastructure using Scrapy and Selenium with rate limiting and retry handling.",
        "Applied statistical and mathematical techniques for data discrepancy resolution and ongoing quality assurance.",
        "Maintained end-user guides, schema documentation, and technical system runbooks."
      ],
      technologies: ["Python", "SQL", "PostgreSQL", "MongoDB", "Scrapy", "Peewee", "Data Warehousing", "ETL Pipelines"]
    }
  ] as ExperienceItem[],

  // Publications from CV & Google Scholar
  publications: [
    {
      title: "Transformers in speech processing: A survey",
      description: "State-of-the-art overview of transformer architectures across acoustic modeling, automatic speech recognition (ASR), and speech synthesis.",
      link: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      year: "Research Paper",
      tags: ["Transformers", "Speech Processing", "Acoustics", "Deep Learning"]
    },
    {
      title: "Sparks of large audio models: A survey and outlook",
      description: "Investigating emerging foundation audio models, multimodal audio-language representations, and zero-shot acoustic comprehension.",
      link: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      year: "Research Paper",
      tags: ["Large Audio Models", "Foundation AI", "Multimodal", "Zero-Shot"]
    },
    {
      title: "Breaking Barriers: Can Multilingual Foundation Models Bridge the Gap in Cross-Language Emotion Recognition?",
      description: "Empirical examination of cross-lingual emotional acoustic features using pretrained multilingual transformers.",
      link: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      year: "Research Paper",
      tags: ["Emotion Recognition", "Cross-Lingual", "Multilingual Speech", "Speech AI"]
    },
    {
      title: "Internet of Audio things for healthcare: Potentials and challenges",
      description: "Exploring edge acoustic sensing, IoT frameworks, and AI acoustic diagnostics in modern smart health environments.",
      link: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      year: "Research Paper",
      tags: ["Audio IoT", "Healthcare AI", "Acoustic Sensors", "Edge Computing"]
    },
    {
      title: "Affective Computing and the Road to an Emotionally Intelligent Metaverse",
      description: "Real-time affective interfaces, emotional sentiment extraction, and intelligent interactive virtual avatars.",
      link: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      year: "Research Paper",
      tags: ["Affective Computing", "Virtual Environments", "Emotion AI", "HCI"]
    }
  ] as PublicationItem[],

  // Education from CV
  education: [
    {
      institution: "Information Technology University (ITU), Lahore",
      degree: "Bachelor of Science in Computer Science (BS CS)",
      location: "Lahore, Pakistan",
      highlights: [
        "Final Year Project: Anemia Detection using Non-Invasive Computer Vision.",
        "Java, Spring Boot & Angular Web Architecture for RESTful microservices.",
        "Urdu Spell Checker & Predictor algorithmic engine."
      ]
    },
    {
      institution: "Government College of Technology, Lahore",
      degree: "Diploma of Associate Engineer (DAE) in Automobile & Diesel Technology",
      location: "Lahore, Pakistan",
      highlights: [
        "Applied thermodynamics, mechanical engineering mechanics, and industrial design."
      ]
    }
  ] as EducationItem[],

  // Certifications from CV
  certifications: [
    { name: "Data Science Professional Specialization (09 Courses + Capstone)", issuer: "IBM Corporation via Coursera" },
    { name: "Applied Data Science Specialization (04 Courses)", issuer: "IBM Corporation via Coursera" },
    { name: "Data Science Foundations (04 Courses)", issuer: "IBM Corporation via Coursera" },
    { name: "Cloud Computing Specialization", issuer: "Pearson" },
    { name: "Microsoft Office Specialist (MOS 2013 & MOS 2016)", issuer: "Microsoft via Certiport" }
  ] as CertificationItem[],

  // Technical & Soft Skills from CV
  skillCategories: [
    {
      title: "Backend & Core Languages",
      description: "Architecture languages powering secure microservices and algorithmic pipelines.",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Java", level: "Advanced" },
        { name: "C++", level: "Proficient" },
        { name: "SQL", level: "Expert" },
        { name: "TypeScript / JS", level: "Proficient" }
      ]
    },
    {
      title: "Frameworks & APIs",
      description: "Production web backend and API development frameworks.",
      skills: [
        { name: "Django & DRF", level: "Expert" },
        { name: "Flask", level: "Advanced" },
        { name: "Spring Boot", level: "Proficient" },
        { name: "Laravel", level: "Proficient" },
        { name: "PyQt5", level: "Proficient" }
      ]
    },
    {
      title: "Data Engineering & Databases",
      description: "Scraping engines, database architectures, and ETL pipelines.",
      skills: [
        { name: "PostgreSQL", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Scrapy & Selenium", level: "Expert" },
        { name: "Peewee ORM", level: "Expert" },
        { name: "ETL Pipelines", level: "Expert" }
      ]
    },
    {
      title: "DevOps & Cloud Systems",
      description: "Cloud deployment platforms and modern engineering workflows.",
      skills: [
        { name: "AWS & Azure", level: "Proficient" },
        { name: "Docker", level: "Advanced" },
        { name: "Git & CI/CD", level: "Expert" },
        { name: "Linux Administration", level: "Advanced" }
      ]
    },
    {
      title: "Immigration Strategic Advisory",
      description: "Official legal frameworks, points calculators, and assessment compliance.",
      skills: [
        { name: "Canada Express Entry & PNP", level: "Expert" },
        { name: "Australia GSM (189/190/491)", level: "Expert" },
        { name: "Skills Assessment (ACS, EA, VETASSESS)", level: "Expert" },
        { name: "SOP & GS Statements", level: "Expert" }
      ]
    },
    {
      title: "Language & NAATI Coaching",
      description: "Algorithmic score optimization and bilingual dialogue pedagogy.",
      skills: [
        { name: "IELTS (Band 8+)", level: "Master Coach" },
        { name: "PTE (79+ Superior)", level: "Master Coach" },
        { name: "NAATI CCL Urdu (5 Points)", level: "Certified Trainer" },
        { name: "TOEFL & Duolingo", level: "Specialist" }
      ]
    }
  ] as SkillCategory[],

  // Two Pillars of Services
  technicalServices: [
    {
      id: "software-engineering",
      title: "Backend & Web Architecture",
      desc: "Scalable Python backends and microservices built using Django, DRF, and Flask with clean architectural patterns.",
      features: ["Custom REST APIs", "JWT Authentication", "Database Optimization", "High-Concurrency Routing"]
    },
    {
      id: "data-engineering-etl",
      title: "Data Engineering & Scalable ETL",
      desc: "Industrial web scraping systems (Scrapy/Selenium) and automated ETL pipelines feeding analytics warehouses.",
      features: ["Anti-bot bypass scrapers", "Schema Normalization", "Automated cron pipelines", "Peewee & ORM Design"]
    },
    {
      id: "ai-audio-research",
      title: "AI Research & Speech Tech",
      desc: "Applied machine learning consultation in speech processing, large audio models, and transformer pipelines.",
      features: ["Speech model benchmarking", "Transformer fine-tuning", "Cross-lingual transfer", "Research publication review"]
    }
  ],

  immigrationServices: [
    {
      id: "canada-australia-pr",
      title: "Canada & Australia Permanent Residency",
      desc: "Complete roadmap for Canada Express Entry/PNP and Australia GSM (Subclass 189, 190, 491).",
      features: ["Accurate Points Diagnostic", "State Nomination Targeting", "SkillSelect EOI Management", "Full Document Vetting"]
    },
    {
      id: "skills-assessment",
      title: "Australia Skills Assessment Strategy",
      desc: "Meticulous documentation for assessing authorities including ACS, Engineers Australia (CDR), and VETASSESS.",
      features: ["ANZSCO code mapping", "Career Episodes & Summary Statements", "RPL verification for ACS", "Reference letter vetting"]
    },
    {
      id: "student-visa-pathways",
      title: "Student Visa & Global Education",
      desc: "Strategic university selection aligned with future post-study work and PR opportunities in Canada & Australia.",
      features: ["Statement of Purpose (SOP) drafting", "Genuine Student (GS) compliance", "Course & university selection", "Visa filing support"]
    },
    {
      id: "english-test-prep",
      title: "English Test Coaching (IELTS, PTE, TOEFL, DET)",
      desc: "Proven templates and rubric-targeted drills to crack IELTS 8+ and PTE 79+ Superior English.",
      features: ["Machine scoring algorithms", "1-on-1 speaking feedback", "Writing task correction", "Time management drills"]
    },
    {
      id: "naati-ccl-urdu",
      title: "NAATI CCL Urdu Masterclass",
      desc: "Intensive preparation to secure the vital 5 bonus points for Australian Skilled Visas in Urdu.",
      features: ["Domain-specific terminologies", "Note-taking shortcuts", "Full-length mock tests", "High first-attempt pass rate"]
    }
  ]
};
