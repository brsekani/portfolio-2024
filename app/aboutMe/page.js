"use client";

import { GoDotFill, GoArrowUpRight, GoBriefcase } from "react-icons/go";

import { TiHtml5 } from "react-icons/ti";

import { FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiSupabase,
  SiFramer,
  SiReactquery,
  SiNextdotjs,
  SiTypescript,
  SiDjango,
} from "react-icons/si";

import { DiVisualstudio, DiNodejs, DiDjango } from "react-icons/di";

import { AiFillApi } from "react-icons/ai";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-[#61dafb]" />,
    description:
      "Building fast, scalable, and user-focused applications with modern frontend technologies and clean architecture.",
    skills: [
      {
        name: "React",
        icon: <FaReact size={24} color="#61dafb" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={22} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={22} color="#f7df1e" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={22} color="#3178C6" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={22} color="#38BDF8" />,
      },
      {
        name: "Redux",
        icon: <SiRedux size={22} color="#764abc" />,
      },
      {
        name: "React Query",
        icon: <SiReactquery size={22} color="#FF4154" />,
      },
      {
        name: "React Hook Form",
        icon: <FaReact size={22} color="#ec5990" />,
      },
    ],
  },

  {
    title: "Backend & APIs",
    icon: <AiFillApi className="text-[#fcd65c]" />,
    description:
      "Creating reliable backend systems, API integrations, authentication flows, and scalable data-driven applications.",
    skills: [
      {
        name: "Node.js",
        icon: <DiNodejs size={28} color="#83CD29" />,
      },
      {
        name: "Django",
        icon: <SiDjango size={20} />,
      },
      {
        name: "REST APIs",
        icon: <AiFillApi size={24} color="#fcd65c" />,
      },
      {
        name: "JWT Auth",
        icon: <GoDotFill size={18} color="#fcd65c" />,
      },
      {
        name: "Socket.io",
        icon: <GoDotFill size={18} color="#ffffff" />,
      },
      {
        name: "Supabase",
        icon: <SiSupabase size={22} color="#3ECF8E" />,
      },
      {
        name: "Firebase",
        icon: <GoDotFill size={18} color="#ffca28" />,
      },
      {
        name: "SQLite",
        icon: <GoDotFill size={18} color="#4DB6AC" />,
      },
    ],
  },

  {
    title: "UI / Design",
    icon: <SiFramer className="text-white" />,
    description:
      "Designing modern interfaces with strong visual hierarchy, smooth interactions, and polished user experiences.",
    skills: [
      {
        name: "Figma",
        icon: <GoDotFill size={18} color="#f24e1e" />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer size={22} />,
      },
      {
        name: "Responsive Design",
        icon: <GoDotFill size={18} color="#fcd65c" />,
      },
      {
        name: "Accessibility",
        icon: <GoDotFill size={18} color="#61dafb" />,
      },
      {
        name: "UI Systems",
        icon: <GoDotFill size={18} color="#ffffff" />,
      },
      {
        name: "Chart.js",
        icon: <GoDotFill size={18} color="#ff6384" />,
      },
    ],
  },

  {
    title: "Tools & Workflow",
    icon: <FaGithub className="text-white" />,
    description:
      "Using modern tools and workflows to improve collaboration, deployment, testing, and developer productivity.",
    skills: [
      {
        name: "Git",
        icon: <FaGithub size={22} />,
      },
      {
        name: "GitHub",
        icon: <FaGithub size={22} />,
      },
      {
        name: "Docker",
        icon: <GoDotFill size={18} color="#2496ED" />,
      },
      {
        name: "Postman",
        icon: <GoDotFill size={18} color="#FF6C37" />,
      },
      {
        name: "Cloudflare",
        icon: <GoDotFill size={18} color="#f38020" />,
      },
      {
        name: "Vercel",
        icon: <GoDotFill size={18} color="#ffffff" />,
      },
      {
        name: "Netlify",
        icon: <GoDotFill size={18} color="#00C7B7" />,
      },
      {
        name: "VS Code",
        icon: <DiVisualstudio size={24} color="#007ACC" />,
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white px-6 md:px-10 pb-20">
      {/* top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#fcd65c]/[0.03] blur-[140px]" />

      <div className="max-w-[1440px] mx-auto md:pt-20 pt-5 relative z-10">
        {/* heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-[#fcd65c] text-[12px] tracking-[0.25em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fcd65c]" />
            About Me
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Building products that feel
            <span className="text-[#fcd65c]"> simple, fast,</span> and human.
          </h1>

          <p className="mt-6 text-white/55 leading-8 text-[16px] max-w-2xl">
            I’m Lawal Temidayo, a frontend developer focused on creating modern
            web experiences with strong attention to UI, interaction,
            accessibility, and performance.
          </p>
        </div>

        {/* skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group border border-white/10 bg-white/[0.02] rounded-3xl p-7 hover:border-[#fcd65c]/30 transition-all duration-300"
            >
              {/* header */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#fcd65c]/10 border border-[#fcd65c]/10 flex items-center justify-center text-xl">
                  {group.icon}
                </div>

                <GoDotFill className="text-[#fcd65c]/50 group-hover:text-[#fcd65c] transition-colors" />
              </div>

              <h3 className="text-2xl font-semibold mb-3">{group.title}</h3>

              <p className="text-white/50 leading-7 text-[15px] mb-7">
                {group.description}
              </p>

              {/* skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-black/30 hover:bg-white/[0.03] transition-all"
                  >
                    <div>{skill.icon}</div>

                    <span className="text-sm text-white/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
