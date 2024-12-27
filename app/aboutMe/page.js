import { GoDotFill } from "react-icons/go";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiSupabase,
  SiFramer,
  SiReactquery,
  SiNextdotjs,
} from "react-icons/si";
import { DiVisualstudio, DiNodejs } from "react-icons/di"; // Add Node.js Icon
import { AiFillApi } from "react-icons/ai";

import Head from "next/head";
import Image from "next/image"; // Import Next.js Image component

export const metadata = {
  title: "About Me - Frontend Developer",
  description: "Learn about my expertise and skills in web development.",
};

export default function Page() {
  return (
    <>
      {/* <div>
        <title>About Me - Frontend Developer</title>
        <meta
          name="description"
          content="Learn about my expertise and skills in web development."
        />
        <meta name="author" content="Lawal Temidayo" />
        <meta property="og:title" content="About Me - Frontend Developer" />
        <meta
          property="og:description"
          content="Discover my skills in frontend development with a focus on React, Next.js, Tailwind CSS, and more."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        
      </div> */}

      <div className="flex flex-col items-center min-h-screen bg-[#232323] text-white font-['Varela_Round'] w-full px-6 pb-10">
        {/* Header */}
        <div className="flex items-center justify-center mt-10 mb-4 w-full">
          <div className="flex items-center">
            <h1 className="text-[#fcd65c] text-3xl text-nowrap">About Me</h1>
            <GoDotFill color="#fcd65c" size={30} />
          </div>
          <hr className="flex-grow border-t w-full border-gray-400 ml-4 hidden sm:flex" />
        </div>

        {/* Introduction */}
        <div className="about-me-sub flex flex-col items-center text-center mt-10 mb-16">
          <h2 className="text-2xl font-semibold">My Expertise</h2>
          <p className="mt-4 text-lg leading-relaxed max-w-3xl">
            I am a passionate frontend developer with a knack for creating
            seamless and dynamic user experiences. My expertise lies in building
            highly interactive web applications using cutting-edge technologies
            such as React, Next.js, Tailwind CSS, Node.js, and more.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mx-2">
          {/* Design Section */}
          <div className="skills flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#fcd65c]">DESIGN</h3>
            <div className="skill-icons flex justify-center gap-6 mt-4">
              <TiHtml5 size={85} color="#e54d26" />
              <FaCss3Alt size={75} color="#264de4" />
              <SiTailwindcss size={75} color="#38B2AC" />
            </div>
            <p className="mt-4 text-center max-w-md">
              Designing with a user-first approach is my priority. I focus on
              creating intuitive, accessible, and responsive layouts that
              enhance the overall user experience.
            </p>
          </div>

          {/* Code Section */}
          <div className="skills flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#fcd65c]">CODE</h3>
            <div className="skill-icons flex justify-center gap-6 mt-4">
              <SiJavascript size={75} color="#f0db4f" />
              <FaReact size={75} color="#61DBFB" />
              <SiNextdotjs size={75} color="" />
            </div>
            <p className="mt-4 text-center max-w-md">
              From concept to execution, I love translating ideas into clean and
              efficient code. Using React, Redux, and JavaScript, I create
              dynamic, responsive applications that delight users.
            </p>
          </div>

          {/* Tools Section */}
          <div className="skills flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#fcd65c]">TOOLS</h3>
            <div className="skill-icons flex justify-center gap-6 mt-4">
              <DiVisualstudio size={75} color="#0078d7" />
              <FaGithub size={75} />
              <SiSupabase size={75} color="#3ECF8E" />
            </div>
            <p className="mt-4 text-center max-w-md">
              I believe in writing code that is clean, maintainable, and
              optimized. The right tools are essential to efficient development,
              and I use industry-standard solutions to build high-quality
              applications.
            </p>
          </div>

          {/* API & Fetching Section */}
          <div className="skills flex flex-col items-center">
            <h3 className="text-xl font-semibold text-[#fcd65c]">
              API & FETCHING
            </h3>
            <div className="skill-icons flex justify-center gap-6 mt-4">
              <AiFillApi size={75} color="#fcd65c" />
              <SiReactquery size={75} color="#61DBFB" />
              <SiJavascript size={75} color="#f0db4f" />
            </div>
            <p className="mt-4 text-center max-w-md">
              Efficiently managing data is crucial. I leverage APIs and tools
              like Axios and React Query to streamline data fetching, ensuring
              fast and reliable communication between the frontend and backend.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
