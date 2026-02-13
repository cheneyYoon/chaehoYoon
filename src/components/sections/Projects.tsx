import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
    return (
        <div className="space-y-6">
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    );
}
