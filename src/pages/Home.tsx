import Hero from "@components/sections/Hero";
import Skills from "@components/sections/Skills";
import Experience from "@components/sections/Experience";
import Projects from "@components/sections/Projects";
import Education from "@components/sections/Education";

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}

export default Home;
