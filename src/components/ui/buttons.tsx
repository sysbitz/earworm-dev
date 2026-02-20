"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const SpotlightButton = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-brand-black",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00D26A_0%,#6C5CE7_50%,#00D26A_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-brand-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-all duration-300 group-hover:bg-brand-black/80">
        {children}
      </span>
    </button>
  );
};

export const ShimmerButton = ({
  children,
  className,
  shimmerColor = "#00D26A",
  shimmerSize = "0.1em",
  shimmerDuration = "2s",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
}) => {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-full bg-brand-green px-6 py-3 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-green/25",
        className
      )}
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
        } as React.CSSProperties
      }
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-[-100%] animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </span>
    </button>
  );
};

export const GlowingButton = ({
  children,
  className,
  glowColor = "rgba(0, 210, 106, 0.5)",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  glowColor?: string;
}) => {
  return (
    <motion.button
      className={cn(
        "relative rounded-full bg-brand-green px-8 py-4 text-black font-semibold",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const BorderMagicButton = ({
  children,
  className,
  duration = 2000,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  duration?: number;
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none",
        className
      )}
      {...props}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00D26A_0%,#6C5CE7_50%,#00D26A_100%)]"
        style={{ animationDuration: `${duration}ms` }}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-brand-black px-6 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};
