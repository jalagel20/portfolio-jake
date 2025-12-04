"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { hoverScale, tapScale } from "@/components/animations/variants";

interface TechBadgeProps {
  name: string;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

const proficiencyLabels = {
  beginner: "Learning",
  intermediate: "Comfortable",
  advanced: "Proficient",
  expert: "Expert",
};

export function TechBadge({ name, proficiency }: TechBadgeProps) {
  const badge = (
    <motion.div
      whileHover={hoverScale}
      whileTap={tapScale}
      className="inline-block"
    >
      <Badge
        variant="secondary"
        className="px-3 py-1.5 text-sm font-medium cursor-default hover:bg-primary/10 transition-colors"
      >
        {name}
      </Badge>
    </motion.div>
  );

  if (proficiency) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{badge}</TooltipTrigger>
          <TooltipContent>
            <p>{proficiencyLabels[proficiency]}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return badge;
}
