import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/cards/ExperienceCard";

export default function Experience() {
    return (
        <div>
            <ol className="group/list">
                {experiences.map((exp) => (
                    <ExperienceCard key={exp.company} experience={exp} />
                ))}
            </ol>
            <div className="mt-12">
                <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-text-primary hover:text-accent focus-visible:text-accent"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Résumé (opens in a new tab)"
                >
                    <span className="inline-block">
                        View Full Résumé
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
                </a>
            </div>
        </div>
    );
}
