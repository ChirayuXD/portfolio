export const personal = {
  name: "Chirayu Agrawal",
  title: "Data Analyst Intern at Bain & Company | AI/ML | Data Science | Software Engineering",
  tagline:
    "Building intelligent systems across AI/ML, data science, software engineering, and applied research.",
  location: "Gurugram, Haryana, India",
  email: "chirayuagrawal321@gmail.com",
  phone: "+91 8287057213",
  linkedin: "https://linkedin.com/in/chirayu-agrawal-cs",
  github: "https://github.com/ChirayuXD",
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary: `I'm a Computer Science and Engineering undergraduate with experience gained through research, internships, and hands-on projects across machine learning, AI, data science, and software engineering. I'm passionate about solving challenging problems, building intelligent systems, and creating impactful technology.`,
  highlights: [
    "Open to opportunities in software engineering, AI/ML engineering, and data science",
    "Experience across enterprise GenAI agents, analytics platforms, computer vision, and ML pipelines",
    "Projects spanning Web3 authenticity, NLP, hybrid game AI, realtime chat, and computer vision",
  ],
};

export const experience = [
  {
    company: "Bain & Company",
    role: "Data Analyst Intern, Enterprise Technology",
    period: "Jan 2026 - Present",
    location: "Gurugram, Haryana, India",
    highlights: [
      "Architected an AI-enabled full-stack technology intelligence platform using Python, FastAPI, React, and TypeScript to analyze company technographics.",
      "Integrated LLM-based extraction via OpenAI API, semantic clustering, structured output validation, and automated classification into a Next.js dashboard with real-time REST API monitoring.",
      "Built a scalable analytics pipeline with Python, DuckDB, SQL, and Parquet to process 1M+ rows, automate multi-sheet Excel reporting, and reduce end-to-end analysis time by up to 90%.",
      "Deployed enterprise GenAI agents with multi-threaded batch processing to automate analysis across confidential workflows, reducing manual effort by 90% across 100K+ records.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Next.js",
      "OpenAI API",
      "DuckDB",
      "SQL",
      "Parquet",
      "Excel Automation",
    ],
  },
  {
    company: "HARMAN International",
    role: "Software Engineer Intern - AI and ML",
    period: "May 2025 - Aug 2025",
    location: "Gurugram, Haryana, India",
    highlights: [
      "Developed an autonomous AI agent for automated bug fixing using CrewAI, achieving a 60% reduction in manual debugging time.",
      "Engineered a custom YOLO v10 model for black-screen detection in automotive stereo systems, reaching 92% accuracy.",
      "Created a manager AI agent to enhance communication and streamline existing AI agents via the A2A protocol.",
    ],
    technologies: [
      "Python",
      "CrewAI",
      "A2A Protocol",
      "YOLO v10",
      "FAISS",
      "Azure GPT-4o",
    ],
  },
  {
    company: "Agbe India",
    role: "Machine Learning and Artificial Intelligence Intern",
    period: "Jun 2024 - Aug 2024",
    location: "Gurugram, Haryana, India",
    highlights: [
      "Developed a machine learning model for lead scoring and lead propensity for SalesDocket software.",
      "Helped boost sales efficiency and improve lead-to-customer conversion through data-driven prioritization.",
    ],
    technologies: ["Python", "SQL", "Machine Learning", "Scikit-learn", "Pandas"],
  },
  {
    company: "KPMG India",
    role: "Internship Trainee - Digital Trust (DT-CDSG)",
    period: "Jul 2023 - Aug 2023",
    location: "Gurugram, Haryana, India",
    highlights: [
      "Contributed to digital trust and cybersecurity initiatives within the CDSG team.",
    ],
    technologies: ["Cybersecurity", "Risk Assessment"],
  },
];

