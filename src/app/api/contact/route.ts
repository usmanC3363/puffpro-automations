import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, plan, date, time, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email to you (admin)
  const adminHTML = `
    <h2>📩 New PuffPro Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Plan:</strong> ${plan || "N/A"}</p>
    <p><strong>Appointment:</strong> ${date || "N/A"} – ${time || "N/A"}</p>
    <p><strong>Message:</strong><br>${message || "No message"}</p>
  `;

  // Email to user
  const userHTML = `
    <div style="font-family: Arial, sans-serif; background:#FFF8F0; color:#222; padding:20px; border-radius:12px;">
      <h2 style="color:#606c38;">Thank you for contacting PuffPro 💨</h2>
      <p>Hey <strong>${name}</strong>,</p>
      <p>We’ve received your message and our team will get back to you shortly.</p>
      <div style="background:#fff; padding:15px; border-radius:8px; margin-top:10px;">
        <p><strong>Your details:</strong></p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone || "N/A"}</p>
        <p>Plan: ${plan || "N/A"}</p>
        <p>Appointment: ${date || "N/A"} – ${time || "N/A"}</p>
      </div>
      <p style="margin-top:20px;">Best,<br><strong>The PuffPro Team</strong></p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_RECEIVER,
      subject: "New PuffPro Contact Form Submission",
      html: adminHTML,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "We've received your message 💨",
      html: userHTML,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
