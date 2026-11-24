"use client";

import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const field =
  "w-full border-0 border-b border-[#ebe7dd]/25 bg-transparent px-0 py-3 text-[17px] text-[#ebe7dd] placeholder:text-[#8d9096] transition-colors focus:border-[#fcd65c] focus:outline-none focus:ring-0 disabled:opacity-50";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      company: formData.get("company"),
    };

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
      setFeedback(
        "Your message has been sent successfully. I'll get back to you soon.",
      );
    } catch (error) {
      setStatus("error");
      setFeedback(
        error.message || "Unable to send your message. Please try again.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Hidden honeypot field for basic spam protection */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="company">Leave this field empty</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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
            maxLength={100}
            autoComplete="name"
            placeholder="Your full name"
            className={field}
            disabled={status === "sending"}
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
            maxLength={254}
            autoComplete="email"
            placeholder="you@example.com"
            className={field}
            disabled={status === "sending"}
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
          maxLength={150}
          placeholder="What is this about?"
          className={field}
          disabled={status === "sending"}
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
          maxLength={5000}
          rows={5}
          placeholder="Tell me about your project"
          className={`${field} resize-none`}
          disabled={status === "sending"}
        />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fcd65c] px-7 py-3.5 text-[15px] font-medium text-[#17191d] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcd65c] md:w-fit"
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
              ? "Message sent"
              : "Send message"}

          {status !== "sending" && <HiArrowUpRight aria-hidden="true" />}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            status === "error"
              ? "text-red-400"
              : status === "sent"
                ? "text-green-400"
                : "text-[#8d9096]"
          }`}
        >
          {feedback}
        </p>
      </div>
    </form>
  );
}
