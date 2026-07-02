import { Link } from "react-router-dom";
import LogoLoop from "../react-bits/LogoLoop";
import { allLogos } from "../../lib/logos";

function splitArray<T>(array: T[], parts: number): T[][] {
  const result: T[][] = Array.from({ length: parts }, () => []);
  array.forEach((item, index) => {
    result[index % parts].push(item);
  });
  return result;
}

const [row1, row2, row3] = splitArray(allLogos, 3);

function Skills() {
  return (
    <>
      <section id="skills" className="flex flex-col items-center py-16">
        <div className="text-center mb-16 px-8 md:px-24">
          <h2 className="text-base md:text-lg font-bold text-white mb-6 tracking-widest uppercase">
            Skills
          </h2>
          <div className="flex justify-center gap-6 mb-4 flex-wrap">
            <h1 className="text-white text-4xl md:text-5xl tracking-wide uppercase">
              Build
            </h1>
            <h1 className="text-[#FF9FFC] text-4xl md:text-5xl tracking-wide uppercase">
              Design
            </h1>
            <h1 className="text-white text-4xl md:text-5xl tracking-wide uppercase">
              Scale
            </h1>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            I craft clean, efficient systems—from intuitive interfaces to
            reliable backend solutions.
          </p>
        </div>

        <div className="w-full flex flex-col gap-8">
          <LogoLoop
            logos={row1}
            speed={80}
            direction="left"
            logoHeight={50}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Skills Row 1"
          />
          <LogoLoop
            logos={row2}
            speed={80}
            direction="right"
            logoHeight={50}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Skills Row 2"
          />
          <LogoLoop
            logos={row3}
            speed={80}
            direction="left"
            logoHeight={50}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Skills Row 3"
          />
        </div>

        <div className="mt-10">
          <Link
            to="/skills"
            className="text-sm text-white/40 hover:text-white border border-white/10 hover:border-white/30 px-5 py-2 rounded-full transition-colors"
          >
            View all skills →
          </Link>
        </div>
      </section>

      <div className="w-3/4 mx-auto border-t border-white/10" />
    </>
  );
}

export default Skills;
