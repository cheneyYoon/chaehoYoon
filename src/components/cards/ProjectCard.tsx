import Image from "next/image";
import { Project } from "@/types";
import TechPill from "@/components/ui/TechPill";
import StatusBadge from "@/components/ui/StatusBadge";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const {
        id,
        title,
        subtitle,
        url,
        description,
        highlights,
        technologies,
        image,
        status,
    } = project;

    return (
        <div
            id={id}
            className="group rounded-lg border p-5 transition-all hover:border-accent/20 scroll-mt-24"
            style={{
                backgroundColor: "var(--color-ide-sidebar)",
                borderColor: "var(--color-ide-border)",
            }}
        >
            <div className="flex flex-col gap-4 sm:flex-row">
                {/* Thumbnail */}
                {image && (
                    <div className="shrink-0 sm:w-40">
                        <Image
                            alt={`Screenshot of ${title}`}
                            loading="lazy"
                            width={200}
                            height={120}
                            className="w-full rounded border transition-all group-hover:border-accent/30"
                            style={{ borderColor: "var(--color-ide-border)" }}
                            src={image}
                        />
                    </div>
                )}

                {/* Content */}
                <div className="flex-1">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-medium text-text-bright">
                            {url ? (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="transition-colors hover:text-accent focus-visible:text-accent"
                                    aria-label={`${title} (opens in a new tab)`}
                                >
                                    {title}
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
                                title
                            )}
                        </h3>
                        {status && <StatusBadge variant={status} />}
                    </div>

                    {subtitle && (
                        <p className="mt-0.5 font-mono text-xs text-text-muted">
                            {subtitle}
                        </p>
                    )}

                    <p className="mt-2 text-sm leading-relaxed text-text-primary">
                        {description}
                    </p>

                    {highlights.length > 0 && (
                        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-text-primary">
                            {highlights.map((highlight, i) => (
                                <li key={i} className="flex gap-2">
                                    <span
                                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                                        style={{ backgroundColor: "var(--color-text-muted)" }}
                                    />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <ul className="mt-3 flex flex-wrap list-none" aria-label="Technologies used">
                        {technologies.map((tech) => (
                            <TechPill key={tech} label={tech} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
