// ============================================================
// portfolioData.js — Centralized configuration for Rahul Kumar's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Rahul Kumar",
  firstName: "Rahul",
  brandName: "Rahul Kumar",
  title: "Software Developer",
  location: "Mumbai, India",
  phone: "",
  emails: {
    primary: "rahulkumar86920@gmail.com",
    secondary: "",
  },
  summary:
    "B.Sc. IT graduate from D.G. Ruparel College, Mumbai. 5 months as SDE Intern at Restaverse working on React.js, React Native & FastAPI. I pick up whatever the problem needs and ship it.",
  resumeUrl: "https://drive.google.com/file/d/1LtXh19VvJwXxunKSMnKEOLt8MPR6zUTJ/view?usp=drive_link",
};

export const socialLinks = {
  github: "https://github.com/rahulkumar86920",
  linkedin: "https://www.linkedin.com/in/rahhulkumar/",
  instagram: "https://instagram.com/mr_rahhul",
};

export const heroContent = {
  greeting: "Hi, I'm Rahul Kumar",
  titleHighlight: "Software Developer",
  subtitle:
    "I build fast, scalable applications using React, React Native, MERN Stack, and FastAPI.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "https://drive.google.com/file/d/1LtXh19VvJwXxunKSMnKEOLt8MPR6zUTJ/view?usp=drive_link" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Rahul Kumar</span>, a software developer based in Mumbai, India, dedicated to crafting clean, functional, and highly scalable full-stack and mobile applications.<br/><br/>I'm a developer who gets things done. Whether it's building a real-time video app with WebRTC, scraping thousands of data points with Python, or shipping mobile features with React Native — I don't overthink it, I just build it. I care about clean code, fast products, and working with passionate teams.`,
  techStack: ["React", "React Native", "FastAPI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "Java", level: 78 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "React", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Node.js", level: 85 }
      ]
    },
    {
      title: "Backend & Mobile",
      skills: [
        { name: "React Native", level: 80 },
        { name: "FastAPI", level: 76 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Workflows",
      skills: [
        { name: "Git & GitHub", level: 86 },
        { name: "VS Code", level: 90 },
        { name: "Agile Methodologies", level: 80 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 78 },
        { name: "OOP", level: 85 },
        { name: "Software Engineering", level: 82 }
      ]
    }
  ]
};

