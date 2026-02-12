import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "Learnify",
        subtitle: "learnify-bytes.com",
        url: "https://learnify-bytes.com",
        description:
            "AI learning platform serving 550+ daily students across 3 Canadian universities, featuring AI-generated videos and active recall quizzes.",
        highlights: [
            "Architected auto-scaling AWS infrastructure (AppRunner, ALB, EC2, RDS) with Spring Boot backend achieving 99.9% uptime and sub-200ms API response times.",
            "Built and shipped cross-platform mobile apps to App Store and Google Play using React Native, Expo, and Redux.",
        ],
        technologies: [
            "React Native",
            "Spring Boot",
            "AWS",
            "Redux",
            "MySQL",
            "Redis",
        ],
        image: "/images/learnify.webp",
    },
    {
        title: "CourtView",
        subtitle: "Capstone Project",
        description:
            "AI-powered court availability platform for 500+ public courts in the GTA using TensorFlow with 85%+ prediction accuracy.",
        highlights: [
            "Engineered data pipeline with Python and Google Places API, processing real-time data for 500+ court locations; built React Native app with Firebase serverless backend.",
            "Implemented GeoFirestore for efficient location-based queries, optimizing data retrieval for users searching across the GTA.",
        ],
        technologies: [
            "Python",
            "TensorFlow",
            "React Native",
            "Firebase",
            "Google Cloud",
        ],
        image: "/images/courtview.webp",
    },
];
