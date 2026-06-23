import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Instantiate inside the handler — not at module level —
    // so build-time static analysis never tries to call Resend.
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["maazalisshahid@gmail.com"],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:12px;">
          <h2 style="margin:0 0 16px;color:#0a0a0b;font-size:20px;">New message from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#52555c;font-size:13px;width:80px;">Name</td>
              <td style="padding:8px 0;color:#0a0a0b;font-size:13px;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#52555c;font-size:13px;">Email</td>
              <td style="padding:8px 0;color:#0a0a0b;font-size:13px;font-weight:600;">
                <a href="mailto:${email}" style="color:#2f6fff;">${email}</a>
              </td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e3e3e6;margin:16px 0;" />
          <p style="color:#0a0a0b;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
          <hr style="border:none;border-top:1px solid #e3e3e6;margin:16px 0;" />
          <p style="color:#8b8e96;font-size:12px;margin:0;">
            Sent via your portfolio — reply to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please email directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
