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
}

export interface SkillCategory {
    name: string;
    icon: string;
    skills: string[];
}

export interface NavItem {
    label: string;
    href: string;
}
