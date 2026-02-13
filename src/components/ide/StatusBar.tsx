"use client";

interface StatusBarProps {
    scrollPercent?: number;
}

export default function StatusBar({ scrollPercent = 0 }: StatusBarProps) {
    const estimatedLine = Math.max(1, Math.round(scrollPercent * 250));

    return (
        <div
            className="flex h-6 items-center justify-between px-3 font-mono text-[11px] text-white select-none"
            style={{ backgroundColor: "var(--color-ide-statusbar)" }}
        >
            {/* Left section */}
            <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                    <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M14.18 13.91L8.05 1.64a.1.1 0 0 0-.1-.06.08.08 0 0 0-.09.06L1.73 13.91a.1.1 0 0 0 .06.13l6.15 2.32a.14.14 0 0 0 .12 0l6.15-2.32a.1.1 0 0 0 .06-.13zM8 13.53L4.44 5.16 8 3.56l3.56 1.6L8 13.53z" />
                    </svg>
                    main
                </span>
                <span className="hidden sm:inline">📍 Toronto, ON</span>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-3">
                <span className="hidden sm:inline">TypeScript React</span>
                <span className="hidden md:inline">UTF-8</span>
                <span>Ln {estimatedLine}, Col 1</span>
            </div>
        </div>
    );
}
