"use client";

const projects = [
  {
    title: "Car Rental Management System",
    type: "Personal Full Stack Project",
    desc: "Full Stack web application built using Next.js, React, Express.js and MongoDB. Features include user authentication, car listings, bookings, reservation management and admin dashboard.",
    image: "/car.jpg",
    github: "https://github.com/maan371/car-rental-app",
    demo: "https://car-rental-app.vercel.app",
  },

  {
    title: "SherGo Parcel Tracking App",
    type: "University Level Flutter Project",
    desc: "Parcel tracking application developed using Flutter and shipment tracking APIs with real-time tracking history and delivery status updates.",
    image: "/shergo.jpg",
    video: "https://1drv.ms/v/c/ae22b8b4e48c242d/IQChatJ-44Z1T5NNDGcjNthQAcl2L9WDRQovTSdT9Arudac?e=dMrxhe",
  },

  {
    title: "Mental Health Chatbot",
    type: "University Level AI/ML Project",
    desc: "AI-powered chatbot developed using Python, NLP techniques, TF-IDF Vectorization and Logistic Regression for mental health support and guidance.",
    image: "/chatbot.jpg",
    documentation: "/Mental-Health-Chatbot-Documentation.pdf",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-14">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-sky-500/20 hover:-translate-y-2 transition-all duration-300"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-sky-400 font-medium mt-2">
                  {project.type}
                </p>

                <p className="text-gray-300 mt-4 leading-7">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg text-white font-medium transition"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium transition"
                    >
                      Live Demo
                    </a>
                  )}

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white font-medium transition"
                    >
                      Demo Video
                    </a>
                  )}

                  {project.documentation && (
                    <a
                      href={project.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg text-white font-medium transition"
                    >
                      Documentation
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}