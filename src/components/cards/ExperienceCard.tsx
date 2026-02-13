import { Experience } from "@/types";
import TechPill from "@/components/ui/TechPill";

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const { title, company, url, range, bullets, technologies } = experience;

    const content = (
        <>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted sm:col-span-2">
                {range}
            </header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-text-primary">
                    <div>
                        {url ? (
                            <a
                                className="group/link inline-flex items-baseline text-base font-medium leading-tight text-text-primary hover:text-accent focus-visible:text-accent"
                                href={url}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${title} at ${company} (opens in a new tab)`}
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                <span>
                                    {title} ·{" "}
                                    <span className="inline-block">
                                        {company}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        ) : (
                            <span>
                                {title} · {company}
                            </span>
                        )}
                    </div>
                </h3>
                <ul className="mt-2 space-y-2 text-sm leading-normal">
                    {bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {technologies.map((tech) => (
                        <TechPill key={tech} label={tech} />
                    ))}
                </ul>
            </div>
        </>
    );

    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-black-card-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                {content}
            </div>
        </li>
    );
}
