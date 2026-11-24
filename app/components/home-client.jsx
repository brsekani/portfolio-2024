"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuHardDriveDownload } from "react-icons/lu";
import { HiArrowUpRight } from "react-icons/hi2";

/*
  Palette
  Graphite  #17191d  page
  Bone      #ebe7dd  text
  Marigold  #fcd65c  your existing brand colour, now used only for the
                     spotlight layer and hover fills
  Smoke     #8d9096  secondary text
*/

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

const LINES = ["Lawal", "Temidayo"];

const SECTIONS = [
  {
    href: "/project",
    title: "Projects",
    note: "Selected work and case studies",
  },
  { href: "/aboutMe", title: "About me", note: "Background and how I work" },
  { href: "/blog", title: "Blog", note: "Notes on what I'm learning" },
  { href: "/contactMe", title: "Contact", note: "Start a conversation" },
];

const SOCIALS = [
  {
    href: "mailto:lawaltemidayo06@gmail.com",
    icon: <IoMdMail />,
    label: "Email",
  },
  { href: "https://github.com/brsekani/", icon: <FaGithub />, label: "GitHub" },
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
];

/* The name, set in giant type. Rendered twice: once as the page, once as the
   spotlight layer. Only the first copy animates in. */

function Name({ animated }) {
  let i = 0;

  return (
    <>
      <h1 className="sr-only">
        Lawal Temidayo — Frontend Developer specialising in React.js, Next.js,
        TypeScript and React Native
      </h1>

      <div
        className="font-[family-name:var(--font-display)] text-center font-bold leading-[0.84] tracking-[-0.045em] text-[clamp(4rem,14vw,13rem)] select-none"
        aria-hidden="true"
      >
        {LINES.map((line) => (
          <span key={line} className="block overflow-hidden pb-[0.06em]">
            {line.split("").map((ch) => {
              const delay = 0.15 + i++ * 0.045;

              return animated ? (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {ch}
                </motion.span>
              ) : (
                <span key={i} className="inline-block">
                  {ch}
                </span>
              );
            })}
          </span>
        ))}
      </div>
    </>
  );
}

