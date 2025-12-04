"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, fadeInLeft, fadeInRight } from "./variants";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: FadeInProps) {
  const variants = {
    up: fadeInUp,
    left: fadeInLeft,
    right: fadeInRight,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={variants[direction]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
