import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex h-10 w-20 items-center rounded-full bg-muted transition-all duration-300 hover:shadow-soft"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 shadow-md ${
          theme === "dark" ? "translate-x-10" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </span>
      <Sun className={`absolute left-3 h-4 w-4 transition-opacity duration-300 ${theme === "dark" ? "opacity-40" : "opacity-0"}`} />
      <Moon className={`absolute right-3 h-4 w-4 transition-opacity duration-300 ${theme === "dark" ? "opacity-0" : "opacity-40"}`} />
    </button>
  );
}
