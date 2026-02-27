import { NextResponse } from "next/server"

interface ContactPayload {
  name: string
  email: string
  phone?: string
  product?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    // Server-side validation
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name is required (minimum 2 characters)." },
        { status: 400 }
      )
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      )
    }

    if (!body.message || body.message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message is required (minimum 10 characters)." },
        { status: 400 }
      )
    }

    if (body.phone && !/^[+\d\s()-]{7,20}$/.test(body.phone)) {
      return NextResponse.json(
        { error: "Invalid phone number format." },
        { status: 400 }
      )
    }

    // Log the contact submission (replace with actual email service in production)
    // Integrations: SendGrid, Resend, AWS SES, Nodemailer, etc.
    console.log("Contact form submission:", {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || "Not provided",
      product: body.product || "Not specified",
      message: body.message.trim(),
      submittedAt: new Date().toISOString(),
    })

    // TODO: Replace with actual email sending service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Windows Plaza <noreply@windowsplaza.in>',
    //   to: 'info@windowsplaza.in',
    //   subject: `New Quote Request from ${body.name}`,
    //   html: `...`,
    // })

    return NextResponse.json(
      { success: true, message: "Your message has been received. We will contact you within 24 hours." },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
