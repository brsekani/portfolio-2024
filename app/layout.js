import { Varela_Round, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lawal Temidayo Portfolio",
  description: "The best frontend developer in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${varela.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-white`}
      >
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0f0f0f]/70 border-b border-white/[0.06]">
          <div className="max-w-[1440px] mx-auto px-8 md:px-0">
            <nav className="flex items-center justify-between py-5">
              <Link
                href={"/"}
                className="flex items-center gap-1.5 font-bold md:text-xl text-lg text-[#fcd65c] tracking-widest"
              >
                LAWAL
                <span className="w-1.5 h-1.5 rounded-full bg-[#fcd65c] animate-pulse" />
              </Link>

              <div className="md:flex hidden items-center gap-6">
                <Link
                  href="/project"
                  className="text-[13px] text-white/50 tracking-widest hover:text-[#fcd65c] transition-colors no-underline"
                >
                  Projects
                </Link>

                <Link
                  href="/aboutMe"
                  className="text-[13px] text-white/50 tracking-widest hover:text-[#fcd65c] transition-colors no-underline"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-[13px] text-white/50 tracking-widest hover:text-[#fcd65c] transition-colors no-underline"
                >
                  Blog
                </Link>
              </div>

              <Link
                href="https://drive.google.com/file/d/1I1LDG4VdOkpqJHMhM3gQmMMpzNDModlQ/view?usp=sharing"
                target="_blank"
                className="text-[13px] px-4 py-1.5 border border-[#fcd65c]/50 text-[#fcd65c] rounded-md hover:bg-[#fcd65c] hover:text-[#0f0f0f] transition-all no-underline"
              >
                My CV ↗
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="pt-[90px]">{children}</main>
      </body>
    </html>
  );
}
