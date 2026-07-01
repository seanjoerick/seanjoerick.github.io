import { FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { projects, type Project } from "../../lib/projects";

// ── Helpers ────────────────────────────────────────────────────────────────
function getInitials(title: string): string {
  return title
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

// ── ProjectPreview ─────────────────────────────────────────────────────────

interface ProjectPreviewProps {
  project: Project;
}

function ProjectPreview({ project }: ProjectPreviewProps) {
  const isLive = !project.link.includes("github");

  return (
    <div className="relative flex-1 group">
      {project.image ? (
        /* ── Browser Mockup Frame (projects with screenshots) ── */
        <div className="w-full overflow-hidden rounded-xl border border-white/10 shadow-lg">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 bg-[#1a1a2e] px-3 py-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex flex-1 items-center gap-1.5 bg-[#0d0d1a] rounded px-2 py-1">
              <svg
                className="w-2.5 h-2.5 text-white/30 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-[10px] text-white/30 truncate">
                {project.link.replace("https://", "")}
              </span>
            </div>
          </div>

          {/* Image + hover overlay */}
          <div className="relative h-48 sm:h-56 md:h-64 bg-black/40 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-white/50 tracking-widest uppercase">
                {project.title}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#FF9FFC] text-[#1a0020] text-xs font-medium px-4 py-2 rounded-lg hover:bg-white transition-colors"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit Site
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 border border-white/30 text-white text-xs font-medium px-4 py-2 rounded-lg hover:border-white/60 transition-colors"
                  >
                    <FaPlay className="text-[10px]" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ── Gradient Placeholder + Hover Overlay (GitHub-only projects) ── */
        <div className="relative w-full h-48 sm:h-56 md:h-72 overflow-hidden rounded-xl border border-white/10 shadow-lg group">
          <div className="w-full h-full bg-black/40 flex flex-col items-center justify-center gap-2">
            <span className="text-4xl font-semibold text-white/20 tracking-widest">
              {getInitials(project.title)}
            </span>
            <span className="text-[11px] text-white/20 uppercase tracking-[0.15em]">
              {project.tag}
            </span>
          </div>

          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white/50 tracking-widest uppercase">
              {project.title}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-white/30 text-white text-xs font-medium px-4 py-2 rounded-lg hover:border-white/60 transition-colors"
              >
                <FaGithub />
                {isLive ? "Visit Site" : "View Code"}
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#FF9FFC] text-[#1a0020] text-xs font-medium px-4 py-2 rounded-lg hover:bg-white transition-colors"
                >
                  <FaPlay className="text-[10px]" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Projects ───────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="py-24">
      {/* HEADER */}
      <div className="mb-20 px-8 text-center md:px-24">
        <h2 className="mb-6 text-base font-bold uppercase tracking-widest text-white md:text-lg">
          Projects
        </h2>

        <div className="mb-4 flex flex-wrap justify-center gap-4">
          <h1 className="text-4xl uppercase tracking-wide text-white md:text-5xl">
            Work &
          </h1>
          <h1 className="text-4xl uppercase tracking-wide text-[#FF9FFC] md:text-5xl">
            Projects
          </h1>
        </div>

        <p className="mx-auto max-w-xl text-xs text-white/60 md:text-sm">
          Real-world projects ranging from client systems to personal
          experiments, focused on problem-solving, scalability, and clean UI
          development.
        </p>
      </div>

      {/* CASE STUDIES */}
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6">
        {projects.map((project, i) => (
          <div
            key={`${project.id}-${i}`}
            className={`flex flex-col gap-10 md:flex-row ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <ProjectPreview project={project} />

            <div className="flex-1 flex flex-col justify-center">
              <span className="text-xs text-white/30">
                {project.num} • {project.tag}
              </span>

              <h3 className="mt-2 text-3xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/50">
                {project.description}
              </p>

              {/* STACK */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="mt-8 flex items-center gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
                  >
                    <FaPlay className="text-xs" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FF9FFC]/70 hover:text-[#FF9FFC] transition-colors"
                >
                  {project.link.includes("github")
                    ? "View Code"
                    : "Visit Project"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-24 w-3/4 border-t border-white/10" />
    </section>
  );
}

export default Projects;
