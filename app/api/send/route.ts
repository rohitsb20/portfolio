import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, message } = await request.json();

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send the email
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", //
      to: process.env.MY_EMAIL || "your-email@example.com", //
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      // You can also use HTML:
      html: `
        <h2>New Contact Form Submission FROM PORTFOLIO</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
