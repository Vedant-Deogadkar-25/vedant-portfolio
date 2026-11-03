export const personalInfo = {
  name: "Vedant Deogadkar",
  roleHeadline: "Computer Engineer | Software Developer | AI & Technology Enthusiast",
  typewriterRoles: [
    "Computer Engineering Graduate",
    "Software Developer",
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
  ],
  shortIntro: "I enjoy building practical software solutions, exploring emerging technologies, and transforming ideas into meaningful digital experiences. With experience in full-stack development, data science, and AI-based applications, I'm continuously learning and building.",
  aboutMe: {
    heading: "A Little About Me",
    paragraphs: [
      "I'm Vedant Deogadkar, a Computer Engineering graduate passionate about software development, problem-solving, and emerging technologies. I enjoy working across different areas of technology, from building full-stack web applications to exploring artificial intelligence and data-driven solutions.",
      "Through internships and academic projects, I have gained practical exposure to software development, database management, data analytics, and application development.",
      "I believe in continuous learning, collaboration, and building technology that solves real-world problems."
    ],
    highlights: [
      {
        id: "software-dev",
        title: "Software Development",
        icon: "Code2",
        description: "Hands-on experience architecting full-stack applications with MERN stack, PHP, and modern engineering practices.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        borderGlow: "group-hover:border-blue-500/50"
      },
      {
        id: "ai-emerging",
        title: "AI & Emerging Technologies",
        icon: "Cpu",
        description: "Exploring Natural Language Processing, computer vision, multimodal emotion recognition, and IoT hardware integrations.",
        gradient: "from-violet-500/20 to-indigo-500/20",
        borderGlow: "group-hover:border-violet-500/50"
      },
      {
        id: "continuous-learning",
        title: "Continuous Learning",
        icon: "Sparkles",
        description: "Constantly expanding skills through industry certifications, practical internships, hackathons, and deep technical curiosity.",
        gradient: "from-cyan-500/20 to-teal-500/20",
        borderGlow: "group-hover:border-cyan-500/50"
      }
    ],
    quickStats: [
      { label: "Engineering CGPA", value: "8.97", subtext: "Wadia College of Engg." },
      { label: "Internships Completed", value: "3+", subtext: "Practical Industry Roles" },
      { label: "Core Technical Projects", value: "4+", subtext: "Full-Stack, AI & IoT" },
      { label: "Location", value: "Pune", subtext: "Maharashtra, India" }
    ]
  },
  contact: {
    email: "vedantdeogadkar@gmail.com",
    phone: "+91 9975925094",
    location: "Pune, Maharashtra, India",
    linkedin: "https://linkedin.com/in/vedant-deogadkar-b3a767375",
    github: "https://github.com/Vedant-Deogadkar-25",
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code",
    description: "Core algorithmic foundations and multi-paradigm programming languages",
    skills: [
      { name: "C", level: "Core", tag: "System & Algorithms" },
      { name: "C++", level: "Advanced", tag: "OOP & Data Structures" },
      { name: "Python", level: "Proficient", tag: "AI/ML & Automation" },
      { name: "Java", level: "Proficient", tag: "Object-Oriented Design" },
      { name: "JavaScript", level: "Proficient", tag: "Modern ES6+ & Async" },
      { name: "PHP", level: "Experienced", tag: "Web & Server Scripting" },
      { name: "PL/SQL", level: "Core", tag: "Procedures & Triggers" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Responsive, accessible, and reactive user interface development",
    skills: [
      { name: "HTML5", level: "Semantic Markup", tag: "Accessibility & Structure" },
      { name: "CSS3", level: "Modern Styling", tag: "Flexbox, Grid & Animations" },
      { name: "Bootstrap", level: "Framework", tag: "Responsive Component Systems" },
      { name: "React.js", level: "Modern Library", tag: "Hooks, State & Virtual DOM" }
    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    description: "Server architecture, RESTful API design, and asynchronous runtimes",
    skills: [
      { name: "Node.js", level: "Runtime", tag: "Event-driven Asynchronous I/O" },
      { name: "Express.js", level: "Framework", tag: "REST APIs & Middleware" },
      { name: "React.js (Full Stack)", level: "MERN Stack", tag: "Client-Server Integration" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Relational schema design, querying, and document databases",
    skills: [
      { name: "MySQL", level: "Relational RDBMS", tag: "Complex Queries, Joins & Normalization" },
      { name: "MongoDB", level: "NoSQL Database", tag: "Document Modeling & Aggregations" }
    ]
  },
  {
    category: "Tools & IDEs",
    icon: "Wrench",
    description: "Development environments, version control, and toolchains",
    skills: [
      { name: "VS Code", level: "Primary Editor", tag: "Extensions & Debugging" },
      { name: "Eclipse IDE", level: "Java IDE", tag: "Enterprise Development" },
      { name: "Android Studio", level: "Mobile IDE", tag: "Android SDK & Emulation" },
      { name: "XAMPP", level: "Server Stack", tag: "Apache & MySQL Local Dev" },
      { name: "Git & GitHub", level: "Version Control", tag: "Branching & Collaboration" }
    ]
  },
  {
    category: "Soft Skills",
    icon: "Users",
    description: "Interpersonal effectiveness, engineering teamwork, and delivery",
    skills: [
      { name: "Problem-Solving", level: "Analytical", tag: "Algorithmic & Debugging Mindset" },
      { name: "Communication", level: "Clear & Effective", tag: "Technical Documentation & Presenting" },
      { name: "Teamwork", level: "Collaborative", tag: "Cross-functional Group Projects" },
      { name: "Adaptability", level: "Agile", tag: "Fast Learner of New Toolchains" }
    ]
  }
];

export const experienceData = [
  {
    id: "apang-vidyalaya",
    role: "Software Development Intern (Social Internship)",
    organization: "Apang Vidyalaya",
    location: "Nigdi, Pune",
    period: "February 2025 – April 2025",
    type: "Social Internship / MERN Stack",
    description: "Spearheaded the design and implementation of a comprehensive School Management System for an educational institution, digitizing key academic and administrative operations.",
    responsibilities: [
      "Developed a full-stack School Management System using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Built end-to-end modules for student records, staff directory, daily attendance tracking, hostel allocation, and administrative notices.",
      "Integrated an AI chatbot for intelligent, instant user assistance and operational FAQs.",
      "Worked with MongoDB Atlas cloud clusters, Socket.IO for real-time notifications, and Tailwind CSS for responsive styling."
    ],
    techStack: ["MongoDB Atlas", "Express.js", "React.js", "Node.js", "Socket.IO", "Tailwind CSS", "AI Chatbot"]
  },
  {
    id: "cognifyz-tech",
    role: "Data Science Intern",
    organization: "Cognifyz Technologies",
    location: "Remote / Hybrid",
    period: "January 2025 – February 2025",
    type: "Data Analytics & Machine Learning",
    description: "Engaged in hands-on data analytics, exploratory data analysis, and predictive modeling workflows to extract actionable insights from structured datasets.",
    responsibilities: [
      "Gained practical experience in data cleaning, preprocessing, exploratory visualization, and statistical analytics.",
      "Implemented core data science concepts and resolved analytical tasks across various domain datasets.",
      "Strengthened professional communication, team coordination, reporting, and high attention to detail in data validation."
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization", "Exploratory Data Analysis"]
  },
  {
    id: "mrnd-lab",
    role: "Industrial Training Intern – Computer Engineering",
    organization: "MRND Lab Pvt. Ltd.",
    location: "Pune, Maharashtra",
    period: "July 2022 – August 2022",
    type: "Industrial Training Program",
    description: "Completed an intensive six-week industrial engineering program focused on software engineering standards, requirement analysis, and enterprise system design.",
    responsibilities: [
      "Successfully completed a rigorous six-week industrial training curriculum.",
      "Contributed to the group project: Reliance General Motor Claim Form System, digitizing motor claim workflows.",
      "Analyzed business requirements, collaborated on system design, and provided technical insights and recommendations to improve UI and data entry accuracy."
    ],
    techStack: ["Software Engineering", "Systems Analysis", "Web Development", "Database Design", "Technical Documentation"]
  }
];

export const projectsData = [
  {
    id: "mindmate",
    title: "MindMate – AI-Based Mental Health Support Platform",
    category: "AI/ML | Full-Stack Web Application",
    filterTag: "ai",
    image: "/images/project-mindmate.jpg",
    featured: true,
    tagline: "Multimodal emotion analysis and personalized emotional well-being companion",
    description: "Developed an AI-powered mental health support platform providing personalized emotional well-being support through multimodal emotion analysis.",
    fullDescription: "MindMate bridges the gap between everyday emotional stress and proactive well-being support. By synthesizing computer vision and natural language processing, MindMate understands emotional state changes across both text journals and facial expressions. The platform incorporates automated emergency safety alerts using Twilio and Firebase to ensure proactive care during high-risk moments.",
    features: [
      "NLP-based journal sentiment analysis for tracking emotional evolution over time.",
      "Real-time facial emotion recognition using computer vision algorithms.",
      "Interactive mood quizzes and longitudinal emotional pattern tracking dashboards.",
      "Emergency alert notification system integrated with Twilio SMS and Firebase Cloud Messaging.",
      "Personalized emotional well-being exercises and therapeutic coping suggestions."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "NLP", "AI/ML", "Twilio", "Firebase Cloud Messaging"],
    github: "https://github.com/Vedant-Deogadkar-25",
    liveDemo: null, // genuine deployment condition
    status: "Completed & Demo Ready",
    architecture: "React frontend communicating with Node/Express microservices, PyTorch/NLP processing pipeline, and MongoDB Atlas."
  },
  {
    id: "grocery-store",
    title: "Grocery Store Management System",
    category: "PHP-Based Web Application",
    filterTag: "fullstack",
    image: "/images/project-grocery.jpg",
    featured: true,
    tagline: "Streamlined inventory, POS billing, and store administrative operations",
    description: "Developed a web-based grocery management application to streamline inventory, customer, billing, and employee management.",
    fullDescription: "A robust commercial web application designed for retail store owners and cashiers to manage end-to-end grocery operations. Handles fast checkout billing with automated stock decrement, customer credit records, supplier purchase orders, and real-time alerts for low-inventory items.",
    features: [
      "Real-time product and inventory tracking with automatic low-stock alerts.",
      "Customer profiles, transaction histories, and employee role-based access control.",
      "Comprehensive CRUD operations across catalog, categories, and suppliers.",
      "Point-of-Sale (POS) order processing, invoice generation, and printable receipts.",
      "Relational database management optimized with indexed MySQL schemas."
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "XAMPP", "phpMyAdmin"],
    github: "https://github.com/Vedant-Deogadkar-25",
    liveDemo: null,
    status: "Production Ready",
    architecture: "LAMP/WAMP architecture running on Apache and MySQL with normalized transactional tables."
  },
  {
    id: "voice-assistant",
    title: "Voice AI Assistant",
    category: "Python-Based Desktop Application",
    filterTag: "ai",
    image: "/images/project-voice-assistant.jpg",
    featured: true,
    tagline: "Intelligent desktop automation powered by speech recognition and NLP",
    description: "Developed a voice-controlled desktop assistant that automates everyday tasks through natural voice commands.",
    fullDescription: "A lightweight, responsive desktop assistant built in Python that listens for spoken voice commands, parses intent using Natural Language Processing, and triggers automated system actions, web searches, application launches, and email dispatches.",
    features: [
      "Real-time speech recognition utilizing Google Speech API and microphone input.",
      "Clear text-to-speech audio feedback utilizing pyttsx3 offline engine.",
      "Intelligent web search and information retrieval via Wikipedia API and web browser automation.",
      "Seamless local desktop application launching (VS Code, browser, media player).",
      "Automated email drafting, formatting, and dispatching via SMTP protocol."
    ],
    technologies: ["Python", "SpeechRecognition", "pyttsx3", "NLP", "Wikipedia API", "SMTP", "OS Automation"],
    github: "https://github.com/Vedant-Deogadkar-25",
    liveDemo: null,
    status: "Completed",
    architecture: "Modular Python event loop connecting audio input drivers, speech recognition engine, NLP router, and OS execution handlers."
  },
  {
    id: "border-surveillance",
    title: "Border Surveillance System",
    category: "IoT-Based Project",
    filterTag: "iot",
    image: "/images/project-border-surveillance.jpg",
    featured: true,
    tagline: "Autonomous perimeter monitoring with computer vision and IoT hardware",
    description: "Developed an IoT-based surveillance solution using Raspberry Pi and computer vision for detecting human presence in restricted areas.",
    fullDescription: "An automated security system engineered for perimeter surveillance and restricted area monitoring. Utilizing a Raspberry Pi paired with a camera module and OpenCV computer vision pipeline, the system continuously analyzes frames for human faces and unauthorized motion, automatically capturing evidence snapshots and triggering rapid alert mechanisms.",
    features: [
      "Real-time human face and motion detection powered by OpenCV computer vision algorithms.",
      "Automated intrusion perimeter detection trigger with low false-positive filtering.",
      "Instant high-resolution image capture of detected individuals.",
      "Automated SMTP-based email alerts with attached intruder snapshot and timestamp.",
      "Hardware siren and audio alarm activation to deter unauthorized trespassers."
    ],
    technologies: ["Raspberry Pi", "Python", "OpenCV", "Pi Camera", "SMTP", "Linux", "IoT Sensors"],
    github: "https://github.com/Vedant-Deogadkar-25",
    liveDemo: null,
    status: "Hardware Tested & Verified",
    architecture: "Edge computing node on Raspberry Pi running Linux OS, OpenCV image pipeline, GPIO siren trigger, and SMTP alert daemon."
  }
];

export const educationData = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Modern Education Society's Wadia College of Engineering",
    location: "Pune, Maharashtra",
    period: "2023 – 2026",
    score: "CGPA: 8.97",
    scoreType: "CGPA",
    status: "Graduated",
    details: "Focusing on Software Engineering, Data Structures & Algorithms, Database Systems, Artificial Intelligence, and Computer Networks.",
    badge: "First Class with Distinction"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Pimpri Chinchwad Polytechnic",
    location: "Pune, Maharashtra",
    period: "2020 – 2023",
    score: "89.94%",
    scoreType: "Percentage",
    status: "Completed",
    details: "Comprehensive foundation in programming, object-oriented concepts, system administration, web technologies, and microprocessors.",
    badge: "Distinction Honor"
  },
  {
    degree: "SSC – Class 10",
    institution: "Indrayani English School",
    location: "Pune, Maharashtra",
    period: "2020",
    score: "86.00%",
    scoreType: "Percentage",
    status: "Completed",
    details: "Strong academic record with excellence in Mathematics, Science, and English.",
    badge: "Distinction"
  }
];

export const certificationsData = [
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM Skills Network",
    category: "Databases",
    skills: ["SQL", "Relational Database Design", "Schema Modeling", "Queries & Joins"],
    icon: "Database",
    accent: "from-blue-600 to-cyan-600"
  },
  {
    title: "Introduction to Cloud Computing with AWS, Azure & GCP",
    issuer: "Udemy",
    category: "Cloud Computing",
    skills: ["AWS", "Azure", "GCP", "Cloud Architecture", "IaaS / PaaS / SaaS"],
    icon: "Cloud",
    accent: "from-amber-500 to-orange-600"
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    category: "AI & Development",
    skills: ["AI-assisted Coding", "CLI Automation", "Prompt Engineering", "Developer Productivity"],
    icon: "Sparkles",
    accent: "from-purple-600 to-pink-600"
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    category: "AI & Collaboration",
    skills: ["AI Pair Programming", "Workflow Augmentation", "Task Automation"],
    icon: "Bot",
    accent: "from-indigo-600 to-violet-600"
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    category: "Security",
    skills: ["Cyber Threat Landscape", "Network Defense", "Cryptography Principles", "Security Operations"],
    icon: "ShieldCheck",
    accent: "from-emerald-600 to-teal-600"
  },
  {
    title: "Cybersecurity Job Simulation",
    issuer: "Mastercard",
    category: "Security",
    skills: ["Threat Assessment", "Security Incident Handling", "Enterprise Protection"],
    icon: "Lock",
    accent: "from-red-600 to-rose-600"
  },
  {
    title: "Getting Started with DevOps on AWS",
    issuer: "AWS Training & Certification",
    category: "DevOps & Cloud",
    skills: ["CI/CD Pipelines", "AWS CodePipeline", "Infrastructure as Code", "Deployment Automation"],
    icon: "Infinity",
    accent: "from-sky-600 to-blue-700"
  }
];
