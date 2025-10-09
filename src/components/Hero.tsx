import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  const scrollToWork = () => {
    document.getElementById("latest-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-soft px-4 py-20">
      <div className="container max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-in">
            {t("hero.greeting")}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent animate-fade-in">
            {t("hero.title")}
          </h1>
          <p className="text-2xl md:text-3xl font-light text-foreground/80 mb-6 animate-fade-in">
            {t("hero.subtitle")}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            {t("hero.description")}
          </p>
          <Button
            onClick={scrollToWork}
            size="lg"
            className="gradient-primary shadow-medium hover:shadow-hover transition-smooth group"
          >
            {t("hero.cta")}
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-smooth" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
