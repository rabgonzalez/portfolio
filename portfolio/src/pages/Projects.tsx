import { useTranslation } from "react-i18next";
import { projects } from "../data/data";
import StackComponent from "../components/StackComponent";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="text-[28px] font-bold">{t("apps.projects")}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {projects.map((p) => (
                    <a
                        key={p.id}
                        href={p.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col rounded-xl overflow-hidden border border-white/15 bg-black/5 backdrop-blur-xl shadow-lg hover:border-white/30 hover:-translate-y-1 transition-all duration-200"
                    >
                        <div className="aspect-video w-full overflow-hidden bg-black/10">
                            {p.imageUrl ? (
                                <img
                                    src={p.imageUrl}
                                    alt={p.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                                    {p.title}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 p-4">
                            <h2 className="text-base font-semibold text-white">{p.title}</h2>
                            <p className="text-sm text-white/70 line-clamp-2">{t(p.description)}</p>

                            <div className="flex flex-wrap gap-1.5 mt-1">
                                {p.tags.map((tag) => (
                                    <StackComponent key={tag.name} skill={tag} type="project" />
                                ))}
                            </div>
                        </div>
                    </a>
                ))
                }
            </div>
        </div >
    );
}