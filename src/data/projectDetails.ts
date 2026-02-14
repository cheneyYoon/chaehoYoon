import { ProjectDetail } from "@/types";

export const projectDetails: ProjectDetail[] = [
    {
        id: "learnify",
        challenge: "University students often struggle with retaining information from long-format lecture videos and lack effective, personalized active recall tools. Existing solutions required manually creating flashcards, which was time-consuming and inefficient.",
        solution: "Designed and built a mobile-first learning platform that leverages AI to automatically generate short-form summary videos and interactive quizzes directly from course material. Implemented a spaced-repetition algorithm to optimize long-term learning retention.",
        techDeepDive: [
            {
                title: "Scalable Worker Architecture",
                content: "Designed an auto-scaling AWS architecture using AppRunner for the API, separating the heavy AI video processing into worker nodes (EC2/Lambda) to handle generation tasks asynchronously without blocking user requests. Used Redis for caching frequent queries to reduce latency."
            },
            {
                title: "Optimistic UI & Offline Support",
                content: " implemented optimistic UI updates on the mobile app with Redux, ensuring a smooth and responsive user experience even with patchy university Wi-Fi connectivity."
            },
            {
                title: "AI Integration Pipeline",
                content: "Orchestrated a pipeline involving OpenAI for summarization and quiz generation, coupled with FFmpeg for video processing, to transform raw lecture content into bite-sized learning assets."
            }
        ]
    },
    {
        id: "courtview",
        challenge: "Public tennis and basketball courts in the GTA are often overcrowded, and players have no reliable way to check availability beforehand without physically visiting the location, leading to wasted time.",
        solution: "Developed an AI-powered availability predictor application. By leveraging historical Google Places 'busy times' data and real-time user reports, the system predicts crowd levels with over 85% accuracy.",
        techDeepDive: [
            {
                title: "Geospatial Data Engineering",
                content: "Implemented GeoFirestore to efficiently index and query 'courts near me' within a specific radius, handling thousands of coordinate points with sub-100ms query times."
            },
            {
                title: "Predictive Modeling",
                content: "Trained a TensorFlow Lite model on 6 months of historical data, factoring in variables such as weather conditions, time of day, and holidays to generate reliable crowd forecasts."
            },
            {
                title: "Serverless Architecture",
                content: "Built the backend on Firebase Functions to minimize operational overhead and scale automatically with user demand during peak hours."
            }
        ]
    }
];
