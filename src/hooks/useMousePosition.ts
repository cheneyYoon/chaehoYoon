"use client";

import { useState, useEffect } from "react";

interface MousePosition {
    x: number;
    y: number;
}

/**
 * Tracks the mouse position using requestAnimationFrame for smooth updates.
 * No-ops on touch-only devices.
 */
export function useMousePosition(): MousePosition {
    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        // Skip on touch-only devices
        if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
            return;
        }

        let rafId: number;

        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return position;
}
