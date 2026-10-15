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
  paperUrl?: string;
  scholarUrl?: string;
  year: string;
  venue?: string;
  citationBadge?: string;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
  location: string;
  highlights?: string[];
  projects?: { title: string; tech: string; description: string }[];
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
    "AI Researcher & Senior Software Engineer",
    "Canada & Australia Immigration Strategist",
    "Master English Trainer (IELTS, PTE, NAATI CCL Urdu)"
  ],
  tagline: "Empowering breakthrough technology with speech AI research, resilient data architectures, and verified global immigration pathways.",
  shortBio: "Experienced Senior Software Engineer with a strong research background in speech processing and deep learning. Dedicated to mastering modern tech stacks, building high-throughput data systems, and mentoring professionals to secure Permanent Residency in Canada and Australia.",
  
  contact: {
    phone: "+92-328-048-4399",
    whatsapp: "https://wa.me/923280484399",
    whatsappRaw: "923280484399",
    email: "moazzamshoukat1@gmail.com",
    location: "Lahore, Punjab, Pakistan",
    availability: "Open for Consultations, Research Collaborations & Technical Advisory",
    formspreeEndpoint: ""
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
    { value: "07+", label: "Research Publications", sublabel: "Speech, Audio AI & Healthcare" },
    { value: "06+", label: "Years Engineering", sublabel: "Backend, Scraping & ETL Pipelines" },
    { value: "95%+", label: "Client Success Rate", sublabel: "Canada & Australia Pathways" },
    { value: "500+", label: "Coached Aspirants", sublabel: "IELTS 7.5+, PTE 79+, NAATI CCL" }
  ],

  researchInterests: [
    "Speech Processing",
    "Large Audio Models",
    "Affective Computing",
    "Metaverse & Emotion AI",
    "AI for Healthcare & Audio IoT",
    "Natural Language Processing (NLP)"
  ],

  // Selected Projects & Case Studies
  selectedProjects: [
    {
      id: "audio-transformers-survey",
      title: "Audio Transformers & Speech AI Foundations",
      category: "AI & Research",
      tag: "Research & Benchmarking",
      role: "Lead Researcher",
      period: "2023 - 2026",
      shortDesc: "Comprehensive review and empirical benchmarking of large audio foundation models, cross-language emotion representations, and transformer architectures in speech processing.",
      impactMetrics: [
        { label: "Published Papers", value: "7 Papers" },
        { label: "Venue Impact", value: "CSR & IEEE" },
        { label: "Focus", value: "Speech AI" }
      ],
      stack: ["Transformers", "PyTorch", "Audio Foundation Models", "Cross-Lingual Transfer", "Google Scholar"],
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      link: "/research"
    },
    {
      id: "enterprise-scraping-etl",
      title: "High-Throughput Web Scraping & ETL Pipeline Engine",
      category: "Engineering & Data",
      tag: "Data Engineering",
      role: "Software & Data Engineer",
      period: "2022 - Present",
      shortDesc: "Distributed web crawler architecture utilizing Scrapy, Selenium, and custom proxy rotation to ingest millions of unstructured web records into PostgreSQL warehousing tables.",
      impactMetrics: [
        { label: "Data Volume", value: "10M+ Records" },
        { label: "Pipeline Uptime", value: "99.9%" },
        { label: "ORM Modeling", value: "Peewee" }
      ],
      stack: ["Python", "Scrapy", "Selenium", "PostgreSQL", "Peewee ORM", "Docker", "AWS"],
      gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
      link: "/experience"
    },
    {
      id: "drf-microservice-backend",
      title: "Scalable Web & API Platform at Emulation AI",
      category: "Engineering & Data",
      tag: "Software Engineering",
      role: "Software Engineer",
      period: "2022 - Present",
      shortDesc: "Enterprise backend platform featuring Django REST Framework, modular middleware, JWT authentication, and query optimization for high-scale enterprise operations.",
      impactMetrics: [
        { label: "Response Speed", value: "<120ms" },
        { label: "Auth Security", value: "JWT + RBAC" },
        { label: "Architecture", value: "RESTful" }
      ],
      stack: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "AWS", "Git"],
      gradient: "from-amber-600/20 via-yellow-600/10 to-transparent",
      link: "/experience"
    },
    {
      id: "australia-gsm-points-advisor",
      title: "Australia PR Points & EOI Lodgement Strategy",
      category: "Immigration & Tools",
      tag: "Immigration Advisory",
      role: "Immigration Strategist",
      period: "2018 - Present",
      shortDesc: "Strategic advisory portal and points calculation framework helping skilled professionals optimize their Subclass 189, 190, and 491 profiles.",
      impactMetrics: [
        { label: "Success Rate", value: "95%+" },
        { label: "Average EOI Boost", value: "+25 Points" },
        { label: "Assessing Bodies", value: "ACS, EA, VETASSESS" }
      ],
      stack: ["ANZSCO Code Mapping", "CRS Points Engine", "SkillSelect Optimization", "Advisory Compliance"],
      gradient: "from-amber-600/20 via-yellow-600/10 to-transparent",
      link: "/australia-skilled-migration/"
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
        { label: "1st Attempt Pass", value: "92%+" },
        { label: "Points Awarded", value: "+5 PR Points" },
        { label: "Vocabulary Corpus", value: "1,200+ Terms" }
      ],
      stack: ["Audio Interpretation", "Urdu-English Lexicons", "Mock Simulations", "Live Mentoring"],
      gradient: "from-slate-700/20 via-amber-500/10 to-transparent",
      link: "/naati-ccl-urdu-preparation/"
    },
    {
      id: "anemia-detection-ai",
      title: "Non-Invasive Anemia Diagnostic Computer Vision",
      category: "AI & Research",
      tag: "Computer Vision",
      role: "Lead Developer (ITU FYP)",
      period: "Academic Project",
      shortDesc: "Non-invasive diagnostic system analyzing palpebral conjunctiva color histograms and machine learning models for early anemia detection without blood samples.",
      impactMetrics: [
        { label: "Accuracy", value: "Clinical High" },
        { label: "Method", value: "Non-Invasive" },
        { label: "Domain", value: "Digital Health" }
      ],
      stack: ["Python", "OpenCV", "Scikit-Learn", "Computer Vision", "Digital Health"],
      gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
      link: "/education"
    }
  ] as ProjectItem[],

  // Career Experience directly from CV
  experiences: [
    {
      id: "emulation-ai",
      company: "Emulation AI (Pvt) Ltd",
      role: "Software Engineer",
      period: "November 2022 – Present",
      location: "Pakistan",
      type: "Full-Time",
      description: "Spearheading backend systems, high-throughput automated ETL pipelines, and enterprise application management with high fault tolerance.",
      responsibilities: [
        "Architected and deployed scalable ETL data pipelines using Scrapy, Selenium, Python, Peewee, and PostgreSQL for real-time and scheduled ingestion.",
        "Conducted thorough systems analysis, requirements definition, solution design, technical documentation, and architectural flowcharts.",
        "Drove software quality improvement initiatives and instituted robust application management systems.",
        "Managed bug resolution, high-level technical support, and disaster recovery and continuous data backup strategies."
      ],
      technologies: ["Python", "PostgreSQL", "Scrapy", "Selenium", "Peewee", "Django", "Flask", "AWS", "Docker", "Git"]
    },
    {
      id: "ibtidah-solutions",
      company: "Ibtidah Solutions (Pvt) Ltd",
      role: "Data Engineer",
      period: "December 2018 – November 2022",
      location: "Lahore, Pakistan",
      type: "Full-Time",
      description: "Engineered core data infrastructure, database schemas, automated extraction systems, and data-driven problem solving architectures.",
      responsibilities: [
        "Designed comprehensive flowcharts, database layouts, and architectural documentation for enterprise data requirements.",
        "Engineered well-organized, testable, and maintainable code for data systems and automated ETL scraping pipelines with Scrapy, Selenium, and Python.",
        "Designed and implemented user-centric databases, normalization routines, and data warehousing structures with PostgreSQL and Peewee.",
        "Executed rigorous QA testing, automated data validation, infrastructure improvements, and continuous improvement initiatives.",
        "Led client communications, prepared technical documentation, and authored detailed end-user operating guides.",
        "Applied advanced mathematical and statistical methods for data-driven problem solving, anomaly detection, and business optimization."
      ],
      technologies: ["Python", "SQL", "PostgreSQL", "MongoDB", "Scrapy", "Selenium", "Peewee", "Data Warehousing", "ETL Pipelines", "Statistical Analysis"]
    }
  ] as ExperienceItem[],

  // All 7 Research Publications with Direct Paper URLs (arXiv, IEEE, Elsevier) & Google Scholar
  publications: [
    {
      title: "Transformers in speech processing: A survey",
      year: "2023",
      venue: "Computer Science Review (Elsevier) / arXiv:2303.11607",
      citationBadge: "Survey Paper",
      description: "Comprehensive state-of-the-art review covering transformer architectures across acoustic modeling, automatic speech recognition (ASR), speaker verification, and text-to-speech synthesis.",
      link: "https://arxiv.org/abs/2303.11607",
      paperUrl: "https://arxiv.org/abs/2303.11607",
      scholarUrl: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      tags: ["Transformers", "Speech Processing", "ASR", "Acoustic Modeling"]
    },
    {
      title: "Sparks of large audio models: A survey and outlook",
      year: "2023",
      venue: "arXiv:2308.12792 (Audio Foundation AI Survey)",
      citationBadge: "Foundation AI",
      description: "Investigating emerging foundation audio models, multimodal audio-language representations, zero-shot acoustic comprehension, and the future trajectory of generative audio AI.",
      link: "https://arxiv.org/abs/2308.12792",
      paperUrl: "https://arxiv.org/abs/2308.12792",
      scholarUrl: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      tags: ["Large Audio Models", "Foundation AI", "Generative Audio", "Multimodal"]
    },
    {
      title: "Affective computing and the road to an emotionally intelligent metaverse",
      year: "2024",
      venue: "IEEE Open Journal of the Computer Society (Vol. 5)",
      citationBadge: "IEEE Journal",
      description: "Explores real-time affective computing interfaces, emotional sentiment extraction from acoustic and physiological cues, and emotionally resonant avatars in virtual worlds.",
      link: "https://doi.org/10.1109/OJCS.2024.3389462",
      paperUrl: "https://doi.org/10.1109/OJCS.2024.3389462",
      scholarUrl: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      tags: ["Affective Computing", "Metaverse", "Emotion Recognition", "IEEE"]
    },
    {
      title: "Transformers in speech processing: Overcoming challenges and paving the future",
      year: "2025",
      venue: "Computer Science Review (Elsevier)",
      citationBadge: "Flagship Journal",
      description: "In-depth analysis of computational efficiency hurdles, low-latency streaming constraints, cross-lingual adaptations, and next-generation transformer paradigms for audio.",
      link: "https://arxiv.org/abs/2303.11607",
      paperUrl: "https://arxiv.org/abs/2303.11607",
      scholarUrl: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      tags: ["Computer Science Review", "Speech Transformers", "Low-Latency", "Edge Audio"]
    },
    {
      title: "Medicine's New Rhythm: Harnessing Acoustic Sensing via the Internet of Audio Things for Healthcare",
      year: "2024",
      venue: "IEEE Open Journal of the Computer Society (Vol. 5)",
      citationBadge: "Digital Health AI",
      description: "Groundbreaking evaluation of acoustic sensing, cough/respiratory sound analytics, wearable audio IoT devices, and privacy-preserving clinical diagnostics.",
      link: "https://doi.org/10.1109/OJCS.2024.3462812",
      paperUrl: "https://doi.org/10.1109/OJCS.2024.3462812",
      scholarUrl: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      tags: ["Internet of Audio Things", "Healthcare AI", "Acoustic Sensing", "IEEE"]
    },
    {
      title: "Breaking barriers: Can multilingual foundation models bridge the gap in cross-language speech emotion recognition?",
      year: "2023",
      venue: "IEEE SNAMS 2023",
      citationBadge: "Cross-Lingual AI",
      description: "Empirical investigation demonstrating how pretrained multilingual foundation representations bridge the acoustic-emotional divide across low-resource and cross-cultural dialects.",
      link: "https://arxiv.org/abs/2309.08375",
      paperUrl: "https://arxiv.org/abs/2309.08375",
      scholarUrl: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      tags: ["Speech Emotion Recognition", "Multilingual Models", "Cross-Lingual Transfer", "IEEE"]
    },
    {
      title: "Affective Computing in the Age of GenAI: Balancing Risks and Rewards",
      year: "2026",
      venue: "IEEE Computational Intelligence Magazine",
      citationBadge: "GenAI & Ethics",
      description: "Critical inquiry into generative emotional synthesis, ethical boundaries of affective empathy machines, psychological influence, and governance frameworks.",
      link: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      paperUrl: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      scholarUrl: "https://scholar.google.com/citations?user=uU550yYAAAAJ",
      tags: ["Affective Computing", "Generative AI", "AI Ethics", "Emotion Synthesis"]
    }
  ] as PublicationItem[],

  // Education from CV
  education: [
    {
      institution: "Information Technology University (ITU), Lahore",
      degree: "Bachelor of Science in Computer Science (BS CS)",
      location: "Lahore, Punjab, Pakistan",
      highlights: [
        "Rigorous foundation in algorithms, systems architecture, distributed computing, and artificial intelligence.",
        "Conducted advanced research under distinguished faculty in speech signal processing and machine vision."
      ],
      projects: [
        {
          title: "Anemia Detection using Non-Invasive Methods (FYP)",
          tech: "Python, OpenCV, Machine Learning, Digital Health",
          description: "Final Year Project: Non-invasive diagnostic system analyzing palpebral conjunctiva color histograms and ML classifiers for hemoglobin prediction without blood sampling."
        },
        {
          title: "Google Classroom Clone",
          tech: "Java, Spring Boot, Angular, REST APIs, MVC",
          description: "Full-stack educational management system featuring assignment submission workflows, role-based access control (Teacher/Student), and automated grading notifications."
        },
        {
          title: "Urdu Spell Checker + Spell Predictor",
          tech: "Python, NLP, N-Gram Modeling, Levenshtein Distance",
          description: "Algorithmic linguistic engine capable of detecting orthographical errors in Urdu script and suggesting phonetically and contextually coherent word completions."
        }
      ]
    },
    {
      institution: "Government College of Technology, Lahore",
      degree: "Diploma of Associate Engineer (DAE) in Automobile & Diesel Technology",
      location: "Lahore, Punjab, Pakistan",
      highlights: [
        "Practical engineering principles, mechanical diagnostics, applied thermodynamics, and industrial engineering standards."
      ]
    }
  ] as EducationItem[],

  // Certifications from CV
  certifications: [
    { name: "Microsoft Office Specialist (MOS 2013 & 2016)", issuer: "Certiport / Microsoft", details: "Advanced document architecture and data analysis certifications." },
    { name: "Pearson Cloud Computing", issuer: "Pearson", details: "Virtualization, cloud architectures, scalability, and distributed deployments." },
    { name: "IBM Data Science Professional Specialization", issuer: "IBM via Coursera", details: "9 comprehensive courses including Python, SQL, Machine Learning, and Applied Capstone." },
    { name: "IBM Applied Data Science Specialization", issuer: "IBM via Coursera", details: "4-course specialization covering data visualization, dashboarding, and predictive models." },
    { name: "IBM Data Science Foundations", issuer: "IBM via Coursera", details: "Core statistical analysis, data pipelines, and analytical methodologies." }
  ] as CertificationItem[],

  // Technical & Immigration Skills from CV
  skillCategories: [
    {
      title: "Core Programming Languages",
      description: "Production languages powering backend microservices, data scraping, and systems architecture.",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Java", level: "Advanced" },
        { name: "C++", level: "Proficient" },
        { name: "SQL", level: "Expert" },
        { name: "TypeScript / JavaScript", level: "Proficient" }
      ]
    },
    {
      title: "Databases & Storage",
      description: "Relational, document, and caching databases optimized for read/write throughput.",
      skills: [
        { name: "PostgreSQL", level: "Expert" },
        { name: "SQL Server / MySQL", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Redis", level: "Proficient" },
        { name: "Database Warehousing", level: "Expert" }
      ]
    },
    {
      title: "Web Scraping & ORM Frameworks",
      description: "Industrial ETL pipelines, anti-blocking scrapers, and object-relational mapping.",
      skills: [
        { name: "Scrapy", level: "Expert" },
        { name: "Selenium", level: "Expert" },
        { name: "Peewee ORM", level: "Expert" },
        { name: "pymongo", level: "Advanced" },
        { name: "Anti-Bot & Proxy Rotation", level: "Expert" }
      ]
    },
    {
      title: "Web Development Frameworks",
      description: "Full-stack web frameworks and desktop application development.",
      skills: [
        { name: "Flask", level: "Advanced" },
        { name: "Django & DRF", level: "Advanced" },
        { name: "Laravel", level: "Proficient" },
        { name: "Masonite", level: "Proficient" },
        { name: "PyQt5", level: "Proficient" },
        { name: "REST APIs & MVC", level: "Expert" }
      ]
    },
    {
      title: "Cloud, DevOps & Systems",
      description: "Deployment, containerization, and infrastructure management.",
      skills: [
        { name: "AWS", level: "Proficient" },
        { name: "Azure", level: "Proficient" },
        { name: "Heroku & GoDaddy", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "SDLC & Agile Methodologies", level: "Expert" },
        { name: "Server & G-Suite Management", level: "Advanced" },
        { name: "Problem Solving & Debugging", level: "Expert" }
      ]
    },
    {
      title: "Immigration & Skills Assessment",
      description: "Accredited documentation vetting, Points maximization, and official assessing criteria.",
      skills: [
        { name: "Canada Express Entry & PNP", level: "Expert" },
        { name: "Australia GSM (189, 190, 491)", level: "Expert" },
        { name: "ACS IT Skills Assessment & RPL", level: "Expert" },
        { name: "Engineers Australia (CDR & CPD)", level: "Expert" },
        { name: "VETASSESS Assessment", level: "Expert" },
        { name: "Genuine Student (GS) & SOP", level: "Expert" }
      ]
    },
    {
      title: "English & NAATI CCL Coaching",
      description: "Mastery coaching for standardized examinations and community language credentialing.",
      skills: [
        { name: "IELTS Academic & General (Band 7.5+)", level: "Master Coach" },
        { name: "PTE Academic (79+ Superior English)", level: "Master Coach" },
        { name: "NAATI CCL Urdu (+5 PR Points)", level: "Certified Trainer" },
        { name: "TOEFL & Duolingo English Test", level: "Specialist" },
        { name: "Dialogue Shorthand & Note-Taking", level: "Specialist" }
      ]
    }
  ] as SkillCategory[],

  // Dual Practice Areas
  technicalServices: [
    {
      id: "application-development",
      title: "Application Development",
      href: "/application-development",
      icon: "💻",
      tag: "Desktop & Mobile Apps",
      desc: "Full-lifecycle custom applications built for web, desktop, and mobile with high concurrency, fault tolerance, and clean modular code.",
      features: ["Custom Desktop & Mobile Apps", "Microservices & Cloud APIs", "Legacy Modernization", "Secure RBAC Auth & CI/CD"]
    },
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      href: "/web-development",
      icon: "🌐",
      tag: "Next.js & Astro Jamstack",
      desc: "Modern, high-performance web applications built with Next.js, Astro, React, and Python backends. 95+ Lighthouse scores and sub-second load times.",
      features: ["Jamstack & Modern SSR/SSG", "Sub-Second Lighthouse 95+", "High-Converting UI/UX Design", "REST & GraphQL API Backends"]
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Pipelines",
      href: "/data-engineering",
      icon: "🔀",
      tag: "Scalable ETL / ELT",
      desc: "Enterprise data pipeline architecture, data warehousing (PostgreSQL), Peewee ORM modeling, and database query optimization.",
      features: ["High-Volume ETL/ELT Workflows", "Normalized 3NF & Data Marts", "Query Tuning & Indexing", "Automated Validation & Alerting"]
    },
    {
      id: "data-scraping",
      title: "Enterprise Web Scraping",
      href: "/data-scraping",
      icon: "🕷️",
      tag: "Scrapy & Selenium Crawlers",
      desc: "Distributed crawlers with proxy rotation, anti-bot bypassing, headless browser automation (Playwright), and structured data delivery.",
      features: ["Distributed Crawlers at Scale", "Anti-Bot & Captcha Bypassing", "Headless Browser Automation", "Normalized Database Ingestion"]
    },
    {
      id: "ai-development",
      title: "AI & Machine Learning Development",
      href: "/ai-development",
      icon: "🧠",
      tag: "Speech AI & PyTorch",
      desc: "Applied AI models, speech processing (ASR/Whisper), NLP sentiment analysis, and open-source LLM fine-tuning backed by 7 published papers.",
      features: ["Speech AI & Acoustic Modeling", "Private Open-Source LLM Tuning", "Natural Language Processing (NLP)", "Low-Latency Inference APIs"]
    },
    {
      id: "ai-agentic-development",
      title: "AI Agentic Development",
      href: "/ai-agentic-development",
      icon: "🤖",
      tag: "Autonomous Agents & RAG",
      desc: "Autonomous multi-agent orchestration (LangGraph, CrewAI), tool-calling workflows, enterprise RAG, and self-healing agent loops.",
      features: ["Multi-Agent State Orchestration", "Enterprise Vector RAG Grounding", "Deterministic Tool/API Execution", "Human-in-the-Loop Safety Controls"]
    }
  ],

  immigrationServices: [
    {
      id: "canada-australia-pr",
      title: "Canada & Australia Permanent Residency",
      desc: "End-to-end strategic roadmap for Canada Express Entry (Category-Based & PNP) and Australia GSM (Subclass 189, 190, and 491).",
      features: ["Personalized Points Diagnostic", "State Nomination EOI Strategy", "Occupation Code (ANZSCO/NOC) Mapping", "Risk-Proof Document Auditing"]
    },
    {
      id: "skills-assessment",
      title: "Australia Skills Assessment Strategy",
      desc: "Specialized guidance for ACS (IT/Software), Engineers Australia (CDR & Career Episodes), and VETASSESS to avoid costly deductions.",
      features: ["ACS RPL & Employment Letters", "Engineers Australia 3 Career Episodes", "Summary Statement Cross-Referencing", "Third-Party Tax & Bank Proof"]
    },
    {
      id: "student-visa-pathways",
      title: "Student Visa & Genuine Student (GS) Statements",
      desc: "Strategic university selection aligned with long-term post-study work rights and Canadian or Australian PR streams.",
      features: ["Genuine Student (GS) Narrative", "Financial Trail Proof Structuring", "High-ROI University Admissions", "Visa Lodgement Compliance"]
    },
    {
      id: "english-test-prep",
      title: "IELTS & PTE Academic Coaching",
      desc: "Targeted preparation to achieve IELTS Band 7.5+ and PTE 79+ (Superior English = 20 Australia PR points).",
      features: ["Pearson Speech Algorithm Tuning", "IELTS Writing AREA Structure", "1-on-1 Diagnostic Feedback", "Active Prediction Question Banks"]
    },
    {
      id: "naati-ccl-urdu",
      title: "NAATI CCL Urdu Masterclass (+5 PR Points)",
      desc: "Intensive training program to secure 5 bonus points for Australian Skilled Visas through disciplined dialogue interpretation.",
      features: ["Custom Shorthand Symbols", "Sector-Specific Urdu Glossaries", "Exam Simulator Mock Drills", "Proven High Pass Track Record"]
    }
  ]
};
