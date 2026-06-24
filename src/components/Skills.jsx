const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Flutter",
  "Git",
  "GitHub"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-4xl text-white font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-5 rounded-lg text-center text-white"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}