export default function HomeClient() {
  const reduce = useReducedMotion();
  const stage = useRef(null);
  const [ready, setReady] = useState(false);

  // Spotlight position + radius (springs make it feel weighted, not glued)
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);
  const x = useSpring(rawX, { stiffness: 220, damping: 28, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 220, damping: 28, mass: 0.6 });
  const r = useSpring(0, { stiffness: 160, damping: 20 });
  const clip = useMotionTemplate`circle(${r}px at ${x}px ${y}px)`;

  // One orchestrated moment: after the letters land, the spotlight sweeps
  // across the name once, then hands control to the pointer.
  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const el = stage.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    const t = setTimeout(() => {
      rawY.set(height * 0.5);
      rawX.set(-200);
      r.set(Math.min(190, width * 0.22));
      animate(rawX, width + 200, {
        duration: 1.8,
        ease: [0.65, 0, 0.35, 1],
        onComplete: () => {
          r.set(0);
          setReady(true);
        },
      });
    }, 1300);
    return () => clearTimeout(t);
  }, [reduce, rawX, rawY, r]);

  const move = (e) => {
    if (!ready || reduce) return;
    const b = stage.current.getBoundingClientRect();
    rawX.set(e.clientX - b.left);
    rawY.set(e.clientY - b.top);
    r.set(e.pointerType === "touch" ? 130 : 170);
  };
  const leave = () => r.set(0);

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-[#17191d] text-[#ebe7dd] font-[family-name:var(--font-body)] selection:bg-[#fcd65c] selection:text-[#17191d]`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Hero */}
        <main className="">
          <div className="flex w-full flex-col items-center justify-center">
            {/* Name section */}
            <div
              ref={stage}
              onPointerMove={move}
              onPointerLeave={leave}
              className="relative flex min-h-[48vh] w-full items-center justify-center overflow-hidden cursor-crosshair touch-pan-y sm:min-h-[58vh] md:min-h-[70vh]"
            >
              <div className="relative w-full">
                <Name animated={!reduce} />

                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden bg-[#fcd65c] text-[#17191d]"
                  style={{
                    clipPath: clip,
                    WebkitClipPath: clip,
                  }}
                >
                  <Name animated={false} />
                </motion.div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="flex w-full flex-col items-center gap-4 px-5 pb-8 sm:gap-5">
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
                <Link
                  href="/project"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fcd65c] px-7 py-3.5 text-sm font-medium text-[#17191d] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c] sm:w-fit sm:text-[15px]"
                >
                  See my work <HiArrowUpRight />
                </Link>

                <Link
                  href="/contactMe"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#ebe7dd]/20 px-7 py-3.5 text-sm transition-colors hover:border-[#ebe7dd]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c] sm:w-fit sm:text-[15px]"
                >
                  Get in touch
                </Link>
              </div>

              <motion.p
                className="text-center text-xs text-[#8d9096] sm:text-sm"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2, duration: 0.8 }}
              >
                <span className="hidden sm:inline">
                  Hover or drag across the name.
                </span>
                <span className="sm:hidden">
                  Touch and drag across the name.
                </span>
              </motion.p>
            </div>
          </div>

          <div className="mt-14 md:grid gap-10 md:mt-20 md:grid-cols-[1.1fr_1fr] md:gap-20 hidden">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug md:text-3xl">
                Frontend developer who designs.
              </p>
              <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-[#ebe7dd]/65">
                I&apos;m a self-taught developer with a designer&apos;s eye. I
                build interfaces that are fast, clear and a little bit
                delightful, and I care about how a product feels as much as how
                it&apos;s put together.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/project"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fcd65c] px-6 py-3 text-[15px] font-medium text-[#17191d] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c] md:w-fit"
                >
                  See my work <HiArrowUpRight />
                </Link>
                <Link
                  href="/contactMe"
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#ebe7dd]/20 px-6 py-3 text-[15px] transition-colors hover:border-[#ebe7dd]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c] md:w-fit"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <dl className="self-end text-[15px]">
              {[
                ["Build with", "React, Next.js, TypeScript, Node.js"],
                ["Style with", "Tailwind CSS"],
                ["Design in", "Figma"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-6 border-t border-[#ebe7dd]/12 py-3.5"
                >
                  <dt className="text-[#8d9096]">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
              <div className="border-t border-[#ebe7dd]/12" />
            </dl>
          </div>

          {/* Navigation rows */}
          <nav aria-label="Sections" className="mt-20 md:mt-28">
            {SECTIONS.map(({ href, title, note }) => (
              <Link
                key={href}
                href={href}
                className="group relative block overflow-hidden border-t border-[#ebe7dd]/12 last:border-b focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#fcd65c]"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#fcd65c] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none" />
                <span className="relative flex items-center justify-between gap-6 px-1 py-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:px-5 group-focus-visible:px-5 group-hover:text-[#17191d] group-focus-visible:text-[#17191d] md:py-8">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-6xl">
                    {title}
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="hidden text-[15px] text-[#8d9096] transition-colors group-hover:text-[#17191d]/70 md:block">
                      {note}
                    </span>
                    <HiArrowUpRight className="text-2xl transition-transform duration-500 group-hover:rotate-45 md:text-4xl" />
                  </span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <footer className="flex flex-wrap items-center justify-between gap-5 py-12">
            <div className="flex gap-2.5">
              {SOCIALS.map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebe7dd]/20 text-base transition-colors hover:border-[#fcd65c] hover:bg-[#fcd65c] hover:text-[#17191d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c]"
                >
                  {icon}
                </Link>
              ))}
            </div>
            <a
              href="mailto:lawaltemidayo06@gmail.com"
              className="text-sm text-[#8d9096] transition-colors hover:text-[#ebe7dd]"
            >
              lawaltemidayo06@gmail.com
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
