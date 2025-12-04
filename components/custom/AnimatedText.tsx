"use client";

import { motion } from "framer-motion";
import { letterContainer, letter } from "@/components/animations/variants";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({ text, className = "", once = true }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={letterContainer}
      className={className}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={letter}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypewriterText({ text, className = "", speed = 50 }: TypewriterTextProps) {
  return (
    <motion.span
      initial={{ width: 0 }}
      whileInView={{ width: "auto" }}
      viewport={{ once: true }}
      transition={{ duration: text.length * (speed / 1000), ease: "linear" }}
      className={`inline-block overflow-hidden whitespace-nowrap ${className}`}
    >
      {text}
    </motion.span>
  );
}
