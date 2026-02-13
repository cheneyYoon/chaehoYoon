"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/**
 * Wrapper that fades children in with a translateY animation
 * when they enter the viewport via IntersectionObserver.
 */
export default function FadeInSection({
    children,
    className = "",
    delay = 0,
}: FadeInSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect reduced motion preference
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.style.opacity = "1";
            el.style.transform = "none";
            return;
        }

        const root = document.getElementById("editor-content") ?? null;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transitionDelay = `${delay}ms`;
                    el.classList.add("is-visible");
                    observer.unobserve(el);
                }
            },
            { root, threshold: 0.1 }
        );

        observer.observe(el);

        return () => {
            observer.unobserve(el);
            observer.disconnect();
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`fade-section ${className}`}
        >
            {children}
        </div>
    );
}
