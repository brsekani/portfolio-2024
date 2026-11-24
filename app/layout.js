import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LuFileText } from "react-icons/lu";
import TawkChat from "./components/chat/TawkChat";
import NavLinks from "./components/nav-links";

const SITE_URL = "https://lawaltemidayo.vercel.app";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Lawal Temidayo | Frontend Developer",
    template: "%s | Lawal Temidayo",
  },

  description:
    "Lawal Temidayo is a Frontend Developer specialising in React.js, Next.js, TypeScript and React Native. Explore selected projects, experience and development skills.",

  applicationName: "Lawal Temidayo Portfolio",

  authors: [
    {
      name: "Lawal Temidayo",
      url: SITE_URL,
    },
  ],

  creator: "Lawal Temidayo",
  publisher: "Lawal Temidayo",

  keywords: [
    "Lawal Temidayo",
    "Frontend Developer",
    "Frontend Developer Nigeria",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript Developer",
    "Web Developer",
    "JavaScript Developer",
    "Frontend Portfolio",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    siteName: "Lawal Temidayo Portfolio",
    title: "Lawal Temidayo | Frontend Developer",
    description:
      "Explore the portfolio of Lawal Temidayo, a Frontend Developer building modern web and mobile experiences with React, Next.js and React Native.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lawal Temidayo | Frontend Developer",
    description:
      "Frontend Developer specialising in React.js, Next.js, TypeScript and React Native.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Lawal Temidayo",
      url: SITE_URL,
      jobTitle: "Frontend Developer",
      description:
        "Frontend Developer specialising in React.js, Next.js, TypeScript and React Native, with additional experience in backend development and API integration.",
      sameAs: [
        "https://github.com/brsekani/",
        "https://www.linkedin.com/in/lawal-temidayo-0b024b270/",
      ],
      knowsAbout: [
        "Frontend Development",
        "React.js",
        "Next.js",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "REST API Integration",
        "Responsive Web Design",
        "Web Development",
        "Mobile App Development",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Benin City",
        addressRegion: "Edo State",
        addressCountry: "NG",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Lawal Temidayo Portfolio",
      description:
        "Personal portfolio showcasing the work, experience and skills of Lawal Temidayo, a Frontend Developer.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body
        className={`${display.variable} ${bodyFont.variable} font-[family-name:var(--font-body)] antialiased bg-[#17191d] text-[#ebe7dd]`}
      >
        <header className="fixed top-0 left-0 z-50 w-full border-b border-[#ebe7dd]/10 bg-[#17191d]/75 backdrop-blur-xl">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10">
            <nav
              aria-label="Main navigation"
              className="flex items-center justify-between py-4"
            >
              <Link
                href="/"
                aria-label="Lawal Temidayo homepage"
                className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcd65c]"
              >
                Lawal<span className="text-[#fcd65c]">.</span>
              </Link>

              <NavLinks />

              <Link
                href="https://docs.google.com/document/d/1JJyPO_drfzuW1svARp6t3SltOccKsECCfXLgDHrZQx8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#ebe7dd]/20 px-4 py-2 text-[13px] transition-colors hover:border-[#fcd65c] hover:bg-[#fcd65c] hover:text-[#17191d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c]"
              >
                <LuFileText size={16} />
                My CV
              </Link>
            </nav>
          </div>
        </header>

        <main className="min-h-dvh pt-[76px]">{children}</main>

        <TawkChat />
      </body>
    </html>
  );
}
