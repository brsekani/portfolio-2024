"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HiArrowUpRight,
  HiOutlineShoppingCart,
  HiOutlineTicket,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

import { FaBitcoin, FaHeart } from "react-icons/fa";
import { PiBeerBottleLight } from "react-icons/pi";

import ticketistImage from "@/public/ticketist.png";
import craftPrideImage from "@/public/craftPride.png";
import hedgeimpact from "@/public/hedgeimpact.png";
import IFETOMarket from "@/public/IFETO-Market.png";
import cryptomadness from "@/public/cryptomadness.png";
import hotela from "@/public/hotela.png";

export default function Project() {
  const projects = [
    {
      name: "IFETO Market",
      link: "https://www.ifetomarket.com/",
      image: IFETOMarket,
      icon: <HiOutlineShoppingCart />,
      technologies: ["Next.js", "Tailwind", "Stripe", "TypeScript"],
      role: "Frontend Developer",
      description:
        "Multi-vendor e-commerce platform connecting customers and vendors with admin approval workflows and seamless checkout.",
    },

    {
      name: "Cryptomadness",
      link: "https://www.cryptomadness.info/",
      image: cryptomadness,
      icon: <FaBitcoin />,
      technologies: ["React", "Tailwind", "Framer", "TypeScript"],
      role: "Frontend Developer",
      description:
        "Secure crypto investment platform where investors connect with traders and monitor profits, losses, and balances in real time.",
    },

    {
      name: "Ticketist",
      link: "https://ticketist-f5bo.vercel.app/",
      image: ticketistImage,
      icon: <HiOutlineTicket />,
      technologies: ["Next.js", "Supabase", "Google Auth"],
      role: "Full Stack + Designer",
      description:
        "Modern event management platform with QR-code ticketing, live updates, and personalized event recommendations.",
    },

    {
      name: "Hotela",
      link: "https://hotela.vercel.app/",
      image: hotela,
      icon: <HiOutlineBuildingOffice2 />,
      technologies: ["Next.js", "Supabase", "Tailwind"],
      role: "Frontend + Designer",
      description:
        "Modern hotel booking platform for discovering, comparing, and reserving accommodations across different budgets.",
    },

    {
      name: "Hedge Impact",
      link: "https://hr-solutions-3lbh.vercel.app/",
      image: hedgeimpact,
      icon: <FaHeart />,
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      role: "Frontend + Designer",
      description:
        "NGO platform showcasing mission, programs, and social impact with accessible and engaging user experience.",
    },

    {
      name: "Craft Beer",
      link: "https://craft-pride-i7za.vercel.app/",
      image: craftPrideImage,
      icon: <PiBeerBottleLight />,
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      role: "Frontend + Designer",
      description:
        "Brand website for a craft brewery showcasing flavors, brewing process, sustainability, and events.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-10 pb-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="md:pt-14 pt-5 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-white/20" />
            <span className="uppercase tracking-[0.25em] text-[11px] text-white/35">
              Selected Work
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Projects & <span className="text-[#fcd65c]">Case Studies</span>
          </h1>

          <p className="mt-5 text-white/45 leading-7 max-w-[600px] text-[15px]">
            A curated selection of real-world products I&apos;ve built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              target="_blank"
              className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[#fcd65c]/20 transition-all duration-300 hover:-translate-y-1 no-underline"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/20 to-transparent" />

                {/* Live badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-[10px] text-white/60 uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Role */}
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#fcd65c]/70 mb-3">
                  {project.role}
                </p>

                {/* Name */}
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-[20px] font-semibold text-white">
                    {project.name}
                  </h2>

                  <div className="w-9 h-9 rounded-xl bg-[#fcd65c]/10 border border-[#fcd65c]/10 flex items-center justify-center text-[#fcd65c] text-lg">
                    {project.icon}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-7 text-white/45 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[11px] border border-white/[0.07] bg-white/[0.03] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.06]">
                  <span className="text-[13px] text-[#fcd65c] flex items-center gap-1">
                    Visit Site
                    <HiArrowUpRight className="text-sm" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
