import IDELayout from "@/components/ide/IDELayout";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/projectDetails";
import { notFound } from "next/navigation";
import TechPill from "@/components/ui/TechPill";

// Required for static export
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);
    const details = projectDetails.find((d) => d.id === slug);

    if (!project) {
        notFound();
    }

    return (
        <IDELayout>
            <div className="mx-auto max-w-[85%] px-6 py-12 md:px-12 lg:px-16 xl:max-w-5xl">
                {/* Header */}
                <header className="mb-12 border-b border-ide-border pb-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h1 className="font-heading text-4xl font-bold text-text-bright md:text-5xl">
                                {project.title}
                            </h1>
                            {project.subtitle && (
                                <p className="mt-2 font-mono text-lg text-accent">
                                    {project.subtitle}
                                </p>
                            )}
                        </div>
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="hidden rounded border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/20 sm:block"
                            >
                                View Live ↗
                            </a>
                        )}
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2 list-none">
                        {project.technologies.map((tech) => (
                            <TechPill key={tech} label={tech} />
                        ))}
                    </ul>
                </header>

                {/* Challenge & Solution */}
                {details ? (
                    <div className="space-y-12">
                        <section>
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-text-muted">
                                The Challenge
                            </h2>
                            <p className="text-lg leading-relaxed text-text-primary">
                                {details.challenge}
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-text-muted">
                                The Solution
                            </h2>
                            <p className="text-lg leading-relaxed text-text-primary">
                                {details.solution}
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-text-muted">
                                Technical Deep Dive
                            </h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {details.techDeepDive.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-lg border bg-ide-sidebar p-6"
                                        style={{ borderColor: "var(--color-ide-border)" }}
                                    >
                                        <h3 className="mb-3 font-mono text-sm font-bold text-text-bright">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-text-primary/80">
                                            {item.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                ) : (
                    <p className="text-text-muted">
                        Detailed case study coming soon...
                    </p>
                )}
            </div>
        </IDELayout>
    );
}
