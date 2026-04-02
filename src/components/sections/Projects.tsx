function Projects() {
  return (
    <>
      <section id="projects" className="flex flex-col items-center py-16">
        {/* Header */}
        <div className="text-center mb-16 px-8 md:px-24">
          <h2 className="text-base md:text-lg font-bold text-white mb-6 tracking-widest uppercase">
            Projects
          </h2>

          <div className="flex justify-center gap-6 mb-4 flex-wrap">
            <h1 className="text-white text-4xl md:text-5xl tracking-wide uppercase">
              My
            </h1>
            <h1 className="text-[#FF9FFC] text-4xl md:text-5xl tracking-wide uppercase">
              Work
            </h1>
          </div>

          <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto">
            A collection of projects showcasing my work and experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-6xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Placeholder */}
          <div className="h-48 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md" />
          <div className="h-48 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md" />
          <div className="h-48 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md" />
          <div className="h-48 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md" />
          <div className="h-48 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md" />
          <div className="h-48 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md" />
        </div>
      </section>

      <div className="w-3/4 mx-auto border-t border-white/10" />
    </>
  );
}

export default Projects;
