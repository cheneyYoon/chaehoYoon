"use client";

import FileIcon from "@/components/ui/FileIcon";
import { FileEntry } from "@/types";

interface FileItemProps {
    file: FileEntry;
    isActive: boolean;
    onClick: (sectionId: string) => void;
}

export default function FileItem({ file, isActive, onClick }: FileItemProps) {
    return (
        <button
            onClick={() => onClick(file.sectionId)}
            role="treeitem"
            className={`relative flex w-full items-center gap-2 rounded-sm px-4 py-[3px] text-left font-mono text-[13px] transition-all ${isActive
                ? "bg-ide-active text-text-bright"
                : "text-text-sidebar hover:bg-ide-hover"
                }`}
            aria-selected={isActive}
            aria-current={isActive ? "true" : undefined}
        >
            {/* Active accent bar */}
            {isActive && (
                <span
                    className="absolute left-0 top-0 h-full w-0.5 rounded-r"
                    style={{ backgroundColor: "var(--color-accent)" }}
                />
            )}
            <FileIcon type={file.icon} />
            <span className="truncate">{file.name}</span>
        </button>
    );
}
