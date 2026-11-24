"use client";

import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const field =
  "w-full border-0 border-b border-[#ebe7dd]/25 bg-transparent px-0 py-3 text-[17px] text-[#ebe7dd] placeholder:text-[#8d9096] transition-colors focus:border-[#fcd65c] focus:outline-none focus:ring-0";

export default function ContactForm({ email }) {
  const [status, setStatus] = useState("idle");

  /*
    Your original form had no submit handler, so nothing was sent.
    This opens the visitor's email app with the message filled in, which
    works with no backend. To send from the site itself, replace the body of
    this function with a fetch() to a route handler, Formspree, Web3Forms or
    similar, and set status to "sent" or "error" from the response.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    const href = `mailto:${email}?subject=${encodeURIComponent(
      data.get("subject"),
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
    window.location.href = href;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-[#8d9096]">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm text-[#8d9096]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm text-[#8d9096]">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What is this about?"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-[#8d9096]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project"
          className={`${field} resize-none`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fcd65c] px-7 py-3.5 text-[15px] font-medium text-[#17191d] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c] md:w-fit"
        >
          Send message <HiArrowUpRight />
        </button>
        <p role="status" aria-live="polite" className="text-sm text-[#8d9096]">
          {status === "sent" &&
            "Your email app should open with the message ready to send."}
        </p>
      </div>
    </form>
  );
}
