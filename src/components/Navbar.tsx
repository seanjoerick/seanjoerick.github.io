import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import GlowText from "./buttons/GlowText";

const navLinks = [
  { label: "About" },
  { label: "Skills" },
  { label: "Experience" },
  { label: "Projects" },
  { label: "Education" },
  { label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-8 md:px-16 border-b border-white/10"
      style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(21px)" }}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <GlowText className="font-bold">sean(mac)</GlowText>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <GlowText
                href={`#${link.label.toLowerCase()}`}
                className="text-xs tracking-widest font-medium"
              >
                {link.label}
              </GlowText>
            </li>
          ))}
        </ul>

        {/* Mobile Burger */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <IoClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <ul
        className={`absolute top-16 left-0 right-0 flex flex-col items-center gap-6 pt-4 pb-8 lg:hidden bg-black/90 backdrop-blur-md transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <li
            key={link.label}
            style={{
              transition: `opacity 0.3s ease ${i * 0.05}s, transform 0.3s ease ${
                i * 0.05
              }s`,
              transform: open ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            <GlowText
              href={`#${link.label.toLowerCase()}`}
              className="text-xs tracking-widest font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </GlowText>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
