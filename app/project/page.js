import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

import charizImage from "@/public/charizInteriors.png";
import ticketistImage from "@/public/ticketist.png";
import HRSolutionmage from "@/public/HRSolutionPage.png";
import kanbanMangerImage from "@/public/kanbanManger.png";

export default function Project() {
  const projects = [
    {
      name: "Ticketist",
      link: "https://ticketist-f5bo.vercel.app/",
      image: ticketistImage,
      alt: "Ticketist homepage",
      key: "Ticketist",
      technologies: "Next.js, Tailwind CSS, Supabase, Google Auth",
      role: "Full Stack Developer",
      description: `
        Ticketist is a modern, user-friendly event management platform designed to make discovering and attending events seamless and enjoyable. With features like QR-code ticketing, real-time event updates, and personalized recommendations, Ticketist ensures a hassle-free experience for event-goers. Sign up easily using Google authentication and explore events tailored to your preferences.`,
    },
    {
      name: "Chariz Interiors",
      link: "https://chariz.bojisua.com/",
      image: charizImage,
      alt: "Chariz Interiors homepage",
      key: "chariz",
      technologies: "React, Tailwind CSS, Framer Motion, Axois, Redux",
      role: "Frontend Developer",
      description:
        "A sleek interior design platform showcasing premium designs, services, and portfolios. Implemented modern animations and a responsive layout to enhance user interaction.",
    },
    {
      name: "HR Solution",
      link: "https://hr-solutions-3lbh.vercel.app/",
      image: HRSolutionmage,
      alt: "HR Solution dashboard",
      key: "HR Solution",
      technologies: "Next.js, Tailwind CSS, Framer Motion",
      role: "Frontend Developer",
      description:
        "A powerful HR management tool for efficiently managing employee records, payroll, and tasks. Designed with a user-friendly interface and dynamic feature set.",
    },
    {
      name: "Kanban Manager",
      link: "https://enchanting-pastelito-dafd8b.netlify.app/",
      image: kanbanMangerImage,
      alt: "Kanban Manager interface",
      key: "kanban",
      technologies: "React, Tailwind CSS, Framer Motion",
      role: "Frontend Developer",
      description:
        "A task management app utilizing Kanban methodology. Features drag-and-drop functionality and a clean design to boost productivity and task organization.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#232323] text-white font-['Varela_Round'] w-full px-10 pb-10">
      <div className="flex items-center justify-center w-full mt-10 mb-4">
        <div className="flex items-center">
          <h1 className="text-[#fcd65c] text-3xl text-nowrap">Projects</h1>
          <GoDotFill color="#fcd65c" size={30} />
        </div>
        <hr className="flex-grow hidden w-full ml-4 border-t border-gray-400 sm:flex" />
      </div>

      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.key}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline project-link"
          >
            <div className="relative flex flex-col justify-between w-full max-w-xs overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg project-item bg-[#2a2a2a] h-full">
              <div className="relative w-full h-[200px] bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.alt}
                  className="object-cover w-full h-full"
                  layout="fill"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-lg font-semibold text-[#fcd65c]">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm text-gray-300 flex-grow">
                  {project.description}
                </p>
                <div className="mt-4">
                  <p className="text-sm text-[#fcd65c]">
                    <span className="font-semibold">Technologies:</span>{" "}
                    {project.technologies}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    <span className="font-semibold">Role:</span> {project.role}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
