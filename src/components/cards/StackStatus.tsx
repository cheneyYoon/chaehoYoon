interface StackStatusProps {
    items: { label: string; value: string }[];
}

export default function StackStatus({ items }: StackStatusProps) {
    return (
        <div
            className="rounded-lg border p-4 font-mono text-sm"
            style={{
                backgroundColor: "var(--color-ide-sidebar)",
                borderColor: "var(--color-ide-border)",
            }}
        >
            <div className="mb-3 flex items-center gap-2">
                <span className="pulse-dot h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="text-syntax-green">
                    {"//"} Current Stack Status
                </span>
            </div>
            <div className="space-y-1.5">
                {items.map((item) => (
                    <div key={item.label} className="flex justify-between gap-4">
                        <span className="shrink-0 text-text-muted">{item.label}:</span>
                        <span className="text-right text-syntax-blue">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
