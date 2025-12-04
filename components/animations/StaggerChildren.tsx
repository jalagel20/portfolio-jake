"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, staggerItem } from "./variants";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className = "",
  once = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
