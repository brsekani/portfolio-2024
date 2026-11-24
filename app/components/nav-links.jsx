"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/project", label: "Projects" },
  { href: "/aboutMe", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contactMe", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-8 md:flex">
      {NAV.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`group relative text-[14px] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fcd65c] ${
              isActive
                ? "text-[#fcd65c]"
                : "text-[#ebe7dd]/65 hover:text-[#ebe7dd]"
            }`}
          >
            {label}

            <span
              className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-[#fcd65c] transition-transform duration-300 motion-reduce:transition-none ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
