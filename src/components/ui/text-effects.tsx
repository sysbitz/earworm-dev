"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-display", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block"
          initial={{
            opacity: 0,
            filter: filter ? "blur(10px)" : "none",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration,
            delay: idx * 0.1,
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const renderWords = () => {
    return (
      <div className="inline">
        {words.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.split("").map((char, index) => (
              <motion.span
                key={`char-${index}`}
                className={cn("text-white", word.className)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: (idx * word.text.length + index) * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block h-8 w-[4px] rounded-sm bg-brand-green ml-1",
          cursorClassName
        )}
      />
    </div>
  );
};

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <motion.span
      key={currentWord}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn("inline-block", className)}
    >
      {words[currentWord]}
    </motion.span>
  );
};

export const GradientText = ({
  children,
  className,
  colors = ["#00D26A", "#6C5CE7", "#00D26A"],
  animationSpeed = 8,
}: {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    animation: `gradient ${animationSpeed}s linear infinite`,
  };

  return (
    <span className={cn("inline-block", className)} style={gradientStyle}>
      {children}
    </span>
  );
};

export const HighlightText = ({
  children,
  className,
  highlightColor = "rgba(0, 210, 106, 0.2)",
}: {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
}) => {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        className="absolute inset-0 -skew-x-3"
        style={{ backgroundColor: highlightColor }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <span className="relative">{children}</span>
    </motion.span>
  );
};
