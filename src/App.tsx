function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative flex items-center justify-center min-h-screen px-6">
        {/* Content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            I build modern web applications using React, Tailwind, and clean UI
            design.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 bg-white text-black rounded-lg hover:opacity-80 transition">
              View Projects
            </button>

            <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
