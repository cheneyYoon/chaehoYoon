import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/cards/ExperienceCard";

export default function Experience() {
    return (
        <div>
            {/* Timeline line */}
            <div className="relative">
                <div
                    className="absolute bottom-0 left-[5px] top-0 w-0.5 sm:left-[155px]"
                    style={{ backgroundColor: "var(--color-ide-border)" }}
                    aria-hidden="true"
                />
                {experiences.map((exp, i) => (
                    <ExperienceCard
                        key={exp.company}
                        experience={exp}
                        isLatest={i === 0}
                    />
                ))}
            </div>

            {/* Resume link */}
            <div className="mt-4 pl-8 sm:pl-0 sm:ml-[172px]">
                <a
                    className="group inline-flex items-center gap-1 font-mono text-sm text-accent transition-colors hover:text-text-bright"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="View Full Resume (opens in a new tab)"
                >
                    View Full Resume
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}
