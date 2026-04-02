import { FaGithub } from "react-icons/fa";
import GlowText from "./buttons/GlowText";

function Footer() {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-md border-t border-white/5 px-8 md:px-24 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
          {/* Left Side: GitHub Glow */}
          <div className="flex items-center">
            <a
              href="https://github.com/seanjoerick"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 active:scale-95"
            >
              <GlowText>
                <FaGithub className="w-6 h-6" />
              </GlowText>
            </a>
          </div>

          {/* Right Side: Design Credit */}
          <div className="text-white/60 text-sm tracking-wide">
            Designed & Developed by —{" "}
            <span className="text-white font-medium">Sean Macarayo</span>
          </div>
        </div>

        {/* Bottom: Full Copyright Notice */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-[0.3em] leading-relaxed">
            © 2026 SEAN SEBASTIAN MACARAYO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
