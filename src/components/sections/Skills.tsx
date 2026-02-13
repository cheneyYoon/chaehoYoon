import { skills } from "@/data/skills";

export default function Skills() {
    return (
        <div
            className="rounded-lg border p-5 font-mono text-sm"
            style={{
                backgroundColor: "var(--color-ide-sidebar)",
                borderColor: "var(--color-ide-border)",
            }}
        >
            {/* Opening brace */}
            <p className="text-text-primary">{"{"}</p>

            {skills.map((category, i) => (
                <div key={category.name} className="mt-2 pl-4">
                    {/* Key */}
                    <p>
                        <span className="text-syntax-blue">
                            &quot;{category.name.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_")}&quot;
                        </span>
                        <span className="text-text-primary">: [</span>
                    </p>
                    {/* Values */}
                    <div className="pl-4">
                        {category.skills.map((skill, j) => (
                            <span key={skill}>
                                <span className="text-syntax-orange">&quot;{skill}&quot;</span>
                                {j < category.skills.length - 1 && (
                                    <span className="text-text-primary">, </span>
                                )}
                            </span>
                        ))}
                    </div>
                    <p>
                        <span className="text-text-primary">
                            ]{i < skills.length - 1 ? "," : ""}
                        </span>
                    </p>
                </div>
            ))}

            {/* Closing brace */}
            <p className="mt-2 text-text-primary">{"}"}</p>
        </div>
    );
}
