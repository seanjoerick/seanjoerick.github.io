import { useState, useEffect } from "react";

const roles = [
  "AI Fullstack Engineer!",
  "Problem Solver!",
  "I build AI-powered apps!",
  "I turn ideas into reality!",
  "I write clean, scalable code!",
  "I automate workflows with AI!",
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
    <p className="text-[#FF9FFC] text-lg tracking-widest mb-6 font-semibold">
      {text}
    </p>
  );
}

export default TypeWriter;
