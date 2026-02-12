import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
    {
        name: "Languages",
        icon: "💻",
        skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++", "C", "Go"],
    },
    {
        name: "Frontend",
        icon: "🎨",
        skills: ["React", "React Native", "Redux", "Expo", "Zustand", "NativeWind"],
    },
    {
        name: "Backend",
        icon: "⚙️",
        skills: ["Spring Boot", "Node.js", "Express", "JRuby", "MyBatis-Plus"],
    },
    {
        name: "Cloud & DevOps",
        icon: "☁️",
        skills: [
            "AWS (AppRunner, ALB, EC2, RDS, S3, CloudFront)",
            "Firebase",
            "Google Cloud",
            "Docker",
            "Git",
            "Jenkins",
            "TeamCity",
            "CI/CD",
        ],
    },
    {
        name: "Data & Messaging",
        icon: "🗄️",
        skills: [
            "PostgreSQL",
            "MySQL",
            "Redis",
            "Kafka",
            "Firebase Firestore",
            "GeoFirestore",
        ],
    },
    {
        name: "Monitoring & Auth",
        icon: "📊",
        skills: [
            "Datadog",
            "GA4",
            "PostHog",
            "Spring Actuator",
            "JWT",
            "Spring Security",
            "OAuth",
        ],
    },
];
