import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ngabosevelin@gmail.com", 
        pass: "zpfx qisa azei pnki",
      },
    });

    const mail = await transporter.sendMail({
      from: "ngabosevelin@gmail.com",
      to: "ngaboart123@gmail.com",
      replyTo: email,
      subject: `Purpose of Living`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="text-align: center; color: #333;">Purpose of Living Inquiry</h2>
          <p style="color: #555;">You have received a new message from the website contact form:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; background-color: #f9f9f9; color: #333; font-weight: bold;">Name:</td>
              <td style="padding: 8px; background-color: #f9f9f9; color: #555;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background-color: #fff; color: #333; font-weight: bold;">Email:</td>
              <td style="padding: 8px; background-color: #fff; color: #555;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background-color: #f9f9f9; color: #333; font-weight: bold;">Message:</td>
              <td style="padding: 8px; background-color: #f9f9f9; color: #555;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #555;">Thank you!</p>
          <p style="color: #333; font-weight: bold;">Purpose of Living Team</p>
        </div>
      `,
    });

    console.log("Message sent:", mail.messageId);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
