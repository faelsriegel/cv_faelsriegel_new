"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            // Primary - Glass com texto preto/branco
            "bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] text-black dark:text-white hover:bg-white/80 dark:hover:bg-[rgba(49,52,68,0.9)] shadow-lg hover:shadow-xl hover:scale-[1.02]":
              variant === "primary",
            // Secondary - Glass escuro
            "bg-[rgba(49,52,68,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(49,52,68,0.95)] shadow-lg":
              variant === "secondary",
            // Outline - Glass com borda e texto preto/branco
            "bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] text-black dark:text-white hover:bg-white/70 dark:hover:bg-[rgba(49,52,68,0.8)]":
              variant === "outline",
            // Ghost - Transparente
            "bg-transparent hover:bg-[var(--badge-bg)] backdrop-blur-sm text-black dark:text-white":
              variant === "ghost",
            // Glass puro
            "bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] text-black dark:text-white shadow-lg hover:shadow-xl":
              variant === "glass",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
