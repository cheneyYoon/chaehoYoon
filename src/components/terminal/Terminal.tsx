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
    icon?: React.ReactNode;
    action: () => void;
}

export default function Terminal() {
    const [lines, setLines] = useState<TerminalLine[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const hasBooted = useRef(false);

    // Initial boot sequence
    useEffect(() => {
        if (hasBooted.current) return;
        hasBooted.current = true;

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

            // 3. actions.sh
            await typeCommand("./actions.sh --suggested");
            await pause(500);

            // 4. Ready for input
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
            label: "Execute Email Draft",
            command: "./send_email.sh",
            icon: (
                <svg className="h-4 w-4 text-syntax-orange transition-opacity opacity-80 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                </svg>
            ),
            action: () => window.location.href = "mailto:chaeho.yoon@outlook.com"
        },
        {
            id: "resume",
            label: "Download Resume.pdf",
            command: "wget resume.pdf",
            icon: (
                <svg className="h-4 w-4 text-syntax-green transition-opacity opacity-80 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                </svg>
            ),
            action: () => window.open("/resume.pdf", "_blank")
        },
        {
            id: "github",
            label: "Open github.lnk",
            command: "open github.lnk",
            icon: (
                <svg className="h-4 w-4 text-syntax-purple transition-opacity opacity-80 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            action: () => window.open("https://github.com/cheneyYoon", "_blank")
        },
        {
            id: "linkedin",
            label: "Open linkedin.lnk",
            command: "open linkedin.lnk",
            icon: (
                <svg className="h-4 w-4 text-syntax-blue transition-opacity opacity-80 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            action: () => window.open("https://linkedin.com/in/chaehoyoon", "_blank")
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
                                    <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                                        {action.icon}
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