export const projects = [
  {
    title: "DeepTruth AI",
    description:
      "End-to-end deepfake detection system that analyzes uploaded images with a Hugging Face model and stores immutable authenticity proof through IPFS and Ethereum Sepolia.",
    metrics: "AI authenticity score | IPFS CID | SHA-256 content hash | on-chain verification",
    technologies: [
      "Python",
      "Flask",
      "React",
      "Web3",
      "Ethereum Sepolia",
      "IPFS",
      "Hugging Face",
      "SHA-256",
    ],
    link: "https://github.com/ChirayuXD/DeepTruth-AI",
    featured: true,
  },
  {
    title: "SCoDA: Self-supervised Continual Domain Adaptation",
    description:
      "First-author ICVGIP 2025 research proposing a novel Source-Free Domain Adaptation framework with geometric manifold alignment and dual-speed EMA teacher-student architecture.",
    metrics: "+11.79% over SOTA on OfficeHome | Prevents catastrophic forgetting",
    technologies: ["Python", "PyTorch", "Machine Learning"],
    link: "https://arxiv.org/abs/2509.09935",
    featured: true,
  },
  {
    title: "Microsoft Azure PyRIT",
    description:
      "Open-source contribution integrating the JailbreakBench dataset into Microsoft's PyRIT framework for improved AI safety evaluations.",
    metrics: "Enhanced resilience testing against adversarial jailbreak attacks",
    technologies: ["Python", "PyTorch", "GenAI"],
    link: "https://github.com/Azure/PyRIT",
    featured: true,
  },
  {
    title: "Dots and Boxes: Hybrid AI",
    description:
      "Strategic game AI that combines Monte Carlo Tree Search for early exploration with Alpha-Beta Pruning for precise endgame decisions in a Tkinter interface.",
    metrics: "MCTS exploration | Alpha-Beta endgame search | 60% completion strategy switch",
    technologies: ["Python", "Tkinter", "MCTS", "Alpha-Beta Pruning", "Game AI"],
    link: "https://github.com/ChirayuXD/Dots-and-Boxes-Hybrid-AI-Project",
    featured: true,
  },
  {
    title: "Steam Reviews Sentiment Analysis",
    description:
      "NLP pipeline that cleans Steam review text, visualizes review patterns, extracts TF-IDF and count-vectorized features, and compares supervised classifiers.",
    metrics: "EDA | TF-IDF | Count Vectorization | classifier benchmarking",
    technologies: [
      "Python",
      "Pandas",
      "NLTK",
      "Scikit-learn",
      "TF-IDF",
      "WordCloud",
      "Seaborn",
    ],
    link: "https://github.com/ChirayuXD/Classifier-models-on-Steam-Reviews",
    featured: false,
  },
  {
    title: "SuperChat Application",
    description:
      "Responsive React chat app using Firebase Authentication, Firestore realtime messaging, and Firebase Storage for image upload workflows.",
    metrics: "Realtime messaging | Firebase Auth | image uploads | responsive UI",
    technologies: ["React", "Firebase", "Firestore", "Firebase Auth", "Firebase Storage"],
    link: "https://github.com/ChirayuXD/ChatterBox",
    featured: false,
  },
  {
    title: "Hand Gesture Recognition",
    description:
      "Realtime webcam-based gesture recognition system that performs background averaging, thresholding, contour detection, and segmented hand image capture.",
    metrics: "OpenCV segmentation | contour detection | calibration-driven capture",
    technologies: ["Python", "OpenCV", "NumPy", "imutils", "Scikit-learn"],
    link: "https://github.com/ChirayuXD/Handsign-Recognition",
    featured: false,
  },
  {
    title: "Fraud Detection System",
    description:
      "Real-time serverless pipeline using AWS S3, Kinesis, and Lambda with QuickSight dashboards for anomaly visualization.",
    metrics: "Improved detection efficiency and stakeholder visibility",
    technologies: ["AWS", "S3", "Kinesis", "Lambda", "QuickSight"],
    link: "https://github.com/ChirayuXD/fraud-detection-using-machine-learning",
    featured: false,
  },
  {
    title: "CereBRO",
    description:
      "AI-driven adaptive learning platform for neurodiverse students with personalized paths, flashcards, and quizzes via LangChain.",
    metrics: "25% increase in student engagement",
    technologies: ["React", "Node.js", "LangChain", "FastAPI", "Groq API"],
    link: "https://github.com/ChirayuXD/cerebro",
    featured: false,
  },
];

export const skills = [
  {
    category: "ML & Deep Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
      "Transformers",
      "CNNs",
      "ViT",
      "YOLO v10",
      "LightGBM",
      "Model Evaluation",
      "Domain Adaptation",
      "Self-supervised Learning",
    ],
  },
  {
    category: "LLMs, RAG & Agents",
    items: [
      "OpenAI API",
      "LangChain",
      "RAG",
      "FAISS",
      "Semantic Search",
      "Structured Outputs",
      "Prompt Engineering",
      "CrewAI",
      "Multi-agent Systems",
      "LLM Evaluation",
    ],
  },
  {
    category: "Computer Vision & NLP",
    items: [
      "OpenCV",
      "Deepfake Detection",
      "Object Detection",
      "Hand Gesture Recognition",
      "NLTK",
      "TF-IDF",
      "Sentiment Analysis",
      "Text Classification",
      "WordCloud",
    ],
  },
  {
    category: "Data Engineering & Analytics",
    items: [
      "Python",
      "SQL",
      "DuckDB",
      "Pandas",
      "NumPy",
      "Parquet",
      "Feature Engineering",
      "Data Pipelines",
      "Excel Automation",
      "Analytics Reporting",
    ],
  },
  {
    category: "Backend, MLOps & Cloud",
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "Model Serving",
      "Batch Processing",
      "Docker",
      "AWS",
      "Firebase",
      "Git",
      "Linux",
    ],
  },
  {
    category: "Web3 & Trust Systems",
    items: [
      "IPFS",
      "Web3",
      "Ethereum Sepolia",
      "Blockchain Verification",
      "SHA-256",
      "Content Hashing",
    ],
  },
  {
    category: "Algorithms & AI Search",
    items: ["MCTS", "Alpha-Beta Pruning", "Game AI", "Search Algorithms"],
  },
  {
    category: "Frontend & Product",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Responsive UI",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C"],
  },
];
export const education = [
  {
    institution: "Shiv Nadar University",
    degree: "B.Tech, Computer Science and Engineering",
    period: "Aug 2022 - 2026",
    location: "Noida, UP, India",
    details: "GPA: 8.09",
  },
  {
    institution: "Manav Rachna International School",
    degree: "Schooling",
    period: "Apr 2014 - Mar 2022",
    location: "Gurugram, Haryana, India",
    details: "12th Grade: 90% | 10th Grade: 96.4%",
  },
];

export const certifications = [
  "Foundations of Cybersecurity by Google",
  "Software Engineer Virtual Experience Program Participant",
  "2-day Technical Workshop on Artificial Intelligence with Machine Learning",
  "What is Data Science?",
  "Cybersecurity Fundamentals",
];

const skillCount = skills.flatMap((group) => group.items).length;

export const heroStats = [
  {
    value: experience.length,
    suffix: "",
    label: "Internships",
  },
  {
    value: skillCount,
    suffix: "",
    label: "Skills",
  },
  {
    value: projects.length,
    suffix: "",
    label: "Projects Completed",
  },
  {
    value: 90,
    suffix: "%",
    label: "Impact Made",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];