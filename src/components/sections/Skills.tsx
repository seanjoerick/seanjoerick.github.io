function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center px-8 md:px-24 py-20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
          What I Know
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Skills
        </h1>
        <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Over the years, I've worked with a wide range of technologies — from
          building pixel-perfect frontends to designing scalable backend systems
          and managing databases.
        </p>
      </div>
    </section>
  );
}

export default Skills;
