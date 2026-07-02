import { Link } from "react-router-dom";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiPhp,
  SiHtml5,
  SiCss,
  SiJquery,
  SiPrisma,
  SiBootstrap,
  SiPostman,
  SiJira,
  SiSlack,
  SiVercel,
  SiCloudflare,
  SiStripe,
  SiFlask,
  SiNestjs,
  FaCloud,
  FaAws,
  FaAmazon,
  FaArrowLeft,
} from "../lib/icons";

type Skill = { icon: React.ReactNode; name: string };
type Category = { label: string; skills: Skill[] };

const CATEGORIES: Category[] = [
  {
    label: "Languages",
    skills: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiGo />, name: "Go" },
      { icon: <SiPhp />, name: "PHP" },
      { icon: <SiHtml5 />, name: "HTML" },
      { icon: <SiCss />, name: "CSS" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <SiJquery />, name: "jQuery" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiNestjs />, name: "NestJS" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiGo />, name: "Go" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <FaAmazon />, name: "DynamoDB" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiCloudflare />, name: "Cloudflare" },
      { icon: <SiGit />, name: "Git" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiSlack />, name: "Slack" },
      { icon: <SiJira />, name: "Jira" },
      { icon: <SiStripe />, name: "Stripe" },
      { icon: <FaCloud />, name: "Ollama" },
    ],
  },
];

function SkillsPage() {
  return (
    <section className="py-16 px-6 md:px-24 max-w-5xl mx-auto w-full">
      {/* Back button */}
      <div className="mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
        >
          <FaArrowLeft className="text-xs" />
          Back
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-medium text-white/40 tracking-widest uppercase mb-3">
          Skills
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-10">
        {CATEGORIES.map((category) => (
          <div key={category.label}>
            <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-4 pb-3 border-b border-white/10">
              {category.label}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#FF9FFC]/40 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  <span className="text-3xl text-white/50 group-hover:text-[#FF9FFC] transition-colors duration-200">
                    {skill.icon}
                  </span>
                  <span className="text-[11px] text-white/50 group-hover:text-white/80 text-center leading-tight transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
