import React from "react";

interface GlassIconButtonProps {
  isOpen?: boolean;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  iconSize?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  h: number;
  w: number;
}

const GlassIconButton: React.FC<GlassIconButtonProps> = ({
  isOpen,
  openIcon,
  closeIcon,
  onClick,
  className = "",
  h,
  w,
  iconSize,
}) => {
  const isToggle = typeof isOpen === "boolean" && openIcon && closeIcon;

  /* Active → White */
  const activeStyle: React.CSSProperties = {
    background: "#ffffff",
    color: "#000",
    border: "1px solid rgba(255,255,255,0.9)",
    boxShadow: "none",
    backdropFilter: "none",
    rotate: "-35deg",
  };

  /* Glass */
  const glassStyle: React.CSSProperties = {
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",

    borderTop: "1px solid rgba(255,255,255,0.5)",
    borderLeft: "1px solid rgba(255,255,255,0.15)",
    borderBottom: "1px solid rgba(255,255,255,0.5)",
    borderRight: "1px solid rgba(255,255,255,0.15)",
    rotate: "-35deg",
    boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.9)",
  };

  let content: React.ReactNode;

  if (isToggle) {
    content = isOpen ? openIcon : closeIcon;
  } else {
    content = closeIcon ?? openIcon;
  }

  return (
    <button
      onClick={onClick}
      style={{
        ...(isToggle && isOpen ? activeStyle : glassStyle),

        // Only apply custom size on large screens
        ...(typeof window !== "undefined" &&
          window.innerWidth >= 1024 && {
            height: `${h}px`,
            width: `${w}px`,
          }),
      }}
      className={`
    h-10 w-10       
    lg:h-auto lg:w-auto
    rounded-full
    flex items-center justify-center
    transition-all duration-300
    cursor-pointer
    select-none
    ${className}
  `}
    >
      <span
        style={{
          rotate: "35deg",
          width: iconSize ? `${iconSize}px` : undefined,
          height: iconSize ? `${iconSize}px` : undefined,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {content}
      </span>
    </button>
  );
};

export default GlassIconButton;
