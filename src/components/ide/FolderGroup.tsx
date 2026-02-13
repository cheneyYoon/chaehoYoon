"use client";

import { useState } from "react";
import FileItem from "./FileItem";
import { FolderEntry } from "@/types";

interface FolderGroupProps {
    folder: FolderEntry;
    activeSection: string;
    onFileClick: (sectionId: string) => void;
}

export default function FolderGroup({
    folder,
    activeSection,
    onFileClick,
}: FolderGroupProps) {
    const hasActiveChild = folder.files.some(
        (f) => f.sectionId === activeSection
    );

    const [isManuallyCollapsed, setIsManuallyCollapsed] = useState(false);

    // Always show folder contents if it has the active child,
    // regardless of manual collapse state
    const isOpen = hasActiveChild || !isManuallyCollapsed;

    const handleToggle = () => {
        setIsManuallyCollapsed((prev) => !prev);
    };

    return (
        <div className="mb-1" role="treeitem" aria-expanded={isOpen} aria-selected="false">
            <button
                onClick={handleToggle}
                className={`flex w-full items-center gap-1 px-2 py-[3px] font-mono text-[11px] font-semibold uppercase tracking-wide transition-colors hover:text-text-bright ${hasActiveChild ? "text-text-bright" : "text-text-folder"
                    }`}
                aria-expanded={isOpen}
            >
                <svg
                    className={`h-3 w-3 shrink-0 transition-transform duration-150 ${isOpen ? "rotate-90" : ""}`}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M6 4l4 4-4 4" />
                </svg>
                {folder.folder}
            </button>

            {/* Animated collapse */}
            <div
                className="ml-1 overflow-hidden transition-all duration-200 ease-in-out"
                role="group"
                style={{
                    maxHeight: isOpen ? `${(folder.files.length + 1) * 28}px` : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                {folder.files.map((file) => (
                    <FileItem
                        key={file.name}
                        file={file}
                        isActive={activeSection === file.sectionId}
                        onClick={onFileClick}
                    />
                ))}
            </div>
        </div>
    );
}
