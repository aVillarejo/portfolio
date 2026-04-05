import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alberto Villarejo — Full Stack Developer",
  author: "Alberto Villarejo",
  description:
    "Software Engineer Developer with 5+ years of experience building scalable, production-grade applications.",
  lang: "en",
  siteLogo: "/albert-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/albertovillarejo" },
    { text: "Github", href: "https://github.com/aVillarejo" },
  ],
  // canonicalURL: "https://vercelurl.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alberto Villarejo",
    specialty: "Full Stack Developer",
    summary:
      "Software Engineer with 5+ years of experience building scalable, production-grade applications.",
    email: "ing.albertovillarejo@gmail.com",
  },
  experience: [
    {
      company: "deep_dive",
      position: "Full Stack Developer",
      startDate: "Aug 2023",
      endDate: "Present",
      summary: [
        "Led frontend architecture for key projects using React and Next.js, leveraging SSR and Server Components to improve performance and scalability.",
        "Engineered full-stack solutions for complex AI and data science platforms, ensuring reliable data processing and system robustness.",
        "Designed and implemented Backend-for-Frontend (BFF) layers and API middleware to securely connect frontend applications with backend services.",
        "Integrated SAT APIs for electronic billing and fiscal validation, automating critical business processes.",
        "Built advanced data visualization systems capable of handling large datasets efficiently.",
        "Implemented secure authentication and authorization mechanisms (JWT, OAuth2) to protect sensitive data across platforms.",
      ],
      tools: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "API Design",
        "AWS",
        "Agile",
      ],
    },
    {
      company: "Soluciones Kuali",
      position: "Full Stack Developer",
      startDate: "Feb 2020",
      endDate: "Aug 2023",
      summary: [
        "Led the migration of React applications from React 17 to React 19, ensuring compatibility, performance, and system stability",
        "Designed and developed full-stack applications from scratch for enterprise clients across multiple industries.",
        "Architected and maintained scalable backend systems and RESTful APIs for reliable data operations.",
        "Delivered secure healthcare solutions, implementing data protection, encryption, and compliance-driven workflows.",
        "Optimized database performance through advanced SQL queries, indexing strategies, and schema design.",
        "Refactored and scaled legacy systems, reducing technical debt and improving performance under high load.",
      ],
      tools: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React",
        "Express",
        "Next.js",
        "Vite",
        "Mongoose",
        "SQL (MySQL)",
        "NoSQL(MongoDB)",
        "GCP",
        "Agile",
      ],
    },
  ],
  education: [
    {
      institution:
        "Instituto Tecnológico José Mario Molina Pasquel y Henríquez",
      degree: "Bachelor’s in ICT Engineering",
      grade: "Information and Communication Technologies Engineer",
      startDate: "2014",
      endDate: "2019",
    },
  ],
  projects: [
    {
      name: "Car Workshop",
      summary: "A car repair workshop dashboard app.",
      linkPreview: "https://car-workshop-theta.vercel.app/",
      linkSource: "https://github.com/aVillarejo/car-workshop",
      image: "/car-workshop.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alberto Villarejo, a passionate Developer with a knack for crafting seamless digital experiences. With a strong background in both frontend and backend development, with expertise in JavaScript, TypeScript, React.js, Node.js, and cloud technologies, I thrive in the intersection where creativity meets technology.
      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/albert-big.png",
  },
};
