"use client";

import { useState, useEffect, useRef } from "react";

interface TerminalLine {
    id: string;
    type: "input" | "output";
    content: React.ReactNode;
    isTyping?: boolean;
}

interface Action {
    id: string;
    label: string;
    command: string;
    icon?: string;
    action: () => void;
}

export default function Terminal() {
    const [lines, setLines] = useState<TerminalLine[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Initial boot sequence
    useEffect(() => {
        const boot = async () => {
            setIsTyping(true);

            // 1. Last login
            await addLine({
                type: "output",
                content: <span className="text-text-muted">Last login: {new Date().toDateString()} on ttys001</span>
            });
            await pause(500);

            // 2. whoami
            await typeCommand("whoami");
            await addLine({
                type: "output",
                content: "Chaeho Yoon. Senior Full-Stack Engineer specializing in high-performance distributed systems."
            });
            await pause(500);

            // 3. social_links
            await typeCommand("ls social_links/");
            await addLine({
                type: "output",
                content: (
                    <div className="flex gap-4 text-syntax-blue">
                        <a href="https://github.com/chaehoyoon" target="_blank" rel="noreferrer" className="hover:underline">Reference -&gt; github.lnk</a>
                        <a href="https://linkedin.com/in/chaehoyoon" target="_blank" rel="noreferrer" className="hover:underline">Reference -&gt; linkedin.lnk</a>
                    </div>
                )
            });
            await pause(500);

            // 4. actions.sh
            await typeCommand("./actions.sh --suggested");
            await pause(500);

            // 5. Ready for input
            setIsTyping(false);
        };

        boot();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Scroll to bottom effect
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [lines, isTyping]);

    const addLine = async (line: Omit<TerminalLine, "id">) => {
        setLines(prev => [...prev, { ...line, id: Math.random().toString(36).substr(2, 9) }]);
        await pause(100);
    };

    const typeCommand = async (cmd: string) => {
        const id = Math.random().toString(36).substr(2, 9);
        // Start empty input line
        setLines(prev => [...prev, { id, type: "input", content: "", isTyping: true }]);

        // Simulate typing
        for (let i = 0; i <= cmd.length; i++) {
            setLines(prev => prev.map(l => l.id === id ? { ...l, content: cmd.slice(0, i) } : l));
            await pause(30 + Math.random() * 30);
        }

        // Remove typing cursor from this line
        setLines(prev => prev.map(l => l.id === id ? { ...l, isTyping: false } : l));
        await pause(200);
    };

    const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const handleAction = async (action: Action) => {
        if (isTyping) return;
        setIsTyping(true);
        await typeCommand(action.command);

        // Execute action (e.g. open link) after a short delay
        setTimeout(() => {
            action.action();
            setIsTyping(false);
        }, 500);
    };

    const actions: Action[] = [
        {
            id: "email",
            label: "1. Execute Email Draft",
            command: "./send_email.sh",
            action: () => window.location.href = "mailto:chaeho.yoon@outlook.com"
        },
        {
            id: "resume",
            label: "2. Download Resume.pdf",
            command: "wget resume.pdf",
            action: () => window.open("/resume.pdf", "_blank")
        }
    ];

    return (
        <div className="w-full rounded-lg border bg-[#0d1117] font-mono text-sm shadow-2xl" style={{ borderColor: "var(--color-ide-border)" }}>
            {/* Window Controls */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs text-text-muted">guest@ch-yoon:~</div>
                <div className="w-14" /> {/* Spacer */}
            </div>

            {/* Terminal Content */}
            <div className="h-[400px] overflow-y-auto p-4 font-mono">
                {lines.map((line) => (
                    <div key={line.id} className="mb-2 break-all">
                        {line.type === "input" ? (
                            <div className="flex">
                                <span className="mr-2 shrink-0 text-syntax-green">guest@ch-yoon:~$</span>
                                <span className="text-text-bright">{line.content}</span>
                                {line.isTyping && <span className="ml-[1px] animate-pulse bg-text-bright w-2 h-4 inline-block align-middle" />}
                            </div>
                        ) : (
                            <div className="text-text-primary pl-4 border-l-2 border-transparent hover:border-text-muted/20 transition-colors">
                                {line.content}
                            </div>
                        )}
                    </div>
                ))}

                {/* Example Active prompt when idle */}
                {!isTyping && (
                    <div className="mt-4">
                        <div className="flex items-center mb-2">
                            <span className="mr-2 shrink-0 text-syntax-green">guest@ch-yoon:~$</span>
                            <span className="animate-pulse bg-text-bright w-2 h-4 block" />
                        </div>

                        {/* Action Suggestions */}
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                            {actions.map(action => (
                                <button
                                    key={action.id}
                                    onClick={() => handleAction(action)}
                                    className="group flex items-center justify-between rounded border border-white/10 bg-white/5 px-4 py-3 text-left transition-all hover:bg-white/10 hover:border-syntax-green/50 active:scale-[0.98]"
                                >
                                    <span className="text-text-bright group-hover:text-syntax-green font-bold">
                                        &gt; {action.label}
                                    </span>
                                    <span className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                                        ↵
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>
        </div>
    );
}
