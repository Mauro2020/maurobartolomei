import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const RECIPIENT = process.env.CONTACT_RECIPIENT || "info@bartolomeisystems.com";
const ALLOWED_METHODS = "POST";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  projectType?: string;
  company?: string;
};

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("Missing SMTP configuration");
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const projectType = body.projectType?.trim() ?? "";
    const company = body.company?.trim() ?? "";

    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 });
    }

    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Bartolomei Systems Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `Nuova richiesta dal sito: ${name}`,
      text: [
        `Nome: ${name}`,
        `Email: ${email}`,
        projectType ? `Tipo progetto: ${projectType}` : null,
        "",
        "Messaggio:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>Nuova richiesta dal sito</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${projectType ? `<p><strong>Tipo progetto:</strong> ${escapeHtml(projectType)}</p>` : ""}
        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export function GET() {
  return methodNotAllowed();
}

export function PUT() {
  return methodNotAllowed();
}

export function PATCH() {
  return methodNotAllowed();
}

export function DELETE() {
  return methodNotAllowed();
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: ALLOWED_METHODS,
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function methodNotAllowed() {
  return NextResponse.json(
    { success: false },
    {
      status: 405,
      headers: {
        Allow: ALLOWED_METHODS,
      },
    },
  );
}
