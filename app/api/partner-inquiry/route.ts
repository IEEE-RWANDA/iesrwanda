import { NextResponse } from "next/server";

export const runtime = "nodejs";

const recipient = "info@iesrwanda.org";
const allowedExtensions = new Set(["pdf", "doc", "docx", "ppt", "pptx", "png", "jpg", "jpeg"]);
const maxFiles = 3;
const maxTotalBytes = 10 * 1024 * 1024;

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
    const organisation = value(data, "organisation");
    const partnershipType = value(data, "partnershipType");
    const message = value(data, "message");

    if (!name || !email || !organisation || !partnershipType || !message) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const files = data
      .getAll("attachments")
      .filter((item): item is File => item instanceof File && item.size > 0);
    if (files.length > maxFiles) {
      return NextResponse.json({ message: `Please attach no more than ${maxFiles} files.` }, { status: 400 });
    }

    const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
    if (totalBytes > maxTotalBytes) {
      return NextResponse.json({ message: "Attachments must be 10 MB or less in total." }, { status: 400 });
    }
    if (files.some((file) => !allowedExtensions.has(extension(file.name)))) {
      return NextResponse.json({ message: "One or more attachment types are not supported." }, { status: 400 });
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      }))
    );

    const fields = [
      ["Name", name],
      ["Email", email],
      ["Organisation", organisation],
      ["Role / title", value(data, "jobTitle")],
      ["Phone / WhatsApp", value(data, "phone")],
      ["Website", value(data, "website")],
      ["Partnership interest", partnershipType],
      ["Proposal / reference links", value(data, "links")],
      ["Message", message],
    ];
    const html = fields
      .map(([label, content]) => `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(content || "—").replace(/\n/g, "<br>")}</p>`)
      .join("");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `[IES Rwanda Partnership] ${partnershipType} — ${organisation}`,
        html,
        attachments,
      }),
    });

    if (!response.ok) {
      console.error("Partner enquiry delivery failed", response.status, await response.text());
      return NextResponse.json(
        { message: "We could not send your enquiry. Please try again or email info@iesrwanda.org." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Partnership enquiry sent." });
  } catch (error) {
    console.error("Partner enquiry error", error);
    return NextResponse.json(
      { message: "We could not send your enquiry. Please try again or email info@iesrwanda.org." },
      { status: 500 }
    );
  }
}

function value(data: FormData, key: string) {
  return String(data.get(key) || "").trim();
}

function extension(filename: string) {
  return filename.toLowerCase().split(".").pop() || "";
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
