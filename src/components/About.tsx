import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export function About() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            {t("about.title")}
          </h2>
          <div className="gradient-card shadow-soft rounded-2xl p-8 md:p-12">
            <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
              {t("about.description")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
