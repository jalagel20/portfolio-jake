import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  fullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}
    >
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
