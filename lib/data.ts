export const HERO_STATS = [
  { label: 'Internships', value: '3' },
  { label: 'Major Projects', value: '7' },
  { label: 'Prize Winner', value: '₹30,000' },
  { label: 'Achievements', value: '5+' },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: 'KPMG',
    position: 'Summer Intern',
    location: 'Gurugram, Haryana',
    period: 'Jun 2026 – Jul 2026',
    highlights: [
      'Led UX and information-architecture redesign of a 15+ case-study government content portal, improving navigation and content discoverability',
      'Redesigned site structure for scalability, enabling the platform to accommodate future case-study additions without rework',
      'Conducted vendor due diligence across 15+ transportation organizations, evaluating 40–45 business and technical requirements',
      'Synthesized findings to help consulting teams identify solution gaps and business opportunities',
    ],
    client: 'National e-Governance Division (NeGD)',
  },
  {
    id: 2,
    company: 'Thapar Institute of Engineering & Technology',
    position: 'ML/AI Research Intern',
    location: 'Patiala, Punjab',
    period: 'Jun 2024 – Aug 2024',
    highlights: [
      'Engineered interactive dashboards for NeuroGait.AI, visualizing gait-analysis outputs across 5,000+ sensor records',
      'Processed and cleaned 5,000+ time-series sensor data points, improving data quality for downstream model training',
      'Integrated trained model predictions into the application layer, improving inference flow and result usability',
    ],
    project: 'NeuroGait.AI',
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'MediHelp for Nabha',
    tagline: 'AI Calling Agent for Healthcare Access',
    description: 'Multilingual AI calling agent improving healthcare access across 170+ villages through telephony integration.',
    overview:
      'A Smart India Hackathon 2025 project designed to revolutionize healthcare accessibility in underserved rural areas. The platform uses AI-driven conversation handling to bridge the healthcare communication gap.',
    problem:
      'Rural healthcare workers and patients lack efficient communication channels. Traditional healthcare information is inaccessible to those with limited digital literacy.',
    solution:
      'Built a Next.js platform integrating telephony workflows with AI-driven conversation handling. Developed Punjabi speech-to-text and text-to-speech pipelines optimized for low-bandwidth environments.',
    technologies: ['Next.js', 'Python', 'AI/ML', 'Telephony API', 'Speech Processing', 'PostgreSQL'],
    impact: 'Finalist in SIH 2025, enabling healthcare access for 170+ villages',
    image: '/images/medihelp.png',
    github: 'https://github.com/namanarora',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'DelaySense AI',
    tagline: 'Supply Chain Delay Prediction System',
    description: 'Ensemble ML model achieving 96.39% accuracy in predicting delivery delays using temporal and spatial features.',
    overview:
      'A comprehensive machine learning system that leverages ensemble techniques to predict supply chain delays with high accuracy. Integrated with interactive dashboards for actionable insights.',
    problem:
      'Supply chain disruptions cause massive economic losses. Current systems lack predictive capabilities to proactively manage delays.',
    solution:
      'Built a delivery-delay prediction system using ensemble ML (Logistic Regression, Decision Tree, Random Forest, XGBoost). Engineered temporal and distance-based (Haversine) feature pipelines with SMOTE for class imbalance handling.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'SHAP', 'React', 'Flask'],
    impact: '96.39% prediction accuracy, enabling proactive supply chain management',
    image: '/images/delaysense.png',
    github: 'https://github.com/namanarora',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Automated Malaria Detection',
    tagline: 'CNN-Based Medical AI Platform',
    description: 'Transfer learning-based CNN classifier for malaria detection from microscopic images with interpretability.',
    overview:
      'An AI-powered platform that automates malaria diagnosis from blood microscopy images using deep learning. Features Grad-CAM visualization for medical explainability.',
    problem:
      'Manual malaria diagnosis is time-consuming and prone to human error. Resource-limited healthcare settings need automated solutions.',
    solution:
      'Developed a CNN-based classifier using transfer learning on 8,000+ microscopic images. Improved robustness with data augmentation and preprocessing. Integrated Grad-CAM for explainability.',
    technologies: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'Medical AI', 'React'],
    impact: 'High-accuracy malaria detection supporting healthcare diagnostics',
    image: '/images/malaria.png',
    github: 'https://github.com/namanarora',
    demo: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Kidhar - Indoor Navigation',
    tagline: 'GPS-Free Campus Navigation Platform',
    description: 'System design for indoor navigation covering 400–600 rooms using Dijkstra\'s algorithm with 20+ user testing.',
    overview:
      'An innovative indoor navigation system designed for academic campuses. Tested with 20+ users to refine positioning logic and route accuracy.',
    problem:
      'Campus navigation is confusing without GPS. Students waste time finding classrooms and facilities.',
    solution:
      'Architected system design covering 5 academic blocks and 400–600 navigable nodes. Implemented Dijkstra\'s algorithm for optimal shortest-path routing with refined positioning logic.',
    technologies: ['System Design', 'Algorithm', 'React', 'Node.js', 'PostgreSQL'],
    impact: 'Deployed campus-wide, improving student navigation experience',
    image: '/images/kidhar.png',
    github: 'https://github.com/namanarora',
    demo: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Bountree',
    tagline: 'Bug-Bounty Platform',
    description: 'Responsive React frontend and Node.js backend managing full bounty lifecycle for 10-member agile team.',
    overview:
      'A comprehensive bug-bounty platform enabling organizations to crowdsource security testing. Built with focus on usability and workflow optimization.',
    problem:
      'Organizations need efficient ways to manage bug bounty programs. Existing platforms lack intuitive user experience.',
    solution:
      'Designed responsive React frontend for issue-tracking workflows. Built backend REST APIs with Node.js, Express, and PostgreSQL. Collaborated in 10-member agile team with code reviews and iterative releases.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    impact: 'Production-ready platform managing bug bounty lifecycle',
    image: '/images/bountree.png',
    github: 'https://github.com/namanarora',
    demo: '#',
    featured: false,
  },
];

