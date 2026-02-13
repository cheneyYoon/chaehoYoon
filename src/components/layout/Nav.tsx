"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
    { label: "About", href: "about" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Technical DNA", href: "skills" },
];

export default function Nav() {
    const activeSection = useScrollSpy(navItems.map((item) => item.href));

    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                {navItems.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                        <li key={item.href}>
                            <a
                                className={`nav-link group flex items-center py-3 ${isActive ? "active" : ""
                                    }`}
                                href={`#${item.href}`}
                            >
                                <span
                                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-text-primary motion-reduce:transition-none ${isActive
                                            ? "w-16 bg-text-primary"
                                            : "w-8 bg-text-muted"
                                        }`}
                                />
                                <span
                                    className={`nav-label text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-text-primary motion-reduce:transition-none ${isActive ? "text-text-primary" : "text-text-muted"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
