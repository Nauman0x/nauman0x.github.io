export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'flagship' | 'voice' | 'games-vision' | 'automation';
  tags: string[];
  description: string;
  metrics?: string[];
  architecture?: string[];
  links: {
    github?: string;
    live?: string;
    video?: string;
    audio?: string;
    itch?: string;
  };
  featured?: boolean;
  award?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyLink: string;
}

export interface AudioSample {
  id: string;
  title: string;
  agentType: string;
  scenario: string;
  duration: string;
  keyRule: string;
  driveLink: string;
}

export interface Experience {
  role: string;
  company: string;
  website?: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export const METRICS = [
  { label: 'Booking Accuracy', value: '95%', desc: 'Across live AI voice receptionist calls' },
  { label: 'Payment Speedup', value: '98%', desc: 'Checkout turnaround reduced from 25m to 5s' },
  { label: 'No-Show Reduction', value: '-83%', desc: 'Doctor appointments protected by automation' },
  { label: 'Prompt Sets Shipped', value: '300+', desc: 'Tailored flows across 10+ client brands' },
  { label: 'Survey Dataset Size', value: 'N=406', desc: 'Urban respondents in published coexistence study' },
  { label: 'National Championships', value: '2x', desc: 'SOFTEC ’26 AI Hackathon & ’25 Game Dev' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Backend AI and Automation Engineer',
    company: 'Global Health',
    website: 'https://www.myglobalhealth.online/',
    location: 'Portugal & Brazil (Remote)',
    period: 'Nov 2025 – Present',
    highlights: [
      'Built multi-channel outbound and lifecycle sequences across email and WhatsApp in n8n and Make, integrating 5+ third-party APIs via webhooks and JSON mapping.',
      'Designed branching drip logic driven by recipient behavior and booking status, replacing rigid timers with real-time operational signals.',
      'Deployed ElevenLabs voice agents that qualify callers and book appointments mid-call through live API calls, closing the loop between conversation and CRM state.',
      'Implemented Stripe checkout with idempotent webhook handling, keeping payment and booking records synchronized across 5 European countries (PT, RO, IE, SP, CZ) with zero duplicates.',
      'Achieved 98% faster booking-to-payment turnaround (25m → 5s), a 100% collection rate, and an 83% drop in doctor no-shows.',
      'Engineered an order-lifecycle automation pipeline (payment reminders, meeting-link delivery, confirmations) spanning 77 automation types — 7,075 runs at a 99.70% success rate, covering 426 of 450 orders (94.7% coverage).',
      'Fanned out each event across email, WhatsApp, and portal notifications in parallel (e.g. meeting-link delivery fired 316× per channel to doctor, patient, and admin).',
      'Automated fiscal document generation and delivery — 389 invoices/receipts/credit notes at a 99.2% email-delivery rate, across 450 orders (353 paid, 78.4%) spanning 6 countries.'
    ],
    tags: ['n8n', 'ElevenLabs', 'Make', 'Stripe Webhooks', 'WhatsApp API', 'REST APIs', 'PostgreSQL', 'Order Automation', 'Invoice Automation']
  },
  {
    role: 'Associate AI Engineer (Promoted from Intern)',
    company: 'Hatzs Dimension',
    location: 'Lahore, Pakistan',
    period: 'Jun 2025 – Nov 2025',
    highlights: [
      'Engineered approximately 30 tailored conversational and prompt sets weekly for 10+ client accounts, matched to unique client voices rather than shared templates.',
      'Cut delivery turnaround by 40% to under 40 minutes per client by building a reusable framework and automating repetitive staging workflows.',
      'Built and optimized conversational flows and backend logic for AI appointment agents, reaching 95% booking accuracy and maximizing lead conversion.',
      'Engineered post-call automations and drip sequences in Make, Zapier, and n8n handling rescheduling, cancellations, and no-answer branches.',
      'Raised prompt generator benchmark accuracy from 80% to 90% by testing variants against real customer transcripts.'
    ],
    tags: ['Prompt Engineering', 'Voice AI', 'Make', 'Zapier', 'Evals', 'LLM Architecture', 'A/B Testing']
  },
  {
    role: 'Research and Development Intern',
    company: 'CAAISC',
    location: 'Lahore, Pakistan',
    period: 'Jun 2025 – Aug 2025',
    highlights: [
      'Architected a real-time conversational voice pipeline from scratch, chaining speech-to-text (Deepgram), an LLM reasoning engine, and text-to-speech (Cartesia) over REST APIs.',
      'Optimized acoustic turn-taking and conversational latency for natural human-like full-duplex dialogue.'
    ],
    tags: ['Deepgram STT', 'Cartesia TTS', 'Voice Pipeline', 'REST APIs', 'Acoustic Interruption']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'opportunity-copilot',
    title: 'Opportunity Copilot',
    subtitle: '1st Place Champion — SOFTEC ’26 National AI Hackathon',
    category: 'flagship',
    award: '🥇 1st Place (out of 80+ teams)',
    tags: ['Next.js 16', 'React 19', 'ElevenLabs Voice', 'OpenAI Assistants', 'Prisma', 'PostgreSQL', 'LangChain', 'Tailwind 4'],
    description: 'An autonomous student career and opportunity acceleration engine that won first place out of 80+ teams at the national hackathon. Combines persistent OpenAI memory threads, streaming LangChain chat, role-based dashboards, and a live ElevenLabs voice agent that contextually converses with students before scheduling action.',
    metrics: [
      '1st Place out of 80+ competing university teams',
      'Persistent memory across session disconnects',
      'Full voice call & chat synchronization'
    ],
    architecture: [
      'Auth & Role-Based Routing (JWT cookies, Google OAuth, Prisma 7)',
      'ElevenLabs Conversation Agent via CallWidget',
      'LangChain Streaming Chat + OpenAI Assistants API threads',
      'Admin telemetry panel for real-time agent tuning'
    ],
    links: {
      github: 'https://github.com/Nauman0x/AI-Hackathon-Softec26',
    },
    featured: true
  },
  {
    id: 'vr-conversational-ai',
    title: 'VR-ASSM Conversational Avatar AI',
    subtitle: 'Real-Time Voice AI Avatar with Lip Sync on Meta Quest',
    category: 'voice',
    tags: ['Meta Quest VR', 'Unity C#', 'ElevenLabs ConvAI', 'Oculus LipSync', 'Node.js', 'Railway', 'PostgreSQL'],
    description: 'Immersive virtual reality conversational AI system for Meta Quest headsets. Chained ElevenLabs ConvAI WebSocket agents with Oculus LipSync blend shapes for natural lip-synced conversation in 3D virtual offices and natural environments. Built a secure intermediate Express server on Railway with Aiven PostgreSQL to bypass Quest network constraints and inject persistent user profile summaries into live calls.',
    metrics: [
      'Full-duplex WebSocket speech-in / speech-out in VR',
      'Sub-millisecond blend shape viseme lip synchronization',
      'Secure intermediate API mitigating headset DB vulnerabilities'
    ],
    architecture: [
      'Meta Quest Unity 2022.3 XR Rig + Locomotion Controller',
      'ElevenLabs ConvAI WebSocket (wss://api.elevenlabs.io)',
      'Intermediate Express API hosted on Railway with X-API-Key auth',
      'Aiven PostgreSQL database storing users and conversation transcripts'
    ],
    links: {
      github: 'https://github.com/Nauman0x/VR-Conversational-AI',
      video: 'https://drive.google.com/file/d/15r2cvSMlZoMrrAn15B5cuwvsXKSKp9MR/view?usp=drive_link'
    },
    featured: true
  },
  {
    id: 'cyber-bloom',
    title: 'Cyber Bloom: Ayra’s Quest',
    subtitle: '1st Place Champion — SOFTEC ’25 National Game Development Competition',
    category: 'games-vision',
    award: '🥇 1st Place Game Jam Winner',
    tags: ['Unity', 'C#', 'Pixel Art', 'ElevenLabs Audio', 'WebGL', 'Game Design'],
    description: 'A 2D retro pixel art adventure platformer exploring the clash between cybernetics and nature under the corrupt rule of Dr. Virex. Features 3 distinct worlds (Forest of Fractures, Cosmic Code Vault, Virex’s Lab), procedural mechanics, Fibonacci puzzles, boss encounters, and custom voice acting powered by ElevenLabs. Won 1st place in the national game development competition.',
    metrics: [
      'National Game Jam Winner (SOFTEC 2025)',
      '3 fully custom levels with unique boss fights & puzzles',
      'Playable live in browser via WebGL on Itch.io'
    ],
    architecture: [
      'Custom player movement, wall climb & bullet combat system',
      'Fibonacci and prism puzzle mechanic scripting in C#',
      'Pixel art sprites designed in 8bit Painter',
      'Narrative voice generation with ElevenLabs'
    ],
    links: {
      github: 'https://github.com/Nauman0x/Cyber-Bloom',
      itch: 'https://naumanarif.itch.io/cyber-bloom',
      video: 'https://drive.google.com/drive/folders/1nPo-tdO457XSWYrkx3GjzOkl3Ll-IKwH?usp=sharing'
    },
    featured: true
  },
  {
    id: 'paws-pal',
    title: 'Paw’s Pal — AI First Aid Application',
    subtitle: 'Computer Vision Emergency Care & Veterinary Routing',
    category: 'games-vision',
    tags: ['Unity', 'Google Gemini Vision', 'Google Places API', 'GPS Services', 'C#'],
    description: 'AI-first mobile emergency application built to protect injured and stray animals. Users upload an image and short description of an injured animal; the app passes the visual data through Google Gemini Vision to deliver instantaneous triage guidance. Concurrently queries Google Places API via GPS coordinates to locate open animal shelters and connect with rescue volunteers.',
    metrics: [
      'Instant multimodal first aid diagnosis from photos',
      'Live GPS clinic and animal shelter locator',
      'Direct integration with animal rescue volunteer networks'
    ],
    architecture: [
      'Unity Web Requests integration with Gemini Vision REST API',
      'Google Places API proximity filtering for veterinary clinics',
      'Fantasy Wooden GUI asset skinning and TextMeshPro rendering'
    ],
    links: {
      github: 'https://github.com/Nauman0x/Paw-s-Pal',
      video: 'https://drive.google.com/drive/folders/17YPrNe3Dq-bSqteT5VB8YXdwPWAgSC9G'
    },
    featured: true
  },
  {
    id: 'tumor-detection',
    title: 'Brain Tumor Detection & SAM Segmentation',
    subtitle: 'Deep Learning Medical Imaging Diagnostic Pipeline',
    category: 'games-vision',
    tags: ['PyTorch', 'YOLOv8', 'Meta SAM', 'OpenCV', 'Deep Learning', 'Medical AI'],
    description: 'State-of-the-art diagnostic pipeline fusing YOLOv8 object localization with Meta’s Segment Anything Model (SAM) to automate brain tumor identification in MRI scans. YOLOv8 predicts rapid bounding boxes for tumor regions (e.g. glioma), which are then passed into SAM to compute sub-pixel boundary masks, giving clinicians exact tumor volume delineation.',
    metrics: [
      'High-precision localization with custom-trained YOLOv8',
      'Pixel-level semantic segmentation using SAM 2 zero-shot',
      'Automated bounding box-to-mask inference pipeline'
    ],
    architecture: [
      'YOLOv8 custom weights trained on brain MRI scan datasets',
      'Automated bounding box extraction feeding SAM prompt coordinates',
      'Mask overlay visualization with OpenCV and Matplotlib'
    ],
    links: {
      github: 'https://github.com/Nauman0x/Tumor-Detection',
      video: 'https://drive.google.com/drive/folders/1kXvE57XHe4PPbSpNWE_6tD5XucPwcxF-?usp=drive_link'
    },
    featured: true
  },
  {
    id: 'telemedicine-pipeline',
    title: 'Global Telemedicine Booking & Billing Engine',
    subtitle: 'Multi-Country Infrastructure across 5 European Markets',
    category: 'automation',
    tags: ['Wix Velo', 'WhatsApp Business API', 'Stripe', 'Google Meet', 'Webhooks'],
    description: 'Autonomous consultation booking, invoicing, and payment collection infrastructure operating across Portugal, Romania, Ireland, Spain, and the Czech Republic. Built self-healing API retries for database revision conflicts, shadow database querying, and automated multi-lingual WhatsApp reminder sequences that eliminated 83% of doctor no-shows.',
    metrics: [
      '98% faster booking-to-payment (25 mins → 5 seconds)',
      '100% payment collection rate (up from 65% baseline)',
      '83% reduction in doctor no-shows across 5 countries',
      'Zero manual admin follow-ups needed'
    ],
    architecture: [
      'Wix Velo backend services + custom ConsultationDetails shadow collections',
      'Stripe checkout generation with idempotent webhook handling',
      'WhatsApp Business API notification manager with country-based i18n',
      'Google Meet & Calendar API appointment synchronization'
    ],
    links: {
      github: 'https://github.com/Nauman0x/Wix-Portfolio',
      live: 'https://www.myglobalhealth.online/'
    },
    featured: true
  },
  {
    id: 'prompt-portfolio',
    title: 'Conversational Voice AI Agent Prompt Portfolio',
    subtitle: 'Production Prompt Systems & Live Call Audio Recordings',
    category: 'voice',
    tags: ['Voice AI', 'STT/TTS', 'Prompt Engineering', 'IVR Triage', 'Call Recordings'],
    description: 'Production prompt suites and test call recordings for enterprise clients. Includes MediLink Health Services (inbound receptionist scheduling same-day visits with zero calendar collisions), Skyline Realtors (outbound qualification for 10M+ PKR budgets with IVR/voicemail detection), and ShopNexa (omnichannel e-commerce support).',
    metrics: [
      '95% booking accuracy on live voice calls',
      '-40% reduction in client delivery turnaround',
      'Prompt generator benchmark raised from 80% to 90%'
    ],
    architecture: [
      'Acoustic turn-taking rules (TTS/STT latency management & filler controls)',
      'One-question-at-a-time qualification triage flow',
      'IVR, voicemail, and customer objection fallback protocols'
    ],
    links: {
      github: 'https://github.com/Nauman0x/Prompt-Portfolio',
      audio: 'https://drive.google.com/drive/folders/1yhcmfIIaLUbjgfetupg0k35NIRv8iz_w?usp=drive_link'
    }
  },
  {
    id: 'solid-waste-management',
    title: 'Solid Waste Management Initiative',
    subtitle: 'Campus-Wide Waste Segregation & ML Trash Classification',
    category: 'automation',
    tags: ['Machine Learning', 'Computer Vision', 'Waste Segregation', 'Data Analysis', 'Sustainability'],
    description: 'Led a waste segregation initiative in the Information Technology University cafeteria, pairing a redesigned multi-bin dustbin system with a custom-trained ML model for trash detection and classification. Tracked disposal patterns to optimize recycling processes and measured the initiative’s real-world impact through data analysis.',
    metrics: [
      'Custom ML model for real-time trash detection & classification',
      'Multi-bin segregation system deployed campus-wide',
      'Data-driven tracking of waste disposal & recycling patterns'
    ],
    architecture: [
      'Trash image classification model for waste categorization',
      'Cafeteria-wide dustbin redesign for source segregation',
      'Disposal pattern tracking & recycling-rate data analysis'
    ],
    links: {
      live: 'https://docs.google.com/presentation/d/1eRsKsU0LQcJHZTAQbt8nI3sr3uC1IzYRd7zB7PrC-6o/edit'
    }
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'deloitte-data-analytics',
    title: 'Deloitte Australia — Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'Apr 2025',
    credentialId: 'ENbzgAXoEWa7gMsXE',
    verifyLink: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_CNk9SuCKDSkMssxXx_1744137529910_completion_certificate.pdf'
  },
  {
    id: 'excel-basics',
    title: 'Excel Basics for Data Analysis',
    issuer: 'IBM iX · Coursera',
    date: 'Mar 2025',
    credentialId: 'JCKVYEZK83TT',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/JCKVYEZK83TT'
  },
  {
    id: 'intro-ds-python',
    title: 'Introduction to Data Science in Python',
    issuer: 'University of Michigan · Coursera',
    date: 'Feb 2025',
    credentialId: '2HV1G4D4ORWX',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/2HV1G4D4ORWX'
  }
];

export const AUDIO_SAMPLES: AudioSample[] = [
  {
    id: 'medilink',
    title: 'MediLink Health Services',
    agentType: 'Inbound Voice Receptionist',
    scenario: 'Patient lead qualification, insurance verification & calendar booking',
    duration: '2:15 min',
    keyRule: 'Strict one-question-at-a-time triage; timezone conflict resolution',
    driveLink: 'https://drive.google.com/drive/folders/1yhcmfIIaLUbjgfetupg0k35NIRv8iz_w?usp=drive_link'
  },
  {
    id: 'skyline',
    title: 'Skyline Realtors',
    agentType: 'Outbound Voice Qualifier',
    scenario: 'High-ticket real estate screening (PKR 10M+ budget) & agent handoff',
    duration: '1:48 min',
    keyRule: 'Voicemail/IVR automated detection, multi-tier objection handling',
    driveLink: 'https://drive.google.com/drive/folders/1twryIni6aMLIT5EDGy-Rqa4qsHG9v9oH?usp=drive_link'
  },
  {
    id: 'shopnexa',
    title: 'ShopNexa Omnichannel Support',
    agentType: 'Text & SMS Customer Agent',
    scenario: 'E-commerce support inquiry, knowledge base FAQ resolution, callback booking',
    duration: 'Multi-turn chat',
    keyRule: 'Dynamic knowledge-base retrieval with zero hallucination constraints',
    driveLink: 'https://drive.google.com/drive/folders/1Mh7SLYyXp_SOjV5B1LqKz2D4TrxXeDxW?usp=drive_link'
  }
];

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  institution: string;
  status: string;
  period?: string;
  sampleSize: string;
  abstract: string;
  methodology: string;
  keyStats: { label: string; value: string; note: string }[];
  insights: string[];
  links?: {
    slides?: string;
    application?: { label: string; href: string };
  };
}

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'urban-stray-coexistence',
    title: 'Strategies for Co-existence of Stray Animals and Humans in Urban Areas',
    authors: ['Nauman Arif (Lead Author)', 'Khadeja Masood', 'Ashna Masood', 'Faisal Bukhari'],
    institution: 'Information Technology University (ITU) & University of the Punjab, Lahore',
    status: 'Completed Working Paper & Empirical Research Study',
    sampleSize: 'N = 406 Urban Citizens',
    abstract: 'Urbanization in Pakistan at a rapid rate has increased human-stray animal interaction pressures, and traditional methods of culling have been both inhumane and ineffective. This study analyzes public attitudes toward stray animals and evaluates sustainable choices, given Trap-Neuter-Vaccinate-Release (TNVR) as a viable alternative. Synthesizing an empirical survey of N=406 participants with international comparative frameworks, we model intervention preferences and social impediments to humane control.',
    methodology: 'Standardized online questionnaire administered across urban citizens (N=406). Evaluated demographics, exposure frequency, perception of stray aggression, and willingness to financially contribute to TNVR campaigns. Analytical techniques: Chi-Square test of independence (χ²=36.19, df=16, p=0.0027) confirming interaction frequency directly predicts perception; collapsed contingency table (χ²=17.48, df=2, p=0.00016, Cramér’s V=0.207); point-biserial correlation for pet ownership (r=-0.401, p<0.001) & Mann-Whitney U test; one-tailed Z-test proving mistreatment is cited significantly more than disease (Z=16.30, McNemar’s χ²=208.10, p<0.001); Principal Component Analysis (PCA) — PC1 alone accounts for 44.4% of variance.',
    keyStats: [
      { label: 'Sample Population', value: 'N = 406', note: 'Surveyed across urban centers' },
      { label: 'Chi-Square Significance', value: 'χ² = 36.19', note: 'p = 0.0027 (Interaction vs Perception)' },
      { label: 'PCA Principal Component 1', value: '44.4%', note: 'Single factor dominant intervention preference' },
      { label: 'Community Rejection of Culling', value: '99.8%', note: 'Mass culling rejected (1 vote out of 406)' }
    ],
    insights: [
      'Direct exposure correlates with positive attitudes: Citizens with daily/weekly interaction overwhelmingly view strays as harmless (p < 0.001).',
      'Mistreatment cited far more than disease (71.4% vs 14.8%, Z = 16.30) as the primary root cause of stray aggression.',
      'Willingness to financially back TNVR remains remarkably uniform (75%–80%) across all demographic age brackets.',
      'Informed the product architecture for Paw\'s Pal (AI first-aid and shelter routing).'
    ],
    links: {
      slides: 'https://docs.google.com/presentation/d/e/2PACX-1vT9YpJDJ-4xf-8HIQ_EUkzFiEVF5u0wKpLOMZIV7B5e73gUumtdgAqWO7JiHwH82znIpHLmVWYkvY5Z/pub?start=false&loop=false&delayms=5000'
    }
  },
  {
    id: 'white-collar-crime',
    title: 'White-Collar Crime: Public Perception, Trust & Socioeconomic Impact',
    authors: ['Nauman Arif (BSCS23060)', 'Khadija Masood (BSCS23144)', 'Ashna Masood (BSCS23058)'],
    institution: 'Information Technology University (ITU)',
    status: 'Completed Statistical Survey Study',
    period: 'Feb 2024 – May 2024',
    sampleSize: 'N = 150 Respondents',
    abstract: 'Analyzes public perception of white-collar crime and its socioeconomic impact on lower-income groups. Conducted statistical surveys to assess public awareness, attitudes toward regulatory bodies, and the influence of bribery-acceptance culture, while evaluating the financial struggles of affected individuals and proposing compensation frameworks.',
    methodology: 'Structured public survey (N=150; 67 female, 83 male) analyzed with hypothesis testing across multiple dimensions. Techniques: one- and two-tailed Z-score tests on awareness and victim-resource adequacy; Chi-Square tests of independence on ethical-training perception, regulatory confidence vs. proposed solutions, corruption-perception vs. leader choice, and technology\'s link to cyber-enabled white-collar crime (χ²=22.36, df=2, p=0.000014); goodness-of-fit testing on regulatory detection confidence; run test of randomness on gender distribution of respondents.',
    keyStats: [
      { label: 'Survey Respondents', value: 'N = 150', note: '67 female · 83 male' },
      { label: 'Aware of White-Collar Crime', value: '78.1%', note: 'Z-test (two-tailed) — null accepted' },
      { label: 'Tech / Cyber Fraud Link', value: 'χ² = 22.36', note: 'p = 0.000014 — significant association' },
      { label: 'Victim Resource Gap', value: '72.9%', note: 'say support for low-income victims is insufficient' }
    ],
    insights: [
      '78.1% of respondents had heard of white-collar crime, yet 72.9% believe there aren\'t enough resources to help low-income victims recover financially.',
      'Technology and digital platforms show a statistically significant association with cyber fraud and identity-theft-driven white-collar crime (χ² = 22.36, p < 0.001).',
      'Perception of ethical-training adequacy sits between "neutral" and "believe to some extent," pointing to mixed confidence in institutional safeguards.',
      'Findings fed into proposed compensation frameworks and support for clearer, less discretionary regulatory law.'
    ],
    links: {
      slides: 'https://docs.google.com/presentation/d/14gerEDg4DY7ZQrTNvcF90SdX0NOiIt-NzqdN9psKClg/edit'
    }
  }
];
