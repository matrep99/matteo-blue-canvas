import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-soft border-t border-border py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Matteo Repole
            </h3>
            <p className="text-muted-foreground">
              © {currentYear} {t("footer.rights")}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-sm text-muted-foreground">{t("footer.connect")}</p>
            <div className="flex gap-4">
              <a
                href="mailto:matteo@example.com"
                className="transition-smooth hover:scale-110 hover:text-primary"
                aria-label={t("footer.email")}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-smooth hover:scale-110 hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-smooth hover:scale-110 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
