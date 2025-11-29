import { QuoteFormSchema, TQuoteForm } from "@/lib/form-schema";
import { TQuoteRes } from "@/lib/types";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) == 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body: TQuoteForm = await request.json();
    const { data, success, error } = QuoteFormSchema.safeParse(body);

    if (!success) {
      return NextResponse.json<TQuoteRes>(
        {
          error: error.message,
          message: "Invalid inputs. Please try again.",
        },
        { status: 400 }
      );
    }

    const { fullName, companyName, jobTitle, roles, staffingVolume, message } =
      data;

    const mailOptions = {
      from: `"Oncrest Quote Request" <${data.fullName}> <${data.email}>`,
      to: process.env.SMTP_USER,
      subject: "New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Roles Needed:</strong> ${roles.join(", ")}</p>
        <p><strong>Staffing Volume:</strong> ${staffingVolume}</p>
        ${
          message
            ? `<p><strong>Message:</strong><br/>${message.replace(
                /\n/g,
                "<br/>"
              )}</p>`
            : ""
        }
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json<TQuoteRes>({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json<TQuoteRes>(
      { error: "Failed to send email", message: error.message },
      { status: 500 }
    );
  }
}
