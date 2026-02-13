"use client";

import { FileIconType } from "@/types";

const iconMap: Record<FileIconType, { color: string; label: string }> = {
    typescript: { color: "var(--color-icon-ts)", label: "TS" },
    react: { color: "var(--color-icon-tsx)", label: "⚛" },
    python: { color: "var(--color-icon-py)", label: "PY" },
    json: { color: "var(--color-icon-json)", label: "{}" },
    markdown: { color: "var(--color-icon-md)", label: "M↓" },
    shell: { color: "var(--color-icon-sh)", label: "$_" },
};

interface FileIconProps {
    type: FileIconType;
    className?: string;
}

export default function FileIcon({ type, className = "" }: FileIconProps) {
    const { color, label } = iconMap[type];

    return (
        <span
            className={`inline-flex h-4 w-4 items-center justify-center font-mono text-[9px] font-bold leading-none ${className}`}
            style={{ color }}
            aria-hidden="true"
        >
            {label}
        </span>
    );
}
