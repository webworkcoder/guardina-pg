import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, phone, email, message } = await req.json();

    await resend.emails.send({
      from: "Guardian PG <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL as string],
      subject: `New Reservation Request: ${fullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 15px; overflow: hidden;">
          <div style="background-color: #1B5E20; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Stay Reservation</h1>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px;">You have received a new booking enquiry from the website.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Full Name</td>
                <td style="padding: 12px; border: 1px solid #eee;">${fullName}</td>
              </tr>
            
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Mobile Number</td>
                <td style="padding: 12px; border: 1px solid #eee;">${phone || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #eee; font-weight: bold;">Email ID</td>
                <td style="padding: 12px; border: 1px solid #eee;">${email}</td>
              </tr>
            </table>
            
            <div style="margin-top: 25px; padding: 20px; background-color: #f0f4f1; border-left: 4px solid #1B5E20; border-radius: 4px;">
              <strong style="color: #1B5E20;">Additional Requirements:</strong><br/>
              <p style="margin-top: 10px; line-height: 1.6;">${message || "No specific requirements mentioned."}</p>
            </div>
          </div>
          <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            Sent via Guardian PG Website Reservation System
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
