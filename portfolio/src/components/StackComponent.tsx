import type { skillType } from "../types";
import ImageWithSkeleton from "./ImageWithSkeleton";

export default function StackComponent({ skill, type }: { skill: skillType; type: "skill" | "project" }) {
  if (type === "skill") {
    return (
      <div
        className="mac-skill-pill"
        style={{ backgroundColor: `${skill.color}12`, borderColor: `${skill.color}35` }}
      >
        <ImageWithSkeleton
          src={skill.logo_url}
          alt={skill.name}
          containerClassName="h-5 w-5 shrink-0 rounded-md"
          skeletonClassName="rounded-md"
          className="object-contain"
        />
        <span>{skill.name}</span>
      </div>
    );
  }

  return (
    <span
      className="mac-tech-pill"
      style={{ backgroundColor: `${skill.color}10`, borderColor: `${skill.color}28` }}
    >
      {skill.name}
    </span>
  );
}
