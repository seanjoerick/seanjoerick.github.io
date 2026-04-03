import { useState } from "react";
import MACCVBUILDER from "../../assets/macCVbuilder.webp";
import MEMOIR from "../../assets/memoirBooth.webp";

const projects = [
  {
    id: 1,
    num: "01",
    tag: "Full Stack",
    title: "Mac-CV Builder",
    description:
      "A clean, modern multi-step resume builder where you can fill out your resume step-by-step and preview your CV in real-time.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Zod",
      "OpenRouter AI",
      "Vercel Functions",
    ],
    link: "https://mac-cv-builder.vercel.app/",
    image: MACCVBUILDER,
    demo: null,
  },
  {
    id: 2,
    num: "02",
    tag: "Frontend",
    title: "Memoir Booth",
    description:
      "A cute pastel-themed photobooth app where you can snap photos, add filters, decorate with stickers, and print adorable photo strips.",
    stack: ["React", "Vite", "Pure CSS", "html2canvas", "Cloudflare Pages"],
    link: "https://memoir-booth.pages.dev/",
    image: MEMOIR,
    demo: null,
  },
  {
    id: 3,
    num: "03",
    tag: "Capstone",
    title: "Event Evaluation System",
    description:
      "A full-stack event management system built for a student client in 2024, designed to handle event evaluations, analytics, and notifications for students and admins.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "JWT",
      "WebSocket",
      "Nodemailer",
    ],
    link: "https://github.com/seanjoerick/mysql-ern-capstone-event-evaluation-sytem",
    image: "https://img.youtube.com/vi/SelO_Qmc85E/maxresdefault.jpg",
    demo: "https://youtu.be/SelO_Qmc85E",
  },
  {
    id: 4,
    num: "04",
    tag: "Fullstack Exam",
    title: "React Flask CRUD",
    description:
      "A full-stack web app for a fullstack dev exam in 2024, featuring user authentication and CRUD operations.",
    stack: ["React", "Flask", "SQLite", "SQLAlchemy", "Material UI", "Python"],
    link: "https://github.com/seanjoerick/react-flask-crud-with-authentication",
    image: "https://img.youtube.com/vi/PzR-T5CEejo/maxresdefault.jpg",
    demo: "https://youtu.be/PzR-T5CEejo",
  },
  {
    id: 5,
    num: "05",
    tag: "Client Project",
    title: "Logistics Inventory System",
    description:
      "A full-stack logistics and inventory management system with real-time notifications, built for a student client in 2024.",
    stack: [
      "React",
      "Flask",
      "PostgreSQL",
      "SQLAlchemy",
      "Tailwind CSS",
      "Python",
    ],
    link: "https://github.com/seanjoerick/react-flask-postgre-logistics-inventory-system",
    image: null,
    demo: null,
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);

  const go = (index: number) => setCurrent(index);
  const prev = () => go((current - 1 + projects.length) % projects.length);
  const next = () => go((current + 1) % projects.length);

  const project = projects[current];

  return (
    <>
      <section id="projects" className="flex flex-col items-center py-16">
        {/* Header */}
        <div className="mb-16 px-8 text-center md:px-24">
          <h2 className="mb-6 text-base font-bold uppercase tracking-widest text-white md:text-lg">
            Projects
          </h2>
          <div className="mb-4 flex flex-wrap justify-center gap-4">
            <h1 className="text-4xl uppercase tracking-wide text-white md:text-5xl">
              My
            </h1>
            <h1 className="text-4xl uppercase tracking-wide text-[#FF9FFC] md:text-5xl">
              Work
            </h1>
          </div>
          <p className="mx-auto max-w-xl text-xs text-white/60 md:text-sm">
            A collection of projects showcasing my work and experience.
          </p>
        </div>

        {/* Slideshow */}
        <div className="w-full max-w-5xl px-6 md:px-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/3">
            {/* Slide content */}
            <div className="flex min-h-105 flex-col md:flex-row">
              {/* Left — info panel */}
              <div className="flex flex-1 flex-col justify-between p-8 md:p-12">
                <div>
                  {/* Counter + tag */}
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-mono text-xs tracking-widest text-white/20">
                      {project.num} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-[#FF9FFC]/10 px-3 py-1 text-[11px] font-medium text-[#FF9FFC]">
                      {project.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-sm text-sm leading-relaxed text-white/50">
                    {project.description}
                  </p>
                </div>

                {/* Bottom — stack + links */}
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                    >
                      {tech}
                    </span>
                  ))}

                  <div className="ml-auto flex items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70"
                      >
                        ▶ Demo
                      </a>
                    )}

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex
                    items-center gap-1.5 text-xs text-[#FF9FFC]/70
                    transition-colors hover:text-[#FF9FFC]"
                    >
                      {project.link.includes("github")
                        ? "View on GitHub"
                        : "Visit project"}
                      <span className="text-base">↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — project preview image */}
              <div className="relative h-100 w-full overflow-hidden border-t border-white/5 md:w-80 md:border-l md:border-t-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100"
                  />
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#FF9FFC]/3 transition-colors hover:bg-[#FF9FFC]/6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-white/20"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className="text-xs text-white/20">
                      View on GitHub
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Navigation bar */}
            <div className="flex items-center justify-between border-t border-white/5 px-8 py-4">
              {/* Dot indicators */}
              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-[#FF9FFC]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-[#FF9FFC]/40 hover:text-[#FF9FFC]"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-[#FF9FFC]/40 hover:text-[#FF9FFC]"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-3/4 border-t border-white/10" />
    </>
  );
}

export default Projects;
