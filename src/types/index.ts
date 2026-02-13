export interface Experience {
    title: string;
    company: string;
    url?: string;
    range: string;
    bullets: string[];
    technologies: string[];
}

export interface Project {
    title: string;
    subtitle?: string;
    url?: string;
    description: string;
    highlights: string[];
    technologies: string[];
    image?: string;
    status?: "live" | "building";
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
}

export interface FolderEntry {
    folder: string;
    files: FileEntry[];
}
