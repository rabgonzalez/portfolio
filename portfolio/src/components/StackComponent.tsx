import type { skillType } from "../types";

export default function StackComponent({ skill, type }: { skill: skillType; type: "skill" | "project" }) {
    return (
        <>
            {type == "skill" && (
                <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-md border px-3 py-2 w-fit"
                    style={{ backgroundColor: skill.color + "20", borderColor: skill.color }}
                >
                    <img src={skill.logo_url} alt={skill.name} className="w-5 h-5" />
                    <span className="text-sm font-medium">{skill.name}</span>
                </div>
            )}
            {
                type == "project" && (
                    <span
                        key={skill.name}
                        style={{ backgroundColor: skill.color + "20", borderColor: skill.color }}
                        className={`text-xs px-2 py-0.5 rounded-xl border`}
                    >
                        {skill.name}
                    </span>
                )
            }
        </>
    )
}