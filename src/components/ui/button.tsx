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
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            // Primary - Glass consistente
            "glass-button text-theme hover:scale-[1.02]":
              variant === "primary",
            // Secondary - Glass escuro
            "glass-button-dark text-white hover:scale-[1.02]":
              variant === "secondary",
            // Outline - Glass com borda destacada
            "glass-button border-[var(--primary)]/30 text-theme hover:border-[var(--primary)]/60":
              variant === "outline",
            // Ghost - Transparente com hover glass
            "bg-transparent hover:glass-button text-theme":
              variant === "ghost",
            // Glass puro
            "glass-button text-theme":
              variant === "glass",
          },
          {
            "px-5 py-2.5 text-sm": size === "sm",
            "px-7 py-3.5 text-base": size === "md",
            "px-9 py-4 text-lg": size === "lg",
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
