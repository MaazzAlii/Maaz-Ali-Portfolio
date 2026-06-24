import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json().catch(() => ({}));

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set in environment variables.");
    return NextResponse.json(
      { error: "Email service not configured. Please contact maazalisshahid@gmail.com directly." },
      { status: 503 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    console.log(`[contact] Sending email from ${email} (${name})`);

    const { data, error } = await resend.emails.send({
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
              <td style="padding:8px 0;color:#0a0a0b;font-size:13px;font-weight:600;">${email}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e3e3e6;margin:16px 0;" />
          <p style="color:#0a0a0b;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
          <hr style="border:none;border-top:1px solid #e3e3e6;margin:16px 0;" />
          <p style="color:#8b8e96;font-size:12px;margin:0;">
            Sent via maazali.dev — reply to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend API error:", JSON.stringify(error));
      return NextResponse.json(
        { error: `Failed to send: ${error.message}` },
        { status: 500 }
      );
    }

    console.log("[contact] Email sent successfully. ID:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] Unexpected error:", msg);
    return NextResponse.json({ error: `Server error: ${msg}` }, { status: 500 });
  }
}
