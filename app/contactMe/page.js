import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact | Lawal Temidayo – Frontend Developer",
  description:
    "Contact Lawal Temidayo, a Frontend Developer specialising in React.js, Next.js and React Native, for freelance projects, job opportunities and collaborations.",
  alternates: {
    canonical: "/contactMe",
  },
  openGraph: {
    title: "Contact Lawal Temidayo",
    description:
      "Get in touch with Lawal Temidayo about frontend development projects, collaborations and job opportunities.",
    url: "/contactMe",
    type: "website",
  },
};

const EMAIL = "lawaltemidayo06@gmail.com";

const LINKS = [
  {
    href: "https://github.com/brsekani/",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/lawal-temidayo-0b024b270/",
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/SeKaNi_TeCh",
    label: "Twitter",
  },
];

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="mx-auto max-w-[1440px] px-6 pb-24 pt-6 md:px-10 md:pt-12"
    >
      <h1
        id="contact-heading"
        className="max-w-full text-center font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em]"
      >
        Let&apos;s talk about everything.
      </h1>

      <div className="mt-14 grid gap-16 md:mt-24 md:grid-cols-[1fr_1.1fr] md:gap-24">
        {/* Direct contact */}
        <div>
          <p className="max-w-[44ch] text-[17px] leading-relaxed text-[#ebe7dd]/65">
            I&apos;m always open to new projects, creative ideas and
            opportunities to be part of your vision. Write to me directly or use
            the contact form.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group mt-8 inline-block break-all font-[family-name:var(--font-display)] text-[clamp(1.35rem,3vw,2.25rem)] font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcd65c]"
          >
            <span className="bg-[linear-gradient(#fcd65c,#fcd65c)] bg-[length:0%_3px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_3px] motion-reduce:transition-none">
              {EMAIL}
            </span>
          </a>

          <nav aria-label="Social media profiles">
            <ul className="mt-12">
              {LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-t border-[#ebe7dd]/12 py-4 text-lg transition-colors hover:text-[#fcd65c] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#fcd65c] md:max-w-sm"
                  >
                    {label}
                    <HiArrowUpRight
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </Link>
                </li>
              ))}
              <li
                aria-hidden="true"
                className="border-t border-[#ebe7dd]/12 md:max-w-sm"
              />
            </ul>
          </nav>
        </div>

        {/* Contact form */}
        <ContactForm email={EMAIL} />
      </div>
    </section>
  );
}
