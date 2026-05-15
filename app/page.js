"use client";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuFolderHeart } from "react-icons/lu";
import { IoPersonCircle } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { HiArrowUpRight, HiArrowRight } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "@/public/welcome-animation.json";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(252,214,92,0.08)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(252,214,92,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8">
        {/* Hero */}
        <main className="md:pt-20 pt-5 pb-12">
          <div className="flex flex-row justify-between">
            {/* Available badge */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#fcd65c]/[0.08] border border-[#fcd65c]/20 rounded-full px-3.5 py-1.5 text-[12px] text-[#fcd65c] tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fcd65c] animate-pulse" />
                Available for work
              </div>

              {/* Heading */}
              <h1 className=" text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-4">
                Frontend
                <br />
                Developer &amp;{" "}
                <span className="text-[#fcd65c]">
                  <Typewriter
                    words={[
                      "Designer",
                      "Problem Solver",
                      "Tech Enthusiast",
                      "Creative Thinker",
                      "UI Builder",
                      "Team Collaborator",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={1800}
                  />
                </span>
              </h1>

              {/* Bio */}
              <p className="text-[17px] text-white/55 leading-relaxed max-w-[480px] mb-6">
                Hi, I&apos;m{" "}
                <span className="text-white/80">Lawal Temidayo</span> — a
                self-taught frontend developer with a keen eye for design and a
                love for building intuitive, visually compelling web
                experiences.
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Figma",
                  "UI/UX",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1 text-[12px] text-white/45 tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3 flex-wrap mb-14">
                <Link
                  href="https://drive.google.com/file/d/1I1LDG4VdOkpqJHMhM3gQmMMpzNDModlQ/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center justify-center  gap-2 bg-[#fcd65c] text-[#0f0f0f] font-medium text-[14px] px-6 py-3 rounded-lg hover:bg-[#ffe07a] hover:-translate-y-px transition-all no-underline w-full md:w-fit"
                >
                  <HiDownload className="text-base" />
                  View Resume
                </Link>
                <Link
                  href="/project"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white/70 text-[14px] px-5 py-3 rounded-lg border border-white/10 hover:border-white/30 hover:text-white transition-all no-underline w-full md:w-fit"
                >
                  <HiArrowRight className="text-base" />
                  View Work
                </Link>
              </div>
            </div>
            <div className="hidden md:block w-[600px]">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>

          {/* Section cards */}
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2.5 mb-12">
            {[
              {
                href: "/project",
                icon: <LuFolderHeart className="text-lg" />,
                label: "Portfolio",
                title: "My Projects",
              },
              {
                href: "/aboutMe",
                icon: <IoPersonCircle className="text-lg" />,
                label: "Background",
                title: "About Me",
              },
              {
                href: "/blog",
                icon: <FaPenToSquare className="text-base" />,
                label: "Writing",
                title: "My Blog",
              },
              {
                href: "/contactMe",
                icon: <MdOutgoingMail className="text-lg" />,
                label: "Get in Touch",
                title: "Contact Me",
              },
            ].map(({ href, icon, label, title }) => (
              <Link
                key={href}
                href={href}
                className="group relative flex flex-col items-start gap-2.5 bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 hover:border-[#fcd65c]/25 hover:-translate-y-0.5 transition-all no-underline overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fcd65c]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-9 h-9 bg-[#fcd65c]/[0.08] rounded-lg flex items-center justify-center text-[#fcd65c]">
                  {icon}
                </div>
                <div>
                  <p className="text-[11px] text-white/40 tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-[14px]  font-medium text-white/90">
                    {title}
                  </p>
                </div>
                <HiArrowUpRight className="absolute top-4 right-4 text-[#fcd65c]/40 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-6" />

          {/* Footer */}
          <footer className="flex items-center justify-between flex-wrap gap-4 pb-8">
            <div className="flex gap-3">
              {[
                {
                  href: "mailto:lawaltemidayo06@gmail.com",
                  icon: <IoMdMail />,
                  label: "Email",
                },
                {
                  href: "https://github.com/brsekani/",
                  icon: <FaGithub />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/lawal-temidayo-0b024b270/",
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                },
                {
                  href: "https://twitter.com/SeKaNi_TeCh",
                  icon: <FaTwitter />,
                  label: "Twitter",
                },
              ].map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 text-base hover:border-[#fcd65c]/40 hover:text-[#fcd65c] hover:bg-[#fcd65c]/[0.06] transition-all no-underline"
                >
                  {icon}
                </Link>
              ))}
            </div>
            <span className="text-[12px] text-white/25 tracking-wider">
              lawaltemidayo06@gmail.com
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}
