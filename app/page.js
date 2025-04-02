// ICONS FROM REACT ICONS
"use client";
import { LuFolderHeart } from "react-icons/lu";
import { IoPersonCircle } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#232323] text-white font-['Varela_Round']">
      <nav className="flex items-center justify-between w-full max-w-5xl px-2 mt-8">
        <Link
          href="/"
          className="flex items-center text-[#fcd65c] no-underline"
        >
          <h1 className="text-2xl">
            <Typewriter
              words={["SEKANI", "LAWAL", "TEMIDAYO"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </h1>

          <GoDotFill className="ml-1" color="#fcd65c" size={30} />
        </Link>

        <Link
          href="https://drive.google.com/file/d/1-Lu9BUKYtEDcIr7b8BgN3V10gHN0DyhL/view?usp=sharing"
          className="text-[#fcd65c] no-underline"
        >
          <button className="w-24 h-10 border-2 border-[#fcd65c] bg-[#232323] text-[#fcd65c] hover:bg-[#fcd65c] hover:text-[#232323]">
            My CV
          </button>
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-between gap-12 px-5 mt-12 lg:flex-row lg:gap-24 lg:mt-32">
        <div className="md:text-left">
          <h6 className="text-[#fcd65c] text-lg">Hello 👋</h6>
          <h1 className="mt-4 text-4xl font-bold">
            I&apos;m{" "}
            <span style={{ color: "#fcd65c" }}>
              <Typewriter
                words={[
                  "Lawal Temidayo",
                  "a Frontend Developer",
                  "a Tech Enthusiast",
                  "a Problem Solver",
                  "a Creative Thinker",
                  "a Team Collaborator",
                  "Passionate About Design",
                  "Eager to Learn",
                  "Building Modern Web Apps",
                ]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="max-w-lg mt-4 leading-7">
            A passionate and self-taught frontend developer with a keen eye for
            design and a love for creating intuitive and visually appealing user
            experiences.
          </p>
          <Link
            href="https://drive.google.com/file/d/1-Lu9BUKYtEDcIr7b8BgN3V10gHN0DyhL/view?usp=sharing"
            className="text-[#232323] no-underline"
          >
            <button className="w-44 h-12 mt-4 font-bold bg-[#fcd65c] text-[#232323] hover:bg-[#232323] hover:text-[#fcd65c] border-[#fcd65c] border">
              Download Resume
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Link
            href="/project"
            className="flex flex-col items-center justify-center w-36 h-28 border-2 border-[#fcd65c] rounded-lg hover:bg-[#fcd65c] text-white no-underline"
          >
            <LuFolderHeart className="text-3xl" />
            <p className="mt-2 text-sm">My Project</p>
          </Link>
          <Link
            href="/aboutMe"
            className="flex flex-col items-center justify-center w-36 h-28 border-2 border-[#fcd65c] rounded-lg hover:bg-[#fcd65c] text-white no-underline"
          >
            <IoPersonCircle className="text-3xl" />
            <p className="mt-2 text-sm">About me</p>
          </Link>

          <Link
            href="blog"
            className="flex flex-col items-center justify-center w-36 h-28 border-2 border-[#fcd65c] rounded-lg hover:bg-[#fcd65c] text-white no-underline"
          >
            <FaPenToSquare className="text-2xl" />
            <p className="mt-2 text-sm">My Blog</p>
          </Link>

          <Link
            href="/contactMe"
            className="flex flex-col items-center justify-center w-36 h-28 border-2 border-[#fcd65c] rounded-lg hover:bg-[#fcd65c] text-white no-underline"
          >
            <MdOutgoingMail className="text-3xl" />
            <p className="mt-2 text-sm">Contact me</p>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center gap-6 mt-10 mb-10">
        <Link
          href="mailto:lawaltemidayo06@gmail.com"
          className="text-white no-underline"
        >
          <IoMdMail className="text-2xl" style={iconStyle} />
        </Link>
        <Link
          href="https://github.com/brsekani/"
          className="text-white no-underline"
        >
          <FaGithub className="text-2xl" style={iconStyle} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lawal-temidayo-0b024b270/"
          className="text-white no-underline"
        >
          <FaLinkedin className="text-2xl" style={iconStyle} />
        </Link>
        <Link
          href="https://twitter.com/SeKaNi_TeCh"
          className="text-white no-underline"
        >
          <FaTwitter className="text-2xl" style={iconStyle} />
        </Link>
      </footer>
    </div>
  );
}
