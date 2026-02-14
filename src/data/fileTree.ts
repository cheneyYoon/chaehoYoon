import { FolderEntry } from "@/types";

export const fileTree: FolderEntry[] = [
    {
        folder: "PORTFOLIO_MAIN",
        files: [
            { name: "README.md", icon: "markdown", sectionId: "readme" },
            { name: "bibliocommons.tsx", icon: "react", sectionId: "bibliocommons" },
            { name: "faco.ts", icon: "typescript", sectionId: "faco" },
            { name: "skills.json", icon: "json", sectionId: "skills" },
        ],
    },
    {
        folder: "PROJECTS",
        files: [
            {
                name: "learnify.ts",
                icon: "typescript",
                sectionId: "learnify",
                path: "/projects/learnify",
            },
            {
                name: "court_view.py",
                icon: "python",
                sectionId: "courtview",
                path: "/projects/courtview",
            },
        ],
    },
    {
        folder: "CONTACT",
        files: [
            { name: "connect.sh", icon: "shell", sectionId: "contact", path: "/contact" },
        ],
    },
];
