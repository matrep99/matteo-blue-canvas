import { motion } from "framer-motion";
import { DarkModeToggle } from "./DarkModeToggle";
import { LanguageToggle } from "./LanguageToggle";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          MR
        </a>
        
        <div className="flex gap-2">
          <LanguageToggle />
          <DarkModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
