import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { ProjectCard } from "./ProjectCard";
import typographyImage from "@/assets/project-typography.jpg";
import posterImage from "@/assets/project-poster.jpg";
import cardsImage from "@/assets/project-cards.jpg";

export function PersonalProjects() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageUrls = [typographyImage, posterImage, cardsImage];

  const projects = t("personalProjects.projects", { returnObjects: true }) as Array<{
    title: string;
    category: string;
    description: string;
    image: string;
  }>;

  return (
    <section id="personal-projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            {t("personalProjects.title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("personalProjects.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                imageUrl={imageUrls[index] || ""}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
