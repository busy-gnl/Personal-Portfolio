import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/ProjectCard";

export default function Work() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Trinded",
      description: "This is a project",
      image: "trinded-logo.png",
      link: "/project/trinded",
    },
    {
      title: "Space Station Chronicles",
      description: "This is a project",
      image: "space-station-chronicles.png",
      link: "/project/space-station-chronicles",
    },
    {
      title: "Serenity",
      description: "This is a project",
      image: "https://picsum.photos/400/500",
      link: "/project/serenity",
    },
  ];

  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-16">{t("work-h1")}</h1>
      <section className="flex flex-col gap-16 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 md:flex-row w-[90%] md:w-3/4 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </>
  );
}
