import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const isItalian = i18n.language === "it";

  return (
    <button
      onClick={() => i18n.changeLanguage(isItalian ? "en" : "it")}
      className="relative inline-flex h-10 w-20 items-center rounded-full bg-muted transition-all duration-300 hover:shadow-soft"
      aria-label="Change language"
    >
      <span
        className={`absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 shadow-md text-xs font-bold ${
          isItalian ? "translate-x-10" : "translate-x-0"
        }`}
      >
        {isItalian ? "IT" : "EN"}
      </span>
      <span className={`absolute left-3 text-xs font-medium transition-opacity duration-300 ${isItalian ? "opacity-40" : "opacity-0"}`}>
        EN
      </span>
      <span className={`absolute right-3 text-xs font-medium transition-opacity duration-300 ${isItalian ? "opacity-0" : "opacity-40"}`}>
        IT
      </span>
    </button>
  );
}
