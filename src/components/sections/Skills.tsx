import { skills } from "@/data/skills";
import SkillCategory from "@/components/ui/SkillCategory";

export default function Skills() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((category) => (
                <SkillCategory key={category.name} category={category} />
            ))}
        </div>
    );
}
