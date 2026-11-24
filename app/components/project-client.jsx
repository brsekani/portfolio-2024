"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

import ticketistImage from "@/public/ticketist.png";
import craftPrideImage from "@/public/craftPride.png";
import hedgeimpact from "@/public/hedgeimpact.png";
import IFETOMarket from "@/public/IFETO-Market.png";
import FlourishMax from "@/public/flourish-max.png";

const projects = [
  {
    name: "IFETO Market",
    link: "https://www.ifetomarket.com/",
    image: IFETOMarket,
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "TypeScript"],
    role: "Frontend Developer",
    description:
      "Multi-vendor e-commerce platform connecting customers and vendors, with admin approval workflows and a streamlined checkout experience.",
  },
  {
    name: "Flourish Max Salon & Academy",
    link: "https://flourishmax.org/",
    image: FlourishMax,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Laravel",
      "Paystack",
      "Redux Toolkit",
    ],
    role: "Frontend Developer & Project Manager",
    description:
      "Salon management platform featuring a public website and an admin dashboard for managing branches, staff, services, appointments, expenses, transactions, job applications and Paystack payment workflows.",
  },
  {
    name: "Ticketist",
    link: "https://ticketist-f5bo.vercel.app/",
    image: ticketistImage,
    technologies: ["Next.js", "Supabase", "Google Auth"],
    role: "Full Stack Developer & Designer",
    description:
      "Event management and ticketing platform featuring QR-code tickets, live updates and personalised event recommendations.",
  },
  {
    name: "Hedge Impact",
    link: "https://www.hedgeimpact.org/",
    image: hedgeimpact,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer & Designer",
    description:
      "Website for a non-governmental organisation, presenting its mission, programmes and social impact through an accessible digital experience.",
  },
  {
    name: "Craft Beer",
    link: "https://craft-pride-i7za.vercel.app/",
    image: craftPrideImage,
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer & Designer",
    description:
      "Brand website for a craft brewery, showcasing its flavours, brewing process, sustainability initiatives and events.",
  },
];

export default function ProjectClient() {
  const reduce = useReducedMotion();

  const [stack, setStack] = useState([0]);
  const active = stack[stack.length - 1];

  const preview = (i) =>
    setStack((s) =>
      s[s.length - 1] === i ? s : [...s.filter((x) => x !== i), i],
    );

  return (
    <section
      aria-labelledby="projects-heading"
      className="mx-auto max-w-[1440px] px-6 pb-24 pt-6 md:px-10 md:pt-12"
    >
      {/* Header */}
      <div className="mb-12 text-center md:mb-20">
        <h1
          id="projects-heading"
          className="font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em]"
        >
          Selected work
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[#ebe7dd]/65">
          A selection of web applications, business platforms and digital
          experiences I&apos;ve contributed to as a frontend developer and
          designer. Some projects are covered by NDAs and can&apos;t be publicly
          shared, but each reflects the work, thought and care I bring to
          building digital products.
        </p>
      </div>

      <div className="grid items-stretch gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16">
        {/* Project list */}
        <div>
          {projects.map((p, i) => (
            <Link
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => preview(i)}
              onFocus={() => preview(i)}
              className={`group block border-t border-[#ebe7dd]/12 py-7 transition-opacity duration-300 last:border-b focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#fcd65c] md:py-9 ${
                active === i ? "" : "md:opacity-40"
              }`}
            >
              {/* Mobile project screenshot */}
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-lg md:hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} website screenshot`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 text-sm text-[#8d9096]">{p.role}</p>

                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                    {p.name}
                  </h2>
                </div>

                <span
                  aria-hidden="true"
                  className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-500 group-hover:rotate-45 ${
                    active === i
                      ? "border-[#fcd65c] bg-[#fcd65c] text-[#17191d]"
                      : "border-[#ebe7dd]/20"
                  }`}
                >
                  <HiArrowUpRight />
                </span>
              </div>

              <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[#ebe7dd]/65">
                {p.description}
              </p>

              <p className="mt-4 text-sm text-[#8d9096]">
                {p.technologies.join(", ")}
              </p>
            </Link>
          ))}
        </div>

        {/* Desktop project preview */}
        <div className="hidden self-stretch md:block">
          <div className="sticky top-28 h-fit">
            <div className="relative aspect-[5/4] overflow-hidden rounded-xl border border-[#ebe7dd]/10 bg-[#ebe7dd]/[0.03]">
              {projects.map((p, i) => (
                <motion.div
                  key={p.name}
                  className="absolute inset-0 flex items-center justify-center p-3 lg:p-5"
                  style={{ zIndex: stack.indexOf(i) }}
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{
                    clipPath: stack.includes(i)
                      ? "inset(0% 0% 0% 0%)"
                      : "inset(100% 0% 0% 0%)",
                  }}
                  transition={{
                    duration: reduce ? 0 : 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Image
                    src={p.image}
                    alt={`${p.name} project preview`}
                    fill
                    sizes="45vw"
                    priority={i === 0}
                    className="object-contain object-center"
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-[#ebe7dd]/80">
                {projects[active].name}
              </p>

              <p className="text-xs uppercase tracking-[0.18em] text-[#8d9096]">
                Selected work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
