export const PROJECTS = [
  {
    id: "1",
    title: "iZone Iraq",
    img: "/images/projects/izone.png",
    num: "01",
    code: false,
    style: "",
    tools: [
      { tool: "TypeScript" },
      { tool: "Remix" },
      { tool: "Tailwind CSS" },
      { tool: "Laravel" },
    ],
    demo: "https://www.izoneiraq.com/",
    description: [
      {
        p: "Multi-brand commerce platform (iZone, OneStore, Apple Zone, Mantiqa, Strap Iraq) serving 15,000+ monthly users. I own the TypeScript frontend — React Router (Remix) with server-side loaders, a shared Tailwind CSS design system, English/Arabic/Kurdish RTL, Laravel API integration, checkout and First Iraqi Bank QR payments, and Mapbox address capture. Catalogue LCP went from 3.8s to 1.4s.",
      },
    ],
  },
  {
    id: "2",
    title: "Botolon",
    img: "/images/projects/botolon.png",
    num: "02",
    code: false,
    style: "",
    tools: [{ tool: "Next.js" }, { tool: "Sass" }, { tool: "Meta Graph API" }],
    demo: "https://www.botolon.com/",
    description: [
      {
        p: "Web client for a chatbot automation platform serving 50+ business accounts. I built a visual conversation-flow builder, analytics dashboard, and shared component library, and kept interaction latency under 100ms with list virtualisation, memoisation and debounced polling against the Meta Graph API.",
      },
    ],
  },
  {
    id: "3",
    title: "ErbilianWay",
    img: "/images/projects/erbilianway.png",
    num: "03",
    code: false,
    style: "flex-row-reverse",
    tools: [{ tool: "Vue.js" }, { tool: "Bootstrap" }, { tool: "Laravel" }],
    demo: "https://erbiliantravel.com/",
    description: [
      {
        p: "Travel booking platform for an Erbil tour operator. I built the responsive frontend and booking-enquiry flow against a Laravel API so visitors can explore trips and send enquiries from any device.",
      },
    ],
  },
];

export const SKILLS = [
  { id: "1", name: "Html", img: "/images/svg/html.svg" },
  { id: "2", name: "Css", img: "/images/svg/css.svg" },
  { id: "3", name: "Bootstrap", img: "/images/skills/bootstrap.png" },
  { id: "4", name: "Sass", img: "/images/skills/5968550.png" },
  { id: "5", name: "Tailwind CSS", img: "/images/svg/tailwind.svg" },
  { id: "6", name: "JavaScript", img: "/images/svg/js.svg" },
  { id: "6.5", name: "TypeScript", img: "/images/svg/typescript.svg" },
  { id: "7", name: "Python", img: "/images/skills/python.png" },
  { id: "8", name: "React", img: "/images/svg/reactsvg.svg" },
  { id: "9", name: "Next.js", img: "/images/skills/next.png" },
  { id: "9.5", name: "React Native", img: "/images/svg/reactsvg.svg" },
  { id: "10", name: "Redux", img: "/images/svg/redaaxxx.svg" },
  { id: "11", name: "Git", img: "/images/svg/gitfinal.svg" },
  { id: "12", name: "GitHub", img: "/images/svg/github.svg" },
  { id: "13", name: "Figma", img: "/images/skills/blackofigma.png" },
  { id: "14", name: "Firebase", img: "/images/skills/fb-removebg-preview.png" },
  { id: "15", name: "SQL", img: "/images/skills/sql-server.png" },
  { id: "16", name: "MySQL", img: "/images/skills/mysql.png" },
  { id: "17", name: "Django", img: "/images/skills/django.png" },
  { id: "18", name: "React Router", rounded: true, img: "/images/svg/reactsvg.svg" },
];

export const EXPERIENCES = [
  {
    id: 1,
    title: "BSc Software Engineering",
    company: "Koya University",
    period: "Nov 2020 – May 2024",
    meta: "Erbil, Iraq",
    highlights: [
      "Completed a Software Engineering degree with a foundation in programming, web technologies and modern software development practices.",
    ],
    type: "education",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Jiasaz for IT Services & Solutions",
    period: "Jun 2023 – Sep 2023",
    highlights: [
      "First professional role — worked on real client projects with the Jiasaz team, including the ErbilianWay travel site frontend. Strengthened problem-solving, teamwork, and delivery under real-world product constraints.",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Botolon",
    companyUrl: "https://www.botolon.com/",
    period: "Nov 2023 – Apr 2025",
    meta: "Contract, Remote · Erbil, Iraq",
    highlights: [
      "Engineered the web client for a chatbot automation platform serving 50+ business accounts, built with Next.js, Sass and the Meta Graph API.",
      "Implemented a visual conversation-flow builder and analytics dashboard with drag-and-drop state management for multi-step automation sequences.",
      "Established a shared component and layout library standardising forms, tables and modals across the product.",
      "Sustained sub-100ms interaction latency under live message volume via list virtualisation, React memoisation and debounced API polling.",
    ],
    type: "work",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "iZone Iraq",
    companyUrl: "https://www.izoneiraq.com/",
    period: "Apr 2024 – Present",
    meta: "Full-time, On-site · Erbil, Iraq",
    highlights: [
      "Own the TypeScript frontend for a multi-brand commerce platform (iZone, OneStore, Apple Zone, Mantiqa, Strap Iraq) serving 15,000+ monthly users, built with React Router (Remix), server-side loaders and a Tailwind CSS design system shared across all five brands.",
      "Ship English, Arabic and Kurdish with full RTL support and currency-aware catalogue pricing against a Laravel API, so one codebase serves every regional storefront without duplicated UI.",
      "Reduced Largest Contentful Paint on catalogue and product routes from 3.8s to 1.4s with route-level code splitting, below-the-fold lazy loading and product-image preloading.",
      "Built checkout and payments end-to-end: Mapbox address capture, wallet top-up and First Iraqi Bank QR payments with status polling, session recovery and full error-state coverage.",
      "Delivered Digital Cards, IMEI device lookup, live FX rates and community Q&A on the same platform, gated by server-driven feature flags.",
    ],
    type: "work",
  },
];
