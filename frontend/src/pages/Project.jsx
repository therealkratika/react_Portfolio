import project from "../assets/project.png";
import project2 from "../assets/project2.png";
import image from "../assets/image.png";

import {
  GitBranch,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Link Saver",
      description:
        "A full-stack MERN application that allows users to securely save, organize, and manage important links with authentication, responsive UI, and Docker deployment.",
      image: project,
      technologies: [
        "React.js",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
        "Docker",
      ],
      github: "https://github.com/therealkratika/Link_saver_mern",
      live: "https://link-saver-mern-914j.onrender.com/",
    },
    {
      title: "Expense Tracker",
      description:
        "A full-stack expense management application to track and manage monthly expenses with a responsive interface.",
      image: project2,
      technologies: [
        "React.js",
        "PostgreSQL",
        "Node.js",
        "Express.js",
      ],
      github: "https://github.com/therealkratika/expense-tracker",
      live: "https://expense-tracker-1-e7lf.onrender.com/",
    },
    {
      title: "Book Rental",
      description:
        "A MERN stack platform where users can list books for rent or sale, browse available books, and connect directly with owners.",
      image: image,
      technologies: [
        "React.js",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
      ],
      github: "https://github.com/therealkratika/BookRental.git",
      live: "https://bookloom-psi.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-20 h-96 w-96 rounded-full bg-[#F8C8DC]/10 blur-[170px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#FFEAF3]/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white">
            <FolderGit2 size={14} />
            PROJECTS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Featured{" "}
            <span className="text-white">Projects</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A collection of projects showcasing my experience in full-stack web
            development using modern technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#F8C8DC]/40 hover:bg-[#F8C8DC]/10 hover:shadow-[0_0_40px_rgba(248,200,220,0.18)]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-[30px]">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
  />
</div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs text-white transition group-hover:border-[#F8C8DC]/40 group-hover:text-[#F8C8DC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-white transition hover:border-[#F8C8DC] hover:text-[#F8C8DC]"
                  >
                    <GitBranch size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white px-5 py-2 font-medium text-black transition hover:scale-105 hover:bg-[#F8C8DC]"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-black text-[#F8C8DC]">
              3+
            </h3>
            <p className="mt-2 text-zinc-400">
              Full Stack Projects
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-black text-[#F8C8DC]">
              10+
            </h3>
            <p className="mt-2 text-zinc-400">
              Technologies Used
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-black text-[#F8C8DC]">
              100%
            </h3>
            <p className="mt-2 text-zinc-400">
              Responsive Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}