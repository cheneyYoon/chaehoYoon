"use client";

import { useState, useEffect } from "react";

/**
 * Observes multiple sections and returns the ID of the one
 * currently most visible in the viewport.
 */
export function useScrollSpy(
    sectionIds: string[],
    options?: IntersectionObserverInit
) {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
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
