import { useState, useEffect } from "react";

const roles = [
  "Fullstack Developer!",
  "Problem Solver!",
  "I build web apps from scratch!",
  "I turn ideas into reality!",
  "I write clean, scalable code!",
];

function TypeWriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (charIndex === 1) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
          }
          setText(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }
      },
      deleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <p className="text-[#FF9FFC] text-sm tracking-widest mb-6 font-semibold">
      {text}
    </p>
  );
}

export default TypeWriter;
