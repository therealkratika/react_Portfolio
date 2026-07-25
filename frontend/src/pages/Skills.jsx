import { useState } from "react";
import {
  Monitor,
  Server,
  Wrench,
  Palette,
  Code2,
  Database,
  GitBranch,
  Lightbulb,
} from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: "Front-End",
      icon: <Monitor size={18} />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Redux",
        "Tailwind CSS",
        "Responsive Design",
        "Accessibility",
      ],
    },
    {
      title: "Back-End",
      icon: <Server size={18} />,
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
        "Socket.io",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      title: "Tools",
      icon: <Wrench size={18} />,
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Render",
        "Netlify",
        "Vercel",
        "Vite",
      ],
    },
    {
      title: "Design",
      icon: <Palette size={18} />,
      skills: [
        "Figma",
        "Canva",
        "UI/UX",
        "Wireframing",
        "Agile",
        "Problem Solving",
        "Communication",
        "Teamwork",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-20 top-10 h-96 w-96 rounded-full bg-[#F8C8DC]/10 blur-[170px]" />
        <div className="absolute right-10 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FFE8F2]/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white">
            SKILLS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Skills &{" "}
            <span className="text-white">Expertise</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Technologies and tools I use to build modern,
            scalable and responsive web applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 transition-all duration-300 ${
                activeTab === index
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/[0.03] text-white hover:border-[#F8C8DC]/40 hover:bg-[#F8C8DC]/10 hover:text-[#F8C8DC]"
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Card */}
        <div className="mt-14 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/[0.06] p-3 text-white">
              {skillCategories[activeTab].icon}
            </div>

            <h3 className="text-3xl font-bold">
              {skillCategories[activeTab].title}
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories[activeTab].skills.map((skill) => (
              <div
                key={skill}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F8C8DC]/40 hover:bg-[#F8C8DC]/10 hover:shadow-[0_0_20px_rgba(248,200,220,.18)]"
              >
                <Code2
                  size={18}
                  className="text-white transition group-hover:rotate-12 group-hover:text-[#F8C8DC]"
                />

                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:border-[#F8C8DC]/40 hover:shadow-[0_0_30px_rgba(248,200,220,.18)]">
            <Lightbulb
              className="mx-auto mb-4 text-white"
              size={34}
            />
            <h3 className="text-5xl font-black text-white">
              1+
            </h3>
            <p className="mt-2 text-zinc-400">
              Years Experience
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:border-[#F8C8DC]/40 hover:shadow-[0_0_30px_rgba(248,200,220,.18)]">
            <GitBranch
              className="mx-auto mb-4 text-white"
              size={34}
            />
            <h3 className="text-5xl font-black text-white">
              5+
            </h3>
            <p className="mt-2 text-zinc-400">
              Projects Built
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:border-[#F8C8DC]/40 hover:shadow-[0_0_30px_rgba(248,200,220,.18)]">
            <Database
              className="mx-auto mb-4 text-white"
              size={34}
            />
            <h3 className="text-5xl font-black text-white">
              15+
            </h3>
            <p className="mt-2 text-zinc-400">
              Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}