export const SKILLS = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'SQL', 'R'],
  },
  {
    category: 'AI & Data',
    items: ['TensorFlow', 'Scikit-Learn', 'NumPy', 'Pandas', 'XGBoost', 'SHAP', 'OpenCV'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'System Design', 'PostgreSQL'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Oracle DB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Linux', 'Vercel', 'GitHub'],
  },
];

export const ACHIEVEMENTS = [
  {
    title: '3rd Place - LEADCODE 2025',
    organization: 'Thapar Institute of Engineering & Technology',
    date: '2025',
    award: 'Programming Competition',
  },
  {
    title: 'Finalist - EY Hackathon 2025',
    organization: 'EY',
    date: '2025',
    award: 'PPI Track Finalist',
  },
  {
    title: 'SIH Internal Qualifier',
    organization: 'Smart India Hackathon 2025',
    date: '2025',
    award: 'Healthcare Track',
  },
  {
    title: '₹30,000 Prize Winner',
    organization: 'Various Hackathons',
    date: '2024-2025',
    award: 'Total Prize Money',
  },
  {
    title: '2nd Place - BizQuest Runner-up',
    organization: 'TVC TIET 2024',
    date: '2024',
    award: 'Business Competition',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Fast Learner',
    description: 'Master new technologies and domains quickly. Proven track record with AI/ML, full-stack, and consulting.',
    icon: 'Zap',
  },
  {
    title: 'Strong Problem Solver',
    description: 'Break down complex problems into elegant solutions. 96% accuracy in supply chain prediction. 20+ patents thinking.',
    icon: 'Brain',
  },
  {
    title: 'Product Mindset',
    description: 'Think beyond code. Focus on user experience, scalability, and business impact. Every project ships.',
    icon: 'Target',
  },
  {
    title: 'AI/ML Expertise',
    description: 'Hands-on experience with TensorFlow, Scikit-learn, and ensemble methods. Built production AI systems.',
    icon: 'Cpu',
  },
  {
    title: 'Full Stack Developer',
    description: 'End-to-end ownership. Frontend (React/Next.js) to backend (Node.js) to database architecture.',
    icon: 'Layers',
  },
  {
    title: 'Leadership & Collaboration',
    description: 'Proven ability to lead 10+ member teams, secure ₹10L+ sponsorships, and drive initiatives forward.',
    icon: 'Users',
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/namanarora',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/naman-arora',
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:naman0807arora@gmail.com',
    icon: 'Mail',
  },
];

export const RESUME_URL = 'https://drive.google.com/file/d/your-resume-id/view';
