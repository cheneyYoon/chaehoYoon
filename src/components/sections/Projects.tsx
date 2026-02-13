import { projects } from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
    return (
        <div>
            <ol className="group/list">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </ol>
        </div>
    );
}
