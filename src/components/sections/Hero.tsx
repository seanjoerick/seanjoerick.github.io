import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import GlowText from "../buttons/GlowText";
import ShimmerButton from "../buttons/ShimmerButton";
import TypeWriter from "@components/type/TypeWriter";

function Hero() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 px-8 md:px-24 py-20"
      >
        <div
          className="shrink-0 order-first lg:order-last"
          style={{
            filter: "drop-shadow(0 0 32px #FF9FFC55)",
            position: "relative",
          }}
        >
          <img
            src="/thorfinn.webp"
            alt="Sean"
            className="w-48 h-48 md:w-72 md:h-72 object-cover object-top rounded-2xl"
            style={{ border: "2px solid #FF9FFC" }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{ background: "rgba(0,0,0,0.35)" }}
          />
        </div>

        {/* LEFT - Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
            Hello, twin! I'm
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Sean Sebastian Macarayo
          </h1>

          <TypeWriter />

          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
            A Bachelor of Science in Information Technology graduate (2024),
            majoring in Database Systems. With 2+ years of experience as a
            Fullstack Engineer — starting as a freelancer in 2024 building
            real-world client projects, then joining a company from December
            2024 to January 2026.
          </p>

          <ShimmerButton
            href="#projects"
            className="px-8 py-3 text-sm"
            style={{ borderRadius: "8px" }}
          >
            Check My CV
          </ShimmerButton>

          {/* SOCIAL BUTTONS - ILALIM NG TEXT */}
          <div className="flex items-center gap-10 mt-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sean-sebastian-macarayo-598b521a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlowText>
                <FaLinkedin className="w-6 h-6" />
              </GlowText>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/seanjoerick"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GlowText>
                <FaGithub className="w-6 h-6" />
              </GlowText>
            </a>

            {/* Gmail */}
            <a href="mailto:sea.mac.dev@gmail.com">
              <GlowText>
                <IoMail className="w-6 h-6" />
              </GlowText>
            </a>
          </div>
        </div>
      </section>

      <div className="w-3/4 mx-auto border-t border-white/10" />
    </>
  );
}

export default Hero;
