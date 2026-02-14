import { Experience } from "@/types";

export const experiences: Experience[] = [
    {
        id: "bibliocommons",
        title: "Junior Fullstack Engineer I",
        company: "BiblioCommons, a Volaris Group Company",
        url: "https://www.bibliocommons.com",
        range: "May 2024 — Aug 2025",
        bullets: [
            "Shipped 10+ production features for a 20M+ user library platform, including system-wide messaging UI and Browse & Discover page using React/JavaScript and JRuby.",
            "Reduced legacy codebase by 30% by architecting migration of shared components into the primary application, eliminating cross-repository dependencies and improving developer velocity.",
            "Expanded GA4 analytics coverage by 25% by instrumenting event tracking across frontend and backend, enabling data-driven decisions on user engagement and content visibility.",
            "Deployed 10+ releases to 200+ libraries via TeamCity CI/CD with zero downtime; proactively identified performance issues using Datadog monitoring.",
        ],
        technologies: [
            "React",
            "JavaScript",
            "JRuby",
            "GA4",
            "TeamCity",
            "Datadog",
        ],
    },
    {
        id: "faco",
        title: "Software Developer Intern",
        company: "FACO",
        range: "Jun 2023 — Aug 2023",
        bullets: [
            "Built an internal dashboard using React, TypeScript, and Node.js/Express to streamline employee task tracking, reducing manual reporting time by 40%.",
            "Designed and implemented 5 RESTful APIs with PostgreSQL integration for user authentication and resource management, supporting 50+ internal users and powering real-time dashboard functionality.",
            "Deployed application on AWS EC2 with Docker containerization, ensuring 99%+ uptime for internal operations.",
        ],
        technologies: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "AWS EC2",
            "Docker",
        ],
    },
];
