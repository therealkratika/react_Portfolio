import {
  Code2,
  Palette,
  Rocket,
  GraduationCap,
} from "lucide-react";
import Laptop from "../components/laptop";
export default function About() {
  const features = [
    {
      icon: <Code2 size={30} />,
      title: "Clean Code",
      description:
        "I write scalable, maintainable and well-structured code following modern development practices.",
    },
    {
      icon: <Palette size={30} />,
      title: "Modern UI",
      description:
        "I enjoy crafting beautiful user interfaces with smooth interactions and responsive layouts.",
    },
    {
      icon: <Rocket size={30} />,
      title: "Performance",
      description:
        "Building fast, optimized and accessible web applications is one of my top priorities.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-[#F8C8DC]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-[#FFE8F2]/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
            ABOUT ME
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Passionate About Building
            <span className="text-white"> Digital Experiences</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            I'm a Computer Science student and Full Stack Developer who enjoys
            transforming ideas into beautiful, functional web applications with
            modern technologies.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#F8C8DC]/40
                hover:bg-[#F8C8DC]/10
                hover:shadow-[0_0_40px_rgba(248,200,220,0.18)]
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-white transition group-hover:scale-110 group-hover:bg-[#F8C8DC]/20 group-hover:text-[#F8C8DC]">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

        {/* Journey */}
        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="text-sm uppercase tracking-[0.25em] text-white">
              My Journey
            </span>

            <h3 className="mt-4 text-4xl font-bold">
              Learning, Building & Growing Every Day
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              My journey into web development began with curiosity about how
              websites work. Over time, I explored React, Next.js, Node.js,
              Express and MongoDB while continuously improving my problem-solving
              skills through Data Structures and Algorithms.
            </p>

            <p className="mt-6 leading-8 text-zinc-400">
              I'm currently focused on building modern full-stack applications,
              contributing to open-source projects, and preparing for software
              engineering internships.
            </p>

          </div>

          {/* Right Card */}
          <div >

           <Laptop />

            </div>

          </div>

        </div>

    </section>
  );
}