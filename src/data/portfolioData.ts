import type { PersonalDetails, SkillCategory, ExperienceItem, ProjectItem, AchievementItem } from '../types';

export const personalDetails: PersonalDetails = {
  name: "Arvind Yadav",
  title: "Full-Stack Web Developer & CSE Undergraduate",
  tagline: "Building scalable MERN applications, real-time WebSocket infrastructure, and high-performance user interfaces.",
  bio: "Computer Science student at IIIT Ranchi with a passion for web engineering, real-time systems, and competitive programming. Skilled in building production-grade MERN stack applications, API design, bundle optimization, and solving complex algorithmic challenges.",
  college: "Indian Institute of Information Technology (IIIT) Ranchi",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  cgpa: "8.44 / 10.0",
  location: "Ranchi, Jharkhand, India",
  emails: {
    personal: "imarvind2121@gmail.com",
    college: "arvind.2024ug1066@iiitranchi.ac.in"
  },
  phone: "+91-8429989095",
  socials: {
    github: "https://github.com/jsr-warrior-21",
    linkedin: "https://linkedin.com/in/arvind-yadav-m21",
    codechef: "https://www.codechef.com/users/am_arvind_21",
    leetcode: "https://leetcode.com/u/jsr_warrior_21"
  },
  stats: {
    contestRating: 1609,
    dsaSolved: 650,
    globalRank: 112,
    hackathonMVPs: 4
  }
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "Fluid interfaces & web performance optimization",
    skills: [
      { name: "React.js", description: "Built 20+ reusable component modules & interactive SPAs for high user engagement." },
      { name: "Next.js", description: "SSR & SSG rendering patterns for SEO-optimized production web apps." },
      { name: "Tailwind CSS", description: "Designed 25+ accessible, responsive layouts across mobile, tablet, & desktop." },
      { name: "TypeScript", description: "Strict type-safe application state, props interfaces, and API response contracts." },
      { name: "Redux Toolkit", description: "Centralized state management, slice architecture, and async thunk API handling." },
      { name: "RESTful APIs", description: "Integrated Axios client pipelines with token interception and standard error handling." },
      { name: "HTML5 & CSS3", description: "Semantic markup, HTML5 Canvas image compression, & CSS keyframe micro-animations." }
    ]
  },
  {
    title: "Backend Engineering",
    subtitle: "High-throughput APIs & real-time messaging",
    skills: [
      { name: "Node.js", description: "Event-driven asynchronous runtime serving 500+ concurrent requests at sub-180ms latency." },
      { name: "Express.js", description: "Authored 18+ REST endpoints with middleware security, CORS, and request rate limiting." },
      { name: "Socket.IO", description: "Engineered real-time bidirectional WebSocket rooms with passcode encryption." },
      { name: "JWT Authentication", description: "Secure state-less authentication pipelines with access and refresh tokens." },
      { name: "Microservices", description: "Decoupled service design separating authentication, chat streams, and media storage." }
    ]
  },
  {
    title: "Databases & Cloud",
    subtitle: "Structured persistence & automated deployments",
    skills: [
      { name: "MongoDB", description: "Document data modeling, schema indexing, and metadata persistence for streaming platforms." },
      { name: "MySQL", description: "Relational database schema design, ACID transactions, and optimized SQL queries." },
      { name: "Render", description: "Deployed backend Node.js Web Services with environment secrets & health monitoring." },
      { name: "Netlify & Vercel", description: "Automated continuous delivery deployments for React & Next.js frontend applications." }
    ]
  },
  {
    title: "Developer Tools & CI/CD",
    subtitle: "Production workflow & build automation",
    skills: [
      { name: "Git & GitHub", description: "Version control, feature branch workflow, pull request code reviews, & merge resolution." },
      { name: "GitHub Actions", description: "Automated CI/CD pipelines reducing software release cycle durations by 50%." },
      { name: "Vite", description: "Lightning-fast HMR dev server setup and bundle optimization with tree-shaking." },
      { name: "Postman", description: "API endpoint testing, environment variable configuration, & payload validation." },
      { name: "VS Code", description: "Advanced debugging, linting setup, and extension productivity customization." }
    ]
  },
  {
    title: "Core Computer Science",
    subtitle: "Algorithmic thinking & fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", description: "Solved 650+ problems across LeetCode, GFG, & CodeChef with 85%+ accuracy." },
      { name: "DBMS & SQL", description: "Normalization, indexing strategies, transaction isolation, and query optimization." },
      { name: "Object-Oriented Programming", description: "Encapsulation, inheritance, polymorphism, and modular design patterns in C++ & JS." },
      { name: "Operating Systems", description: "Process synchronization, memory management, multi-threading, and system calls." },
      { name: "Computer Networks", description: "TCP/IP stack, HTTP/HTTPS, WebSockets, DNS resolution, and network sockets." }
    ]
  },
  {
    title: "Methodologies & Concepts",
    subtitle: "Agile execution & code quality",
    skills: [
      { name: "Agile / Scrum", description: "Participated in 2-week Agile sprints delivering production feature increments." },
      { name: "CI / CD", description: "Continuous integration & automated deployment pipelines for zero-downtime releases." },
      { name: "Test-Driven Development", description: "Writing unit tests & component verification before code integration." },
      { name: "Web Performance", description: "Bundle code-splitting, lazy loading, & asset compression securing 95+ Lighthouse score." }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    company: "InAmbigos Foundation",
    location: "Remote",
    period: "May 2026 – Jun 2026",
    type: "Remote Internship",
    highlights: [
      "Refactored legacy frontend code using React.js and Tailwind CSS, converting 5+ monolithic views into 20+ reusable software modules.",
      "Designed mobile-first interface layouts across 12+ product screens, driving a 35% increase in user engagement and eliminating layout rendering defects.",
      "Executed frontend development within a 4-engineer team, translating Figma wireframes into clean production code across 2-week Agile sprints.",
      "Streamlined JavaScript bundle compilation and code-splitting, reducing page load latency by 28% and securing a 95+ Google Lighthouse score on 15+ pages."
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Agile / Scrum", "Figma", "Git", "Performance Optimization"]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "pulseplay",
    title: "PulsePlay",
    subtitle: "Full-Stack Video Streaming Web Application",
    period: "Apr 2026 – May 2026",
    badge: "MERN Stack Streamer",
    category: "Full-Stack",
    metrics: "250+ Concurrent Users | 360+ Req/Sec | <200ms Latency",
    description: "High-performance video streaming platform built on the MERN stack featuring secure JWT authentication, RESTful metadata persistence, and automated multi-platform deployment.",
    highlights: [
      "Built a video streaming service utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) capable of serving 250+ concurrent users at 360+ requests/sec throughput with sub-200ms response times.",
      "Authored 18+ RESTful API endpoints in Node.js and Express.js with JWT authentication for user access control and video metadata persistence.",
      "Crafted 25+ accessible frontend components using Tailwind CSS, maintaining complete compatibility across desktop, tablet, and mobile breakpoints.",
      "Established automated CI/CD workflows with GitHub Actions, Render, and Netlify, cutting release cycle duration by 50%."
    ],
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "JWT Auth", "GitHub Actions", "Netlify", "Render"],
    githubUrl: "https://github.com/jsr-warrior-21/PulsePlay",
    liveUrl: "https://pulseplays.netlify.app/",
    featured: true,
    architectureOverview: "Features a modular MERN architecture with an Express.js REST gateway handling video metadata indexing, JWT token validation, and MongoDB aggregation, coupled with a responsive Tailwind React frontend."
  },
  {
    id: "talkify",
    title: "Talkify",
    subtitle: "Real-Time Room-Based Chat Web Application",
    period: "Mar 2026",
    badge: "Real-Time WebSockets",
    category: "Real-Time",
    metrics: "500+ Concurrent WebSocket Connections / Room | -35% Latency",
    description: "Instant real-time room messaging application powered by Node.js and Socket.IO with client-side canvas media compression and passcode-encrypted private channels.",
    highlights: [
      "Engineered a real-time chat application using Node.js and Socket.IO, supporting 500+ concurrent WebSocket connections per room.",
      "Programmed private room messaging with on-demand channel creation and passcode encryption across 25+ active channels.",
      "Pioneered client-side canvas image compression, reducing media upload file sizes by 40% and accelerating transfer speeds by 2.5x.",
      "Streamlined Socket event listeners and DOM rendering cycles, cutting real-time message delivery latency by 35%."
    ],
    tools: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "EJS", "CSS3", "HTML5 Canvas API"],
    githubUrl: "https://github.com/jsr-warrior-21/ChatApp-socket.io",
    liveUrl: "https://talkify-hpb2.onrender.com/",
    featured: true,
    architectureOverview: "Built around event-driven WebSocket connections on Node.js & Socket.IO, benchmarked for 500+ concurrent connections per room, and leveraging HTML5 Canvas in the browser for memory-efficient media compression."
  }
];

export const achievements: AchievementItem[] = [
  {
    title: "CodeChef 3-Star Programmer",
    badge: "Global Rank 112",
    value: "1609 Peak Rating",
    description: "Earned 3-star rating on CodeChef and achieved Global Rank 112 among 25,000+ competitors in CodeChef Starters 226.",
    iconName: "Trophy",
    link: "https://www.codechef.com/users/am_arvind_21"
  },
  {
    title: "650+ DSA Solved",
    badge: "85%+ Contest Accuracy",
    value: "650+ Problems",
    description: "Solved 650+ algorithmic Data Structures & Algorithms problems across LeetCode, GeeksforGeeks, and CodeChef across 40+ contests.",
    iconName: "Code2",
    link: "https://leetcode.com/u/jsr_warrior_21"
  },
  {
    title: "4 Hackathon MVPs",
    badge: "100% Core MVP Delivered",
    value: "24-Hour Hackathons",
    description: "Delivered 4 fully functional web application prototypes during intense 24-hour inter-college hackathons.",
    iconName: "Zap"
  }
];
