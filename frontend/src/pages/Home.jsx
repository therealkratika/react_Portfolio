import Navbar from "./Navbar";
import Portrait from "../components/Portrait";

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />
      </div>

      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-16 md:px-12 lg:flex-row lg:px-20">

        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">

          <span className="inline-block bg-white/5 px-4 py-1 text-sm uppercase tracking-[0.25em] text-zinc-400 backdrop-blur">
            Hello, I'm
          </span>

          <h1 className="mt-6 text-6xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
            Kratika
          </h1>

          <h2 className="mt-4 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            Full Stack Web Developer
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            I build modern, fast and responsive web applications using React,
            Next.js, Node.js and MongoDB. I enjoy crafting beautiful user
            interfaces while writing clean, scalable code.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8C8DC] hover:shadow-[0_0_35px_rgba(248,200,220,0.25)]"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-zinc-700 px-8 py-3 font-semibold text-white transition-all duration-300 hover:border-[#F8C8DC] hover:bg-[#F8C8DC] hover:text-black"
            >
              Contact Me
            </button>

          </div>

          {/* Socials */}
          <div className="mt-10 flex justify-center gap-8 text-sm uppercase tracking-widest text-zinc-500 lg:justify-start">

            <a
              href="https://github.com/therealkratika"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#F8C8DC]"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#F8C8DC]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:therealkratika@gmail.com"
              className="transition hover:text-[#F8C8DC]"
            >
              Email
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative flex items-center justify-center">

          <div className="absolute h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative z-20 max-w-6xl text-center lg:text-left">
            <Portrait />
          </div>

        </div>

      </div>
    </section>
  );
}