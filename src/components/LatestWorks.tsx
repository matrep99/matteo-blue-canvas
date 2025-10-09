import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { ProjectCard } from "./ProjectCard";
import brandingImage from "@/assets/project-branding.jpg";
import websiteImage from "@/assets/project-website.jpg";
import marketingImage from "@/assets/project-marketing.jpg";

export function LatestWorks() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageUrls = [brandingImage, websiteImage, marketingImage];

  const projects = t("latestWorks.projects", { returnObjects: true }) as Array<{
    title: string;
    category: string;
    description: string;
    image: string;
  }>;

  return (
    <section id="latest-works" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            {t("latestWorks.title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("latestWorks.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
