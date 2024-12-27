import { GoDotFill } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const metadata = {
  title: "Contact Lawal Temidayo",
  description: "Get in touch with best developer in town",
};

export default function Page() {
  const iconStyle = {
    cursor: "pointer",
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#232323] text-white font-['Varela_Round'] w-full px-10 py-10">
      <div className="flex items-center justify-center mt-10 mb-4 w-full">
        <div className="flex items-center">
          <h1 className="text-[#fcd65c] text-3xl text-nowrap">Contact Me</h1>
          <GoDotFill color="#fcd65c" size={30} />
        </div>
        <hr className="flex-grow border-t w-full border-gray-400 ml-4 hidden sm:flex" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-8 mb-8 gap-10">
        {/* Left Section: Contact Message */}
        <div className="flex flex-col items-center md:items-start lg:w-1/3 text-center md:text-left">
          <h2 className="text-[#fcd65c] text-2xl font-semibold">
            Let&#39;s talk about everything!
          </h2>
          <p className="mt-2 text-lg leading-relaxed w-full lg:w-96">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
          </p>

          <div className="flex items-center gap-6 mt-6">
            <a
              href="mailto:lawaltemidayo06@gmail.com"
              className="text-white hover:text-[#fcd65c] transition-colors"
              style={iconStyle}
            >
              <IoMdMail size={30} />
            </a>
            <a
              href="https://github.com/brsekani/"
              className="text-white hover:text-[#fcd65c] transition-colors"
              style={iconStyle}
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/lawal-temidayo-0b024b270/"
              className="text-white hover:text-[#fcd65c] transition-colors"
              style={iconStyle}
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://twitter.com/SeKaNi_TeCh"
              className="text-white hover:text-[#fcd65c] transition-colors"
              style={iconStyle}
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1 text-[#fcd65c]">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full h-12 rounded-full bg-gray-700 text-white px-4 focus:ring-2 focus:ring-[#fcd65c] transition"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-[#fcd65c]">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-12 rounded-full bg-gray-700 text-white px-4 focus:ring-2 focus:ring-[#fcd65c] transition"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-[#fcd65c]">Subject</label>
              <input
                type="text"
                placeholder="Your subject"
                className="w-full h-12 rounded-full bg-gray-700 text-white px-4 focus:ring-2 focus:ring-[#fcd65c] transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-[#fcd65c]">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full h-32 rounded-lg bg-gray-700 text-white p-4 focus:ring-2 focus:ring-[#fcd65c] transition"
              ></textarea>
            </div>

            <button className="w-full lg:w-1/3 h-12 bg-[#fcd65c] text-gray-800 rounded-full border-2 border-[#fcd65c] hover:bg-gray-800 hover:text-[#fcd65c] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
