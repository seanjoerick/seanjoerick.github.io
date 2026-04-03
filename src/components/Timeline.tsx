import { useEffect, useRef, useState } from "react";

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description?: string[];
  skills?: string[];
  current?: boolean;
  badge?: string;
  icon?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

interface TimelineCardProps {
  item: TimelineItem;
  isLeft: boolean;
  index: number;
}

function TimelineCard({ item, isLeft, index }: TimelineCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }, // Binabaan ng konti para mas mabilis mag-trigger sa mobile
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 md:gap-0 pb-12 md:pb-16 last:pb-0 w-full 
        ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Card Container */}
      <div
        className={`w-full md:w-5/12 ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} text-left pl-4 md:pl-0`}
      >
        <div
          className="p-5 flex flex-col gap-2 shadow-xl"
          style={{
            background: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,159,252,0.15)",
            borderRadius: "12px",
            backdropFilter: "blur(21px)",
          }}
        >
          {/* Header Section */}
          <div
            className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-start`}
          >
            <h3 className="text-white font-bold text-base">{item.title}</h3>
            {item.current && (
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase"
                style={{
                  background: "#FF9FFC22",
                  color: "#FF9FFC",
                  border: "1px solid #FF9FFC44",
                }}
              >
                {item.badge ?? "Current"}
              </span>
            )}
          </div>

          <p className="text-[#FF9FFC] text-sm font-medium">{item.subtitle}</p>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
            {item.period}
          </p>

          {/* Description List */}
          {item.description && (
            <ul
              className={`mt-2 flex flex-col gap-1.5 ${isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"} items-start text-left`}
            >
              {item.description.map((desc, j) => (
                <li
                  key={j}
                  className={`text-white/60 text-sm flex gap-2 ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
                >
                  <span style={{ color: "#FF9FFC" }}>—</span>
                  {desc}
                </li>
              ))}
            </ul>
          )}

          {/* Skills Section */}
          {item.skills && item.skills.length > 0 && (
            <div
              className={`mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-start`}
            >
              {item.skills.map((skill, k) => (
                <span
                  key={k}
                  className="px-2 py-1 text-[10px] rounded bg-white/5 text-white/70 border border-white/10 
                             transition-all duration-300 cursor-default
                             hover:bg-[#FF9FFC] hover:text-black hover:border-[#FF9FFC] 
                             hover:shadow-[0_0_15px_rgba(255,159,252,0.4)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center Line Marker (Icon) */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 mt-5">
        <div
          className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center overflow-hidden transition-transform hover:scale-110"
          style={{
            borderColor: "#FF9FFC",
            background: item.current ? "#FF9FFC22" : "black",
            boxShadow: item.current ? "0 0 15px rgba(255,159,252,0.3)" : "none",
          }}
        >
          {item.icon ? (
            <img
              src={item.icon}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full"
              style={{ background: "#FF9FFC" }}
            />
          )}
        </div>
      </div>

      <div className="hidden md:block md:w-5/12" />
    </div>
  );
}

function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative flex flex-col gap-0 w-full py-10 px-4 md:px-0">
      <div
        className="absolute left-3.75 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 90%, transparent)",
        }}
      />
      {items.map((item, i) => (
        <TimelineCard key={i} item={item} isLeft={i % 2 === 0} index={i} />
      ))}
    </div>
  );
}

export default Timeline;
