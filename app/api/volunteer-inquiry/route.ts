import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = "info@iesrwanda.org";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) {
      return NextResponse.json(
        { message: "Email delivery is not configured yet. Please email info@iesrwanda.org directly." },
        { status: 503 }
      );
    }

    const data = await request.formData();
    const name = value(data, "name");
    const email = value(data, "email");
    const role = value(data, "volunteerRole");
    const message = value(data, "message");

    if (!name || !email || !role || !message) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const fields = [
      ["Name", name],
      ["Email", email],
      ["Phone / WhatsApp", value(data, "phone")],
      ["School / Organisation", value(data, "school")],
      ["Volunteer role", role],
      ["Why they would like to volunteer", message],
    ];
    const html = fields
      .map(
        ([label, content]) =>
          `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(content || "—").replace(/\n/g, "<br>")}</p>`
      )
      .join("");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `[IES Rwanda Volunteer] ${role} — ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      console.error("Volunteer application delivery failed", response.status, await response.text());
      return NextResponse.json(
        { message: "We could not send your application. Please try again or email info@iesrwanda.org." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Volunteer application sent." });
  } catch (error) {
    console.error("Volunteer application error", error);
    return NextResponse.json(
      { message: "We could not send your application. Please try again or email info@iesrwanda.org." },
      { status: 500 }
    );
  }
}

function value(data: FormData, key: string) {
  return String(data.get(key) || "").trim();
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}
