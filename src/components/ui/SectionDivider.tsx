interface SectionDividerProps {
    title: string;
}

export default function SectionDivider({ title }: SectionDividerProps) {
    return (
        <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-sm text-text-muted" aria-hidden="true">
                ──
            </span>
            <h2 className="shrink-0 font-heading text-lg font-semibold tracking-wide text-text-bright">
                {title}
            </h2>
            <span
                className="flex-1 border-t"
                style={{ borderColor: "var(--color-ide-border)" }}
                aria-hidden="true"
            />
        </div>
    );
}
