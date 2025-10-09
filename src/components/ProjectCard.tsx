import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export function ProjectCard({ title, category, description, imageUrl }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="flip-card h-80 md:h-96 cursor-pointer"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flip-card-inner shadow-soft hover:shadow-hover transition-smooth">
        {/* Front */}
        <div className="flip-card-front gradient-card overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-2/3 object-cover"
          />
          <div className="p-6">
            <p className="text-sm font-medium text-primary mb-2">{category}</p>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
          </div>
        </div>
        
        {/* Back */}
        <div className="flip-card-back gradient-primary p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">{title}</h3>
          <p className="text-primary-foreground/90 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
