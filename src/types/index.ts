export interface Experience {
    id: string;
    title: string;
    company: string;
    url?: string;
    range: string;
    bullets: string[];
    technologies: string[];
}

export interface Project {
    id: string;
    title: string;
    subtitle?: string;
    url?: string;
    description: string;
    highlights: string[];
    technologies: string[];
    image?: string;
    status?: "live" | "building";
}

export interface ProjectDetail {
    id: string;
    challenge: string;
    solution: string;
    techDeepDive: {
        title: string;
        content: string;
    }[];
}

export interface SkillCategory {
    name: string;
    icon: string;
    skills: string[];
}

export type FileIconType =
    | "typescript"
    | "react"
    | "python"
    | "json"
    | "markdown"
    | "shell";

export interface FileEntry {
    name: string;
    icon: FileIconType;
    sectionId: string;
    path?: string; // If present, navigates to new route instead of scrolling
}

export interface FolderEntry {
    folder: string;
    files: FileEntry[];
}
