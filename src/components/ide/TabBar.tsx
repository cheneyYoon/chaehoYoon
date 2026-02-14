"use client";

import FileIcon from "@/components/ui/FileIcon";
import { fileTree } from "@/data/fileTree";
import { FileEntry } from "@/types";

interface TabBarProps {
    activeSection: string;
    onTabClick: (sectionId: string, path?: string) => void;
}

// Flatten file tree into a list of all files for tabs
const allFiles: FileEntry[] = fileTree.flatMap((folder) => folder.files);

export default function TabBar({ activeSection, onTabClick }: TabBarProps) {
    return (
        <div
            className="ide-scrollbar hidden h-[35px] shrink-0 overflow-x-auto border-b sm:flex"
            style={{
                backgroundColor: "var(--color-ide-inactive-tab)",
                borderColor: "var(--color-ide-border)",
            }}
            role="tablist"
            aria-label="Open files"
        >
            {allFiles.map((file) => {
                const isActive = activeSection === file.sectionId;
                return (
                    <button
                        key={file.name}
                        onClick={() => onTabClick(file.sectionId, file.path)}
                        role="tab"
                        aria-selected={isActive}
                        className={`group flex shrink-0 items-center gap-1.5 border-r px-3 font-mono text-[12px] transition-colors ${isActive
                            ? "text-text-bright"
                            : "text-text-muted hover:text-text-sidebar"
                            }`}
                        style={{
                            backgroundColor: isActive
                                ? "var(--color-ide-active-tab)"
                                : "transparent",
                            borderColor: "var(--color-ide-border)",
                            borderTop: isActive
                                ? "1px solid var(--color-accent)"
                                : "1px solid transparent",
                        }}
                    >
                        <FileIcon type={file.icon} />
                        <span>{file.name}</span>
                    </button>
                );
            })}
        </div>
    );
}
