interface ShimmerButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function ShimmerButton({
  href,
  onClick,
  children,
  className = "",
  style,
}: ShimmerButtonProps) {
  const baseStyle: React.CSSProperties = {
    border: "1px solid rgba(255,159,252,0.4)",
    borderRadius: "4px",
    ...style,
  };

  const inner = (
    <>
      <span
        className="absolute top-0 left-0 h-full"
        style={{
          width: "30%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,159,252,0.2) 50%, transparent 100%)",
          filter: "blur(4px)",
          animation: "shimmer 2s infinite linear",
        }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`relative overflow-hidden px-8 py-3 text-white text-sm uppercase tracking-widest ${className}`}
        style={baseStyle}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-3 text-white text-sm uppercase tracking-widest ${className}`}
      style={baseStyle}
    >
      {inner}
    </button>
  );
}

export default ShimmerButton;
