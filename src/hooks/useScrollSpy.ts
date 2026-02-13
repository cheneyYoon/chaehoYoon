"use client";

import { useState, useEffect } from "react";

/**
 * Observes multiple sections and returns the ID of the one
 * currently most visible in the scroll container.
 * Uses #editor-content as the root if available (IDE layout),
 * otherwise falls back to the viewport.
 */
export function useScrollSpy(
    sectionIds: string[],
    options?: IntersectionObserverInit
) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const root = document.getElementById("editor-content") ?? null;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root,
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
                ...options,
            }
        );

        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, [sectionIds, options]);

    return activeSection;
}
