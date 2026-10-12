import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const message = String(body.message ?? "").trim();
  const consent = body.consent === true || body.consent === "on";

  if (!name || !email || !projectType || !message || !consent) {
    return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  // Log in development; wire CONTACT_WEBHOOK_URL or email provider in production.
  if (process.env.CONTACT_WEBHOOK_URL) {
    await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company: body.company, projectType, message }),
    });
  } else {
    console.info("[contact]", { name, email, projectType, messageLength: message.length });
  }

  return NextResponse.json({
    ok: true,
    message: process.env.CONTACT_WEBHOOK_URL
      ? "Message sent."
      : "Message received (development mode — configure CONTACT_WEBHOOK_URL for delivery).",
  });
}
