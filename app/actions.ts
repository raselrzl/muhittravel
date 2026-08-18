"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  success: boolean;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const country = String(formData.get("country") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !phone || !country || !service || !message) {
    return {
      success: false,
      message: "Please complete all required fields.",
    };
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
    console.error("SMTP environment variables are missing.");

    return {
      success: false,
      message: "Email service is not configured correctly.",
    };
  }

  if (!process.env.SMTP_PASSWORD) {
    console.error("SMTP_PASSWORD is missing.");

    return {
      success: false,
      message: "Email service is not configured correctly.",
    };
  }

  if (!process.env.CONTACT_RECEIVER) {
    console.error("CONTACT_RECEIVER is missing.");

    return {
      success: false,
      message: "Contact email is not configured correctly.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.verify();

    /*
     * ---------------------------------------------------------
     * EMAIL 1 — SEND ENQUIRY TO TRAVEL FRIENDS
     * ---------------------------------------------------------
     */

    await transporter.sendMail({
      from: `"Travel Friends Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Enquiry — ${country} — ${name}`,

      text: `
New enquiry received from the Travel Friends website.

Name: ${name}
Email: ${email}
Phone: ${phone}
Country: ${country}
Service: ${service}

Message:
${message}
      `,

      html: `
        <div style="margin:0;padding:40px 20px;background:#f3f6fb;font-family:Arial,sans-serif;">
          <div style="max-width:680px;margin:0 auto;background:#ffffff;">

            <div style="
              padding:30px;
              background:#030712;
              color:white;
            ">
              <h1 style="margin:0;font-size:26px;">
                Travel<span style="color:#60a5fa;">Friends</span>
              </h1>

              <p style="
                margin:8px 0 0;
                color:#93c5fd;
                font-size:13px;
              ">
                New website enquiry
              </p>
            </div>

            <div style="padding:32px;">

              <h2 style="
                margin:0 0 24px;
                color:#111827;
                font-size:22px;
              ">
                New Contact Request
              </h2>

              <table style="
                width:100%;
                border-collapse:collapse;
                font-size:14px;
              ">
                <tr>
                  <td style="
                    padding:12px 0;
                    width:130px;
                    font-weight:bold;
                    color:#6b7280;
                  ">
                    Name
                  </td>

                  <td style="
                    padding:12px 0;
                    color:#111827;
                  ">
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px 0;
                    font-weight:bold;
                    color:#6b7280;
                  ">
                    Email
                  </td>

                  <td style="
                    padding:12px 0;
                    color:#111827;
                  ">
                    ${escapeHtml(email)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px 0;
                    font-weight:bold;
                    color:#6b7280;
                  ">
                    Phone
                  </td>

                  <td style="
                    padding:12px 0;
                    color:#111827;
                  ">
                    ${escapeHtml(phone)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px 0;
                    font-weight:bold;
                    color:#6b7280;
                  ">
                    Country
                  </td>

                  <td style="
                    padding:12px 0;
                    color:#111827;
                  ">
                    ${escapeHtml(country)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px 0;
                    font-weight:bold;
                    color:#6b7280;
                  ">
                    Service
                  </td>

                  <td style="
                    padding:12px 0;
                    color:#111827;
                  ">
                    ${escapeHtml(service)}
                  </td>
                </tr>
              </table>

              <div style="
                margin-top:25px;
                padding:22px;
                background:#eff6ff;
                border-left:4px solid #3b82f6;
              ">
                <div style="
                  margin-bottom:10px;
                  font-weight:bold;
                  color:#111827;
                ">
                  Message
                </div>

                <div style="
                  white-space:pre-wrap;
                  color:#374151;
                  line-height:1.7;
                  font-size:14px;
                ">
                  ${escapeHtml(message)}
                </div>
              </div>

              <div style="
                margin-top:30px;
                padding-top:20px;
                border-top:1px solid #e5e7eb;
                font-size:12px;
                color:#9ca3af;
              ">
                This enquiry was submitted through the Travel Friends website.
              </div>

            </div>
          </div>
        </div>
      `,
    });

    /*
     * ---------------------------------------------------------
     * EMAIL 2 — THANK YOU EMAIL TO CUSTOMER
     * ---------------------------------------------------------
     */

    await transporter.sendMail({
      from: `"Travel Friends" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Travel Friends",

      text: `
Hi ${name},

Thank you for contacting Travel Friends.

We have successfully received your enquiry regarding ${country}.

Service: ${service}

Our team will review your message and get back to you as soon as possible.

Thank you for choosing Travel Friends.

Study • Travel • Explore

Travel Friends
      `,

      html: `
        <div style="
          margin:0;
          padding:40px 20px;
          background:#f3f6fb;
          font-family:Arial,sans-serif;
        ">

          <div style="
            max-width:620px;
            margin:0 auto;
            background:white;
            border:1px solid #e5e7eb;
          ">

            <div style="
              padding:30px;
              background:#030712;
            ">
              <h1 style="
                margin:0;
                color:white;
                font-size:26px;
              ">
                Travel<span style="color:#60a5fa;">Friends</span>
              </h1>

              <p style="
                margin:8px 0 0;
                color:#93c5fd;
                font-size:13px;
              ">
                Study • Travel • Explore
              </p>
            </div>

            <div style="padding:35px;">

              <div style="
                width:56px;
                height:56px;
                background:#eff6ff;
                display:flex;
                align-items:center;
                justify-content:center;
                margin-bottom:24px;
              ">
                <span style="
                  color:#2563eb;
                  font-size:28px;
                ">
                  ✓
                </span>
              </div>

              <h2 style="
                margin:0;
                color:#111827;
                font-size:24px;
              ">
                Thank you for contacting us!
              </h2>

              <p style="
                margin-top:18px;
                color:#4b5563;
                line-height:1.7;
                font-size:15px;
              ">
                Hi ${escapeHtml(name)},
              </p>

              <p style="
                color:#4b5563;
                line-height:1.7;
                font-size:15px;
              ">
                We have successfully received your enquiry.
                Thank you for reaching out to Travel Friends.
              </p>

              <div style="
                margin:25px 0;
                padding:20px;
                background:#eff6ff;
                border-left:4px solid #3b82f6;
              ">

                <p style="
                  margin:0;
                  color:#374151;
                  font-size:14px;
                ">
                  <strong>Destination:</strong>
                  ${escapeHtml(country)}
                </p>

                <p style="
                  margin:10px 0 0;
                  color:#374151;
                  font-size:14px;
                ">
                  <strong>Service:</strong>
                  ${escapeHtml(service)}
                </p>

              </div>

              <p style="
                color:#4b5563;
                line-height:1.7;
                font-size:15px;
              ">
                Our team will review your message and get back to you
                as soon as possible.
              </p>

              <p style="
                margin-top:30px;
                color:#4b5563;
                line-height:1.7;
              ">
                Best regards,<br />
                <strong style="color:#111827;">
                  Travel Friends
                </strong>
              </p>

            </div>

            <div style="
              padding:20px 35px;
              border-top:1px solid #e5e7eb;
            ">
              <p style="
                margin:0;
                color:#9ca3af;
                font-size:12px;
                line-height:1.6;
              ">
                This is an automatic confirmation email from Travel Friends.
              </p>
            </div>

          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: "Thank you! Your enquiry has been sent successfully.",
    };
  } catch (error) {
    console.error("Failed to send contact emails:", error);

    return {
      success: false,
      message: "We could not send your enquiry right now. Please try again.",
    };
  }
}
