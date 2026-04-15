import { FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MACCVBUILDER from "../../assets/macCVbuilder.webp";
import MEMOIR from "../../assets/memoirBooth.webp";
const projects = [
  {
    id: 1,
    num: "01",
    tag: "Personal Project",
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
    tag: "Personal Project",
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
    image: null,
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
    image: null,
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
            key={project.id}
            className={`flex flex-col gap-10 md:flex-row ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE / PREVIEW */}
            <div className="flex-1">
              <div className="relative w-full h-72 overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-lg group flex items-center justify-center">
                {/* inner floating frame */}
                <div className="w-[92%] h-[88%] flex items-center justify-center rounded-lg transition-all duration-500 ease-in-out group-hover:-translate-y-1 group-hover:scale-[1.02]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain rounded-xl transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <FaGithub className="text-4xl text-white/20 transition-all duration-500 ease-in-out group-hover:scale-110" />
                  )}
                </div>
              </div>
            </div>

            {/* CONTENT */}
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
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-white"
                  >
                    <FaPlay className="text-xs" />
                    Live Demo
                  </a>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  className="text-sm text-[#FF9FFC]/70 hover:text-[#FF9FFC]"
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
