interface StatusBadgeProps {
    variant: "live" | "building";
    label?: string;
}

export default function StatusBadge({ variant, label }: StatusBadgeProps) {
    const isLive = variant === "live";

    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider"
            style={{
                borderColor: isLive
                    ? "rgba(78, 201, 176, 0.3)"
                    : "rgba(220, 220, 170, 0.3)",
                color: isLive ? "var(--color-accent)" : "var(--color-syntax-yellow)",
            }}
        >
            <span
                className="pulse-dot h-1.5 w-1.5 rounded-full"
                style={{
                    backgroundColor: isLive
                        ? "var(--color-accent)"
                        : "var(--color-syntax-yellow)",
                }}
            />
            {label ?? (isLive ? "Live" : "Building")}
        </span>
    );
}
