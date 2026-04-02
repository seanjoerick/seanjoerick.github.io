import type { MouseEventHandler, ReactNode } from "react";

interface GlowTextProps {
  children: ReactNode;
  className?: string;
  href?: string;
  glowColor?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
}

export default function GlowText({
  children,
  className = "",
  href,
  glowColor = "#FF9FFC",
  onClick,
}: GlowTextProps) {
  const glowStyle = {
    "--glow-color": glowColor,
  } as React.CSSProperties;

  const baseClasses = `
    inline-block transition-all duration-300 select-none cursor-pointer
    text-white
    hover:text-[var(--glow-color)]
    hover:[text-shadow:0_0_12px_var(--glow-color),0_0_25px_var(--glow-color),0_0_50px_rgba(255,159,252,0.6)]
    hover:translate-y-[3px] 
    active:translate-y-[5px] active:scale-90
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={glowStyle}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <span className={baseClasses} style={glowStyle} onClick={onClick}>
      {children}
    </span>
  );
}
