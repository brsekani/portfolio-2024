import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export const metadata = {
  title: "Blog | Lawal Temidayo – Frontend Development",
  description:
    "Articles and insights from Lawal Temidayo on frontend development, React.js, Next.js, JavaScript, TypeScript, UI engineering and building digital products.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Lawal Temidayo",
    description:
      "Notes, lessons and insights on frontend development, React, Next.js and building better digital experiences.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <section
      aria-labelledby="blog-heading"
      className="mx-auto flex min-h-[calc(100dvh-76px)] max-w-[1440px] flex-col items-center justify-center px-6 pb-24 pt-6 md:px-10"
    >
      <h1
        id="blog-heading"
        className="text-center font-[family-name:var(--font-display)] text-[clamp(3rem,11vw,10rem)] font-bold leading-[0.88] tracking-[-0.045em]"
      >
        First posts
        <br />
        coming soon
        <span
          aria-hidden="true"
          className="ml-[0.08em] inline-block h-[0.72em] w-[0.1em] translate-y-[0.04em] bg-[#fcd65c] motion-safe:animate-pulse"
        />
      </h1>

      <p className="mt-8 max-w-[46ch] text-center text-[17px] leading-relaxed text-[#ebe7dd]/65 md:mt-12">
        I&apos;m writing about what I learn while building for the web, with
        practical notes on React, Next.js, JavaScript, TypeScript and the
        interface details that make digital products feel right. New articles
        are coming soon.
      </p>

      <nav
        aria-label="Explore more"
        className="mt-10 flex w-full flex-wrap justify-center gap-3"
      >
        <Link
          href="/project"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fcd65c] px-6 py-3 text-[15px] font-medium text-[#17191d] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c] md:w-fit"
        >
          See my work <HiArrowUpRight aria-hidden="true" />
        </Link>

        <Link
          href="/contactMe"
          className="inline-flex w-full items-center justify-center rounded-full border border-[#ebe7dd]/20 px-6 py-3 text-[15px] transition-colors hover:border-[#ebe7dd]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c] md:w-fit"
        >
          Say hello
        </Link>
      </nav>
    </section>
  );
}
