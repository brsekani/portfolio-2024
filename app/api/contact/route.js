import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Contact form email credentials are missing.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const { name, email, subject, message, company } = await request.json();

    // Honeypot: silently reject likely automated submissions.
    if (company) {
      return NextResponse.json({ message: "Message received." });
    }

    // Validate required fields.
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { message: "Please complete all fields." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Prevent excessively large submissions.
    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { message: "Your message is too long." },
        { status: 400 },
      );
    }

    const safeName = name.trim();
    const safeEmail = email.trim();
    const safeSubject = subject.trim().replace(/[\r\n]+/g, " ");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: {
        name: safeName,
        address: safeEmail,
      },
      subject: `Portfolio enquiry: ${safeSubject}`,
      text: `
You have received a new message from your portfolio.

Name: ${safeName}
Email: ${safeEmail}
Subject: ${safeSubject}

Message:
${message.trim()}
      `,
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Unable to send your message. Please try again later." },
      { status: 500 },
    );
  }
}
