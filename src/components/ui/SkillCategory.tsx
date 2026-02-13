import { SkillCategory as SkillCategoryType } from "@/types";

interface SkillCategoryProps {
    category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
    const { name, icon, skills } = category;

    return (
        <div className="group rounded-lg border border-border-subtle p-5 transition-all hover:border-accent/30 hover:bg-black-card-hover">
            <div className="mb-3 flex items-center gap-2">
                <span className="text-lg" role="img" aria-hidden="true">
                    {icon}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                    {name}
                </h3>
            </div>
            <ul className="space-y-1.5">
                {skills.map((skill) => (
                    <li
                        key={skill}
                        className="text-sm text-text-secondary transition-colors group-hover:text-text-primary/80"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
