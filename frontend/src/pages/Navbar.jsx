import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-black tracking-tight text-white transition hover:text-[#F8C8DC]"
        >
          Kratika
        </button>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-3 backdrop-blur-xl md:flex">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-zinc-300 transition duration-300 hover:text-[#F8C8DC]"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#F8C8DC]"
          >
            Contact
          </button>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-white backdrop-blur md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="mx-6 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full py-3 text-left text-zinc-300 transition hover:text-[#F8C8DC]"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-4 w-full rounded-full bg-white py-3 font-semibold text-black transition hover:bg-[#F8C8DC]"
          >
            Contact
          </button>

        </div>
      </div>
    </header>
  );
}