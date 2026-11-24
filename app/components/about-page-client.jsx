"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const STATEMENT =
  "I’m Lawal Temidayo, a frontend developer who designs. I build modern web experiences with close attention to interaction, accessibility and performance, so products feel simple, fast and human.";

const skillGroups = [
  {
    title: "Frontend",
    description:
      "Responsive, scalable and user-focused web applications built with modern frontend technologies.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "React Hook Form",
    ],
  },
  {
    title: "Mobile development",
    description:
      "Building mobile application experiences with reusable components and modern React Native tooling.",
    skills: ["React Native", "Expo"],
  },
  {
    title: "Backend & APIs",
    description:
      "API integrations, authentication flows and data-driven application development.",
    skills: [
      "Node.js",
      "Django",
      "REST APIs",
      "JWT Auth",
      "Socket.io",
      "Supabase",
      "Firebase",
      "SQLite",
    ],
  },
  {
    title: "Design",
    description:
      "Interfaces with clear hierarchy, thoughtful interactions and attention to detail.",
    skills: [
      "Figma",
      "Framer Motion",
      "Responsive Design",
      "Accessibility",
      "UI Systems",
      "Chart.js",
    ],
  },
  {
    title: "Tools & workflow",
    description:
      "Tools that support collaboration, development, testing and deployment.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Cloudflare",
      "Vercel",
      "Netlify",
      "VS Code",
    ],
  },
];

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

function Statement() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.45"],
  });

  const words = STATEMENT.split(" ");

  return (
    <div className="flex min-h-[55vh] w-full items-center justify-center">
      <h1
        ref={ref}
        className="mx-auto max-w-full text-center font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,6rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
      >
        {reduce
          ? STATEMENT
          : words.map((word, index) => (
              <Word
                key={index}
                progress={scrollYProgress}
                range={[index / words.length, (index + 1) / words.length]}
              >
                {word}
              </Word>
            ))}
      </h1>
    </div>
  );
}

export default function AboutPageClient() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-24 pt-6 md:px-10 md:pt-12">
      <Statement />

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="mt-28 md:mt-44">
        <h2
          id="skills-heading"
          className="mb-10 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight md:mb-14 md:text-3xl"
        >
          What I work with
        </h2>

        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-6 border-t border-[#ebe7dd]/12 py-9 last:border-b md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-12"
          >
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
                {group.title}
              </h3>

              <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-[#8d9096]">
                {group.description}
              </p>
            </div>

            <ul className="flex flex-wrap content-start gap-x-6 gap-y-3 text-lg md:text-xl">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default text-[#ebe7dd]/80 transition-colors duration-200 hover:text-[#fcd65c]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Closing link */}
      <Link
        href="/contactMe"
        className="group mt-20 inline-flex w-full items-center justify-center gap-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#fcd65c] md:mt-28 md:text-6xl"
      >
        <span className="bg-[linear-gradient(#fcd65c,#fcd65c)] bg-[length:0%_3px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_3px] motion-reduce:transition-none">
          Have a project in mind?
        </span>

        <HiArrowUpRight className="text-[#fcd65c] transition-transform duration-500 group-hover:rotate-45" />
      </Link>
    </section>
  );
}
