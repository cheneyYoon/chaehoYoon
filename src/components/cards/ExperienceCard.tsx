import { Experience } from "@/types";
import TechPill from "@/components/ui/TechPill";

interface ExperienceCardProps {
    experience: Experience;
    isLatest?: boolean;
}

export default function ExperienceCard({
    experience,
    isLatest = false,
}: ExperienceCardProps) {
    const { title, company, url, range, bullets, technologies } = experience;

    return (
        <div className="relative grid gap-4 pb-12 pl-8 sm:grid-cols-[140px_1fr] sm:gap-6 sm:pl-0">
            {/* Timeline dot */}
            <div
                className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 sm:left-[152px]"
                style={{
                    borderColor: isLatest
                        ? "var(--color-accent)"
                        : "var(--color-text-muted)",
                    backgroundColor: isLatest ? "var(--color-accent)" : "transparent",
                }}
            />

            {/* Date */}
            <div className="font-mono text-xs text-text-muted sm:pt-0.5 sm:text-right">
                {range}
            </div>

            {/* Content */}
            <div>
                <h3 className="text-base font-medium leading-snug text-text-bright">
                    {url ? (
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="transition-colors hover:text-accent focus-visible:text-accent"
                            aria-label={`${title} at ${company} (opens in a new tab)`}
                        >
                            {title}{" "}
                            <span className="text-text-primary">· {company}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-1 inline-block h-3.5 w-3.5 shrink-0 translate-y-px opacity-50 transition-all hover:opacity-100"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    ) : (
                        <span>
                            {title}{" "}
                            <span className="text-text-primary">· {company}</span>
                        </span>
                    )}
                </h3>

                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-primary">
                    {bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                            <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full"
                                style={{ backgroundColor: "var(--color-text-muted)" }}
                            />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>

                <ul className="mt-3 flex flex-wrap" aria-label="Technologies used">
                    {technologies.map((tech) => (
                        <TechPill key={tech} label={tech} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
