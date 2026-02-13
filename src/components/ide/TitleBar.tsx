"use client";

export default function TitleBar() {
    return (
        <div
            className="flex h-9 items-center justify-between border-b px-4 select-none"
            style={{
                backgroundColor: "var(--color-ide-titlebar)",
                borderColor: "var(--color-ide-border)",
            }}
        >
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
                <div className="group flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_0_rgba(255,95,87,0)] transition-shadow duration-200 group-hover:shadow-[0_0_6px_1px_rgba(255,95,87,0.5)]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-[0_0_0_0_rgba(254,188,46,0)] transition-shadow duration-200 group-hover:shadow-[0_0_6px_1px_rgba(254,188,46,0.5)]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_0_0_rgba(40,200,64,0)] transition-shadow duration-200 group-hover:shadow-[0_0_6px_1px_rgba(40,200,64,0.5)]" />
                </div>
            </div>

            {/* File path */}
            <span className="hidden font-mono text-xs text-text-muted sm:block">
                ~/ch-yoon/full-stack-engineer
            </span>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200 hover:brightness-110"
                    style={{
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-ide-editor)",
                    }}
                >
                    Download CV
                </a>
            </div>
        </div>
    );
}
