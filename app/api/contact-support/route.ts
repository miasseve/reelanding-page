import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

type FieldErrors = Record<string, string>;

const trim = (v: unknown) => String(v ?? "").trim();

// Keep these rules in sync with validateBooking() in ContactSlider.jsx.
const validate = (body: Record<string, unknown>): FieldErrors => {
  const errors: FieldErrors = {};
  const name = trim(body.name);
  const storename = trim(body.storename);
  const email = trim(body.email);
  const phone = trim(body.phone);
  const cvr = trim(body.cvr);
  const subject = trim(body.subject);
  const message = trim(body.message);

  if (!name) errors.name = "Full name is required";
  else if (name.length < 2) errors.name = "Please enter your full name";
  else if (name.length > 200) errors.name = "Name is too long";

  if (!storename) errors.storename = "Store name is required";
  else if (storename.length > 200) errors.storename = "Store name is too long";

  if (!email) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email";
  else if (email.length > 254) errors.email = "Email is too long";

  if (phone && (phone.length < 6 || phone.length > 30))
    errors.phone = "Please enter a valid phone number";

  if (cvr && !/^\d{8}$/.test(cvr))
    errors.cvr = "CVR must be exactly 8 digits";

  if (!subject) errors.subject = "Subject is required";
  else if (subject.length > 200) errors.subject = "Subject is too long";

  if (!message) errors.message = "Message is required";
  else if (message.length > 5000) errors.message = "Message is too long";

  return errors;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) || {};

    // Honeypot — silently accept and discard bot submissions.
    if (trim(body._botField)) {
      return NextResponse.json({
        status: 200,
        message: "Thanks! We'll be in touch shortly.",
      });
    }

    const errors = validate(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          status: 400,
          error: "Please fix the highlighted fields and try again.",
          errors,
        },
        { status: 400 }
      );
    }

    const name = trim(body.name);
    const storename = trim(body.storename);
    const email = trim(body.email);
    const phone = trim(body.phone);
    const subject = trim(body.subject);
    const message = trim(body.message);

    const {
      SMTP_HOST = "smtp.gmail.com",
      SMTP_PORT = "465",
      SMTP_USER,
      SMTP_PASS,
      MAIL_TO,
      MAIL_FROM,
    } = process.env;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error("[contact-support] SMTP_USER / SMTP_PASS not set");
      return NextResponse.json(
        { status: 500, error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const port = parseInt(SMTP_PORT, 10);

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === "production",
      },
    });

    const messageHtml = escapeHtml(message).replace(/\n/g, "<br />");

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#ffffff;color:#1a1a1a;">
        <div style="border-bottom:3px solid #FF2E7E;padding-bottom:14px;margin-bottom:20px;">
          <h1 style="font-size:20px;margin:0;">New contact submission</h1>
          <p style="color:#666;font-size:13px;margin:6px 0 0;">${escapeHtml(subject)}</p>
        </div>

        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr>
            <td style="padding:8px 0;color:#666;font-size:13px;width:130px;vertical-align:top;">Name</td>
            <td style="padding:8px 0;font-size:14px;">${escapeHtml(name)}</td>
          </tr>
          ${
            storename
              ? `<tr>
            <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top;">Store / Company</td>
            <td style="padding:8px 0;font-size:14px;">${escapeHtml(storename)}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top;">Email</td>
            <td style="padding:8px 0;font-size:14px;"><a href="mailto:${escapeHtml(email)}" style="color:#FF2E7E;text-decoration:none;">${escapeHtml(email)}</a></td>
          </tr>
          ${
            phone
              ? `<tr>
            <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top;">Phone</td>
            <td style="padding:8px 0;font-size:14px;">${escapeHtml(phone)}</td>
          </tr>`
              : ""
          }
        </table>

        <div style="background:#fdf6f7;border-left:3px solid #FF2E7E;padding:14px 16px;border-radius:6px;">
          <div style="color:#666;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;margin-bottom:8px;">Message</div>
          <div style="font-size:14px;line-height:1.6;">${messageHtml}</div>
        </div>

        <p style="color:#999;font-size:12px;margin-top:24px;text-align:center;">
          Sent from the 2hand2go website contact form
        </p>
      </div>
    `;

    const text = `New contact submission

Subject: ${subject}

Name: ${name}
Store: ${storename || "—"}
Email: ${email}
Phone: ${phone || "—"}

Message:
${message}
`;

    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO || SMTP_USER,
      replyTo: email,
      subject: `[2hand2go] ${subject}`,
      html,
      text,
    });

    return NextResponse.json({
      status: 200,
      message: "Thanks! We'll be in touch shortly.",
    });
  } catch (err) {
    console.error("[contact-support] error:", err);
    return NextResponse.json(
      { status: 500, error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}
