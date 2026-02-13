import { FolderEntry } from "@/types";

export const fileTree: FolderEntry[] = [
    {
        folder: "PORTFOLIO_SRC",
        files: [
            { name: "README.md", icon: "markdown", sectionId: "readme" },
            { name: "skills.json", icon: "json", sectionId: "skills" },
        ],
    },
    {
        folder: "EXPERIENCE",
        files: [
            { name: "bibliocommons.tsx", icon: "react", sectionId: "experience" },
            { name: "faco.ts", icon: "typescript", sectionId: "experience" },
        ],
    },
    {
        folder: "PROJECTS",
        files: [
            { name: "learnify.ts", icon: "typescript", sectionId: "projects" },
            { name: "court_view.py", icon: "python", sectionId: "projects" },
        ],
    },
    {
        folder: "CONTACT",
        files: [
            { name: "connect.sh", icon: "shell", sectionId: "contact" },
        ],
    },
];
