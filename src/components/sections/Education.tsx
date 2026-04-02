import Timeline from "../Timeline";
import NEUST from "../../assets/neust.webp";
import ARAULLO from "../../assets/araullo.webp";
import NEHS from "../../assets/nehs.webp";
import BALER from "../../assets/baler.webp";

const experiences = [
  {
    title: "Nueva Ecija University of Science and Technology (NEUST)",
    subtitle: "BS in Information Technology",
    period: "2020 - 2024",
    current: false,
    badge: "Graduate",
    icon: NEUST,
    description: [
      "Graduated with a Bachelor's degree in IT, specializing in Database Systems.",
      "Main Programmer (Capstone): Spearheaded the full-lifecycle development of a 'POS Book Inventory System'.",
      "Architected the system's core logic and database schema using PHP, MySQL, and jQuery.",
      "Engineered real-time data synchronization and asynchronous front-end updates via AJAX.",
    ],
    skills: [
      "Lead Programming",
      "System Architecture",
      "PHP",
      "AJAX",
      "MySQL",
      "jQuery",
      "Web Development",
    ],
  },
  {
    title: "PHINMA Araullo University",
    subtitle: "Senior High School - GAS-Crim Strand",
    period: "2018 - 2020",
    icon: ARAULLO,
    description: [
      "Graduated under the General Academic Strand with a focus on Criminology.",
      "Developed strong foundations in research, community involvement, and discipline.",
    ],
    skills: ["Critical Thinking", "Leadership", "Academic Research"],
  },
  {
    title: "Nueva Ecija High School",
    subtitle: "Junior High School Graduate",
    period: "2013 - 2018",
    icon: NEHS,
    description: [
      "Completed secondary education with consistent academic participation.",
      "Engaged in various school-wide activities and technical drafting basics.",
    ],
  },
  {
    title: "Baler Central School",
    subtitle: "Elementary Graduate | Varsity Athlete",
    period: "GRADUATED 2012",
    icon: BALER,
    description: [
      "Active Student-Athlete: Served as a Volleyball Varsity Player for the school.",
      "Built early discipline and teamwork skills through competitive sports and training.",
    ],
    skills: ["Volleyball", "Teamwork", "Active Lifestyle", "Discipline"],
  },
];

function Education() {
  return (
    <>
      <section
        id="education"
        className="flex flex-col items-center px-8 md:px-24 py-20"
      >
        <div className="text-center mb-16">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
            Learning & Growth
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Education
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            My journey in tech started with a curiosity for building things.
            From my days as a student-athlete to finishing my IT degree, each
            step has taught me the value of hard work and technical persistence.
          </p>
        </div>

        <div className="w-full max-w-4xl">
          {" "}
          <Timeline items={experiences} />
        </div>
      </section>
      <div className="w-3/4 mx-auto border-t border-white/10" />
    </>
  );
}

export default Education;
