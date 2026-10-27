import { useTranslation } from "react-i18next";
import { useTypewriter } from "../hooks/useTypewriter";
import { skills } from "../data/data";
import StackComponent from "../components/StackComponent";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import profileImage from "../assets/profile.png";

export default function Profile() {
  const { t } = useTranslation();
  const titles = useTypewriter({
    words: t("pages.profile.titles", { returnObjects: true }) as string[],
  });

  return (
    <section className="mac-page">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <span className="mac-eyebrow">Portfolio</span>
          <h1 className="mt-1 text-[30px] font-semibold tracking-[-0.04em] text-black/90 dark:text-white sm:text-[38px]">
            {t("pages.profile.title")}
          </h1>

          <div className="mac-terminal mt-5">
            <span className="mac-terminal-prompt">$</span>
            <span>{titles}</span>
            <span className="typewriter-cursor">▌</span>
          </div>

          <p className="mt-5 max-w-2xl text-[14px] leading-[1.75] text-black/60 dark:text-white/60 sm:text-[15px]">
            {t("pages.profile.description")}
          </p>
        </div>

        <ImageWithSkeleton
          src={profileImage}
          alt="Profile"
          containerClassName="mac-profile-image"
          skeletonClassName="rounded-full"
          className="rounded-full object-cover"
        />
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <span className="mac-eyebrow">Toolkit</span>
            <h2 className="mt-1 text-lg font-semibold tracking-tight text-black/85 dark:text-white/90">
              {t("pages.profile.techStack")}
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.values(skills).map((skill) => (
            <StackComponent key={skill.name} skill={skill} type="skill" />
          ))}
        </div>
      </div>
    </section>
  );
}
