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
} from "react-icons/si";
import { FaCloud, FaAws, FaAmazon } from "react-icons/fa";
import LogoLoop from "../react-bits/LogoLoop";

// ROW 1 - Languages & Web Technologies
const row1 = [
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://typescriptlang.org",
  },
  { node: <SiPhp />, title: "PHP", href: "https://php.net" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiGo />, title: "Go", href: "https://go.dev" },
  {
    node: <SiHtml5 />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  {
    node: <SiFlask />,
    title: "Flask",
    href: "https://flask.palletsprojects.com",
  },
  { node: <SiJquery />, title: "jQuery", href: "https://jquery.com" },
  { node: <SiPrisma />, title: "Prisma", href: "https://prisma.io" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
];

// ROW 2 - Databases, Tools & Platforms
const row2 = [
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://postgresql.org",
  },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  {
    node: <FaAws />,
    title: "DynamoDB",
    href: "https://aws.amazon.com/dynamodb",
  },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  {
    node: <FaAmazon />,
    title: "AWS",
    href: "https://aws.amazon.com",
  },
  { node: <SiPostman />, title: "Postman", href: "https://postman.com" },
  {
    node: <SiJira />,
    title: "Jira",
    href: "https://atlassian.com/software/jira",
  },
  { node: <SiSlack />, title: "Slack", href: "https://slack.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  {
    node: <SiCloudflare />,
    title: "Cloudflare",
    href: "https://cloudflare.com",
  },
  { node: <SiStripe />, title: "Stripe", href: "https://stripe.com" },
  { node: <FaCloud />, title: "Ollama", href: "https://ollama.com" },
];

function Skills() {
  return (
    <>
      <section id="skills" className="flex flex-col items-center py-10">
        {/* Header */}
        <div className="text-center mb-16 px-8 md:px-24">
          <h2 className="text-base md:text-lg font-bold text-white mb-6 tracking-widest uppercase">
            Skills
          </h2>

          <div className="flex justify-center gap-6 mb-4 flex-wrap">
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide uppercase">
              Build
            </h1>
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide uppercase">
              Design
            </h1>
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide uppercase">
              Scale
            </h1>
          </div>

          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            I craft clean, efficient systems—from intuitive interfaces to
            reliable backend solutions.
          </p>
        </div>

        {/* Row 1 - Languages & Frameworks */}
        <div className="w-full flex flex-col gap-8">
          <LogoLoop
            logos={row1}
            speed={80}
            direction="left"
            logoHeight={50}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Languages and Frameworks"
          />

          {/* Row 2 - Databases & Tools */}
          <LogoLoop
            logos={row2}
            speed={80}
            direction="right"
            logoHeight={50}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Databases and Tools"
          />
        </div>
      </section>
      <div className="w-3/4 mx-auto border-t border-white/10" />
    </>
  );
}

export default Skills;
