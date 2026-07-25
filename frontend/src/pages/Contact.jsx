import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  const contacts = [
    {
      icon: <MdEmail size={28} />,
      title: "Email",
      value: "therealkratika@gmail.com",
      href: "mailto:therealkratika@gmail.com",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Phone",
      value: "+91 9769966000",
      href: "tel:+919769966000",
    },
    {
      icon: <IoLocationSharp size={28} />,
      title: "Location",
      value: "Available for Remote Work",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F8C8DC]/15 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#FFE6F0]/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
            CONTACT
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Let's Connect
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            I'm always open to internship opportunities, collaborations,
            freelance projects, or simply connecting with fellow developers.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {contacts.map((item) => (
            <div
              key={item.title}
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
              <div className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-white/[0.06]
                text-white
                transition
                duration-300
                group-hover:scale-110
                group-hover:bg-[#F8C8DC]/20
                group-hover:text-[#F8C8DC]
              ">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              {item.href ? (
                <a
                  href={item.href}
                  className="mt-3 block break-all text-zinc-400 transition hover:text-[#F8C8DC]"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-zinc-400">
                  {item.value}
                </p>
              )}
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-12
            text-center
            backdrop-blur-xl
          "
        >
          {/* CTA Glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F8C8DC]/10 via-transparent to-[#FFE6F0]/10" />

          <h3 className="text-4xl font-bold">
            Let's Build Something Amazing
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether you have an internship opportunity, a project idea, or just
            want to say hello, I'd be happy to connect with you.
          </p>

          <a
            href="mailto:therealkratika@gmail.com"
            className="
              mt-10
              inline-flex
              items-center
              rounded-full
              bg-white
              px-8
              py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#F8C8DC]
              hover:shadow-[0_0_45px_rgba(248,200,220,0.35)]
            "
          >
            Say Hello 
          </a>
        </div>

      </div>
    </section>
  );
}