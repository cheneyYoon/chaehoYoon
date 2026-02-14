"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import TitleBar from "./TitleBar";
import TabBar from "./TabBar";
import Sidebar from "./Sidebar";
import StatusBar from "./StatusBar";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface IDELayoutProps {
    children: React.ReactNode;
}

const sectionIds = ["readme", "experience", "projects", "skills"];

export default function IDELayout({ children }: IDELayoutProps) {
    const router = useRouter();
    const pathname = usePathname();
    const scrollSpySection = useScrollSpy(sectionIds);

    // If on home page, use scroll spy. If on project page, use pathname slug.
    const activeSection = pathname === "/"
        ? scrollSpySection
        : pathname?.split("/").pop() || "";

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const editorEl = document.getElementById("editor-content");
            if (!editorEl) return;
            const { scrollTop, scrollHeight, clientHeight } = editorEl;
            const percent =
                scrollHeight > clientHeight
                    ? scrollTop / (scrollHeight - clientHeight)
                    : 0;
            setScrollPercent(percent);
        };

        const editorEl = document.getElementById("editor-content");
        editorEl?.addEventListener("scroll", handleScroll, { passive: true });
        return () => editorEl?.removeEventListener("scroll", handleScroll);
    }, []);

    const handleFileClick = useCallback((sectionId: string, path?: string) => {
        if (path) {
            router.push(path);
            if (window.innerWidth < 1024) setSidebarOpen(false); // Close sidebar on mobile nav
            return;
        }

        // If we are not on home page, and trying to scroll to home section
        // We need to navigate to home first with a hash
        // But for now, we assume single page scrolling is primary use case until V3 phases are done
        // Actually, if we are on a project page, and click "readme", we should go to "/" + hash
        // Let's handle that:
        if (window.location.pathname !== "/") {
            router.push(`/#${sectionId}`);
            return;
        }

        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (window.innerWidth < 1024) setSidebarOpen(false);
    }, [router]);

    return (
        <div className="flex h-screen w-full flex-col overflow-hidden lg:p-3">
            {/* IDE Window */}
            <div
                className="flex flex-1 flex-col overflow-hidden rounded-none border shadow-2xl lg:rounded-xl"
                style={{
                    borderColor: "var(--color-ide-border)",
                    backgroundColor: "var(--color-ide-editor)",
                }}
            >
                {/* Title Bar */}
                <TitleBar />

                {/* Mobile hamburger */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="absolute left-3 top-12 z-30 rounded p-1.5 transition-colors hover:bg-ide-hover lg:hidden"
                    style={{ backgroundColor: "var(--color-ide-sidebar)" }}
                    aria-label="Toggle file explorer"
                >
                    <svg
                        className="h-4 w-4 text-text-muted"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M2 3h12v1H2zm0 4h12v1H2zm0 4h12v1H2z" />
                    </svg>
                </button>

                {/* Main area: sidebar + editor */}
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar
                        activeSection={activeSection}
                        onFileClick={handleFileClick}
                        isOpen={sidebarOpen}
                        onClose={() => setSidebarOpen(false)}
                    />

                    {/* Editor panel (tabs + content) */}
                    <div className="flex flex-1 flex-col overflow-hidden">
                        {/* Tab Bar */}
                        <TabBar
                            activeSection={activeSection}
                            onTabClick={handleFileClick}
                        />

                        {/* Editor Content with line numbers gutter */}
                        <div className="flex flex-1 overflow-hidden">
                            {/* Line numbers gutter — decorative */}
                            <div
                                className="hidden w-12 shrink-0 select-none overflow-hidden pt-12 text-right font-mono text-[11px] leading-[20px] text-text-muted/40 lg:block"
                                style={{
                                    backgroundColor: "var(--color-ide-editor)",
                                }}
                                aria-hidden="true"
                            >
                                {Array.from({ length: 50 }, (_, i) => (
                                    <div key={i} className="pr-3">
                                        {i + 1}
                                    </div>
                                ))}
                            </div>

                            {/* Scrollable content */}
                            <main
                                id="editor-content"
                                className="ide-scrollbar flex-1 overflow-y-auto scroll-smooth"
                                style={{ backgroundColor: "var(--color-ide-editor)" }}
                            >
                                <a
                                    href="#readme"
                                    className="absolute left-0 top-0 block -translate-x-full rounded bg-accent px-4 py-3 text-sm font-bold uppercase tracking-widest focus-visible:translate-x-0"
                                    style={{ color: "var(--color-ide-editor)" }}
                                >
                                    Skip to Content
                                </a>
                                {children}
                            </main>
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <StatusBar scrollPercent={scrollPercent} />
            </div>
        </div>
    );
}
