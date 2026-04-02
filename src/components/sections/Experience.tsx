import Timeline from "../Timeline";
import type { TimelineItem } from "../Timeline";
import OAKTREE from "../../assets/oaktree.webp";
import PJG from "../../assetS/dr-pjg.webp";

const experiences: TimelineItem[] = [
  {
    title: "Fullstack Engineer",
    subtitle: "Oaktree Innovations",
    period: "Dec 2024 — Jan 2026",
    icon: OAKTREE,
    description: [
      "Built an E-commerce platform using Go, gRPC, and Protocol Buffers.",
      "Developed Next.js/TypeScript frontend with Zustand state management.",
      "Integrated Clerk for Auth and Stripe for payment processing.",
      "Automated data extraction using Python web scraping and Ollama AI.",
      "Optimized CI/CD and PR reviews using CodeRabbit AI-driven tools.",
      "Managed infrastructure via Docker, AWS, and Datadog monitoring.",
    ],
    skills: [
      "Go",
      "gRPC",
      "Next.js",
      "Clerk",
      "Stripe",
      "Zustand",
      "Python",
      "AWS",
      "Docker",
      "Ollama",
      "CodeRabbit",
      "Datadog",
    ],
    current: true,
    badge: "Recent",
  },
  {
    title: "IT Support & Developer Intern",
    subtitle: "Dr. Paulino J. Garcia Memorial Research & Medical Center",
    period: "Jan 2024 — May 2024",
    icon: PJG,
    description: [
      "Engineered an internal Ticketing System for the IMISS department using React and Node.js.",
      "Streamlined technical request workflows, replacing manual reports with a web-based solution.",
      "Architected the system with MySQL and deployed it over the hospital's local network (LAN).",
      "Designed user-friendly interfaces in Figma to ensure rapid adoption by hospital staff.",
      "Provided on-site technical support and hardware troubleshooting across various departments.",
      "Maintained IT infrastructure stability for mission-critical medical services.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "MySQL",
      "Figma",
      "LAN",
      "IT Support",
      "Troubleshooting",
    ],
  },
];

function Experience() {
  return (
    <>
      <section
        id="experience"
        className="flex flex-col items-center px-8 md:px-24 py-20"
      >
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
            Where I've Been
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            From freelancing to working in a real production environment —
            here's a quick look at my professional journey.
          </p>
        </div>

        <div className="w-full max-w-4xl">
          {" "}
          <Timeline items={experiences} />
        </div>
      </section>
      <div className="w-3/4 mx-auto border-t border-white/10" />
    </>
  );
}

export default Experience;
