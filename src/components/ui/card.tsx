"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
  glass?: boolean;
}

export function Card({ className, hover = true, glass = true, children, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6",
        glass 
          ? "glass-card" 
          : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm",
        hover && !glass && "transition-all duration-300 hover:shadow-lg hover:border-blue-500/50 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