// Brand New Content Creation Data (Left unchanged)
export const contentCreation = {
  badge: "Cinematic Content",
  heading: "Creative Direction & Cinematic Edits",
  description: "Beyond coding, I craft visual stories with premium editing, color grading, and creative pacing.",
  categories: [
    {
      title: "Cinematic Reels",
      description: "Visual stories crafted with cinematic lighting, premium color grading, and high-impact sound design.",
      stats: "50+ Reels Created",
      icon: "🎥"
    },
    {
      title: "Travel Videos",
      description: "Immersive travel vlogs and aesthetic edits capturing cultures, landscapes, and visual rhythms.",
      stats: "15+ Countries/Cities",
      icon: "✈️"
    },
    {
      title: "Educational Reels",
      description: "Fast-paced tech tutorials and educational content designed to simplify coding and software engineering.",
      stats: "100k+ Views",
      icon: "🧠"
    },
    {
      title: "My Own Creative Edits",
      description: "Experimental transitions, 3D overlays, and trendsetting visual effects that push creative bounds.",
      stats: "Personal Projects",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data (Left unchanged)
export const leadershipList = [
  {
    title: "IEEE Madhya Pradesh Section (Social Media Team)",
    description: "Managed and coordinated digital content, driving audience engagement and designing interactive visual campaigns for tech events.",
    role: "Social Media Coordinator",
    badge: "Volunteer"
  },
  {
    title: "Team Coordinator – Go-Kart International Racing 2K25",
    description: "Led multi-disciplinary teams in project management, budget control, and logistics coordination for a high-profile international racing event.",
    role: "Team Coordinator",
    badge: "Leadership"
  },
  {
    title: "5-Day MOE IDE Bootcamp, Roorkee",
    description: "Participated in an intensive Innovation, Design, and Entrepreneurship Bootcamp organized by the Ministry of Education at IIT Roorkee.",
    role: "Bootcamp Graduate",
    badge: "Innovation"
  },
  {
    title: "Hosted INFORIA Tech Summit Hackathon",
    description: "Organized and hosted the flagship hackathon, managing registrations, mentoring participant teams, and coordinating judge evaluations.",
    role: "Hackathon Organizer",
    badge: "Co-Curricular"
  },
  {
    title: "Event Coordinator & Anchoring – INFORIA 2K25",
    description: "Coordinated technical events and served as the main stage anchor, speaking in front of large crowds and managing the summit flow.",
    role: "Stage Anchor & Coordinator",
    badge: "Public Speaking"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Restaverse",
    role: "Software Development Engineer Intern",
    duration: "January 2026 – May 2026",
    skills: ["Frontend Development", "Mobile Development", "API Integration", "Database Optimization"],
    tech: ["React.js", "React Native", "FastAPI", "Node.js", "MongoDB"]
  }
];

// Brand New Soft Skills Data (Left unchanged)
export const softSkillsList = [
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and driving project completion with shared vision." },
  { name: "Continuous Learning", icon: "📚", desc: "Constantly exploring new frameworks, coding design patterns, and modern practices to ship clean, efficient code." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, building racing carts, and engineering code in sync." },
  { name: "Communication", icon: "💬", desc: "Clear, concise, and structured interactions in both business and technical contexts." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n." },
  { name: "Creativity", icon: "🎨", desc: "Blending cinematic aesthetics with software structure to build premium experiences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies, event hosting, and developing robust software platforms." }
];

export const projects = [
  {
    id: "zippycart",
    number: "01",
    badge: "🚀 Grocery Platform",
    title: "ZippyCart",
    description:
      "Real-time grocery delivery platform — JWT auth, live product catalog, cart management, payment integration, and order tracking. Deployed on cloud infra.",
    techTags: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      github: "https://github.com/rahulkumar86920/Zippy_Cart",
      frontendDemo: "https://zippy-cart-backend.onrender.com",
      backendApi: "https://zippy-cart-backend.onrender.com",
    },
    isFlagship: true,
  },
  {
    id: "zoomify",
    number: "02",
    badge: null,
    title: "Zoomify",
    description:
      "Peer-to-peer video conferencing — HD video/audio, screen sharing, real-time chat, collaborative whiteboard, STUN/TURN for NAT traversal.",
    techTags: ["WebRTC", "Socket.IO", "React", "Node.js"],
    links: {
      github: "https://github.com/rahulkumar86920/Zoomify",
      demo: "https://zoomify-frontend-3pov.onrender.com/",
    },
    isFlagship: false,
  },
  {
    id: "datalens",
    number: "03",
    badge: null,
    title: "DataLens",
    description:
      "Automated data extraction engine — static + JS-rendered pages, dedup, validation, MongoDB storage, CSV/JSON export. 99.5% accuracy.",
    techTags: ["Python", "Selenium", "BeautifulSoup", "MongoDB"],
    links: {
      github: "https://github.com/rahulkumar86920/DataLens",
      demo: "https://data-lens-tau.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "sweetshop",
    number: "04",
    badge: null,
    title: "Sweet Shop",
    description:
      "Role-based inventory + billing system — real-time stock tracking, GST invoice generation, sales analytics. Cuts manual errors by 60%.",
    techTags: ["React", "Express", "MongoDB", "Node.js"],
    links: {
      github: "https://github.com/rahulkumar86920/sweet_shop_management",
      demo: "https://github.com/rahulkumar86920",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025",
      issuer: "Oracle",
      icon: "☁️",
    },
    {
      name: "Programming in Java (94%)",
      issuer: "NPTEL",
      icon: "☕",
    },
    {
      name: "C Programming & Assembly Language",
      issuer: "NPTEL",
      icon: "⚙️",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte",
      icon: "💼",
    },
    {
      name: "Career Edge – IT Primer",
      issuer: "TCS iON",
      icon: "🎓",
    },
    {
      name: "Fundamentals of BI & Analytics",
      issuer: "Lumenore",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/file/d/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f/view?usp=sharing",
};

export const education = {
  degree: "B.Sc. – Information Technology",
  institution: "D.G. Ruparel College, Mumbai",
  cgpa: "N/A",
  graduation: "2026",
  twelfth: "12th Science – N/A",
  tenth: "10th CBSE – N/A",
};

export const footerContent = {
  taglines: [
    "Software Development & Full Stack",
    "MERN Stack · React Native · FastAPI",
    "High Performance Applications",
  ],
  credential: "B.Sc. IT Graduate '26",
  copyright: `© ${new Date().getFullYear()} Rahul Kumar | Built with React`,
};

// EmailJS Configuration (Left unchanged)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
