"use server";

import nodemailer from "nodemailer";

type ContactResult = {
  success: boolean;
  message: string;
};

function getString(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration is missing.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function submitContactForm(
  formData: FormData,
): Promise<ContactResult> {
  try {
    /* ============================================================
       GET FORM DATA
    ============================================================ */

    const name = getString(formData, "name");
    const email = getString(formData, "email");
    const phone = getString(formData, "phone");
    const country = getString(formData, "country");
    const service = getString(formData, "service");
    const message = getString(formData, "message");

    /* ============================================================
       VALIDATION
    ============================================================ */

    if (!name || !email || !phone || !country || !service || !message) {
      return {
        success: false,
        message: "Please complete all required fields.",
      };
    }

    if (name.length > 150) {
      return {
        success: false,
        message: "Name is too long.",
      };
    }

    if (email.length > 200) {
      return {
        success: false,
        message: "Email address is too long.",
      };
    }

    if (phone.length > 50) {
      return {
        success: false,
        message: "Phone number is too long.",
      };
    }

    if (message.length > 5000) {
      return {
        success: false,
        message: "Message is too long.",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    /* ============================================================
       ESCAPED VALUES
    ============================================================ */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCountry = escapeHtml(country);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    /* ============================================================
       SMTP
    ============================================================ */

    const transporter = createTransporter();

    const ownerEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    const senderEmail = process.env.SMTP_USER;

    if (!ownerEmail || !senderEmail) {
      throw new Error("Email configuration is incomplete.");
    }

    /* ============================================================
       OWNER / SENDER EMAIL
    ============================================================ */

    const ownerEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>New Enquiry - MK World</title>

  <style>
    @media only screen and (max-width: 600px) {
      .outer {
        padding: 16px 10px !important;
      }

      .header {
        padding: 24px 18px !important;
      }

      .content {
        padding: 22px 18px !important;
      }

      .footer {
        padding: 18px !important;
      }

      .title {
        font-size: 24px !important;
      }

      .info-cell {
        padding: 8px 0 !important;
      }

      .message-section {
        margin-top: 20px !important;
        padding-top: 18px !important;
      }

      .message-box {
        margin-top: 10px !important;
        padding: 14px !important;
      }

      .button-wrapper {
        margin-top: 20px !important;
      }
    }
  </style>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#030712;
    font-family:Arial,Helvetica,sans-serif;
    color:#ffffff;
  "
>

  <div
    class="outer"
    style="
      padding:28px 15px;
      background:#030712;
    "
  >

    <div
      style="
        max-width:680px;
        margin:0 auto;
        background:#07101f;
        border:1px solid rgba(255,255,255,0.08);
      "
    >

      <!-- HEADER -->

      <div
        class="header"
        style="
          padding:26px 30px;
          background:linear-gradient(135deg,#07101f,#0b1830);
          border-bottom:1px solid rgba(59,130,246,0.18);
        "
      >

        <div
          style="
            color:#60a5fa;
            font-size:11px;
            font-weight:bold;
            letter-spacing:3px;
          "
        >
          MK WORLD
        </div>

        <h1
          class="title"
          style="
            margin:10px 0 0;
            color:#ffffff;
            font-size:28px;
            line-height:1.2;
          "
        >
          New Customer Enquiry
        </h1>

        <p
          style="
            margin:8px 0 0;
            color:#94a3b8;
            font-size:13px;
            line-height:1.6;
          "
        >
          A new enquiry has been submitted through the MK World website.
        </p>

      </div>


      <!-- CONTENT -->

      <div
        class="content"
        style="
          padding:26px 30px;
        "
      >

        <div
          style="
            color:#60a5fa;
            font-size:10px;
            font-weight:bold;
            letter-spacing:2px;
            text-transform:uppercase;
          "
        >
          Customer Information
        </div>


        <!-- CUSTOMER INFORMATION -->

        <table
          style="
            width:100%;
            margin-top:10px;
            border-collapse:collapse;
          "
        >

          <tr>
            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#64748b;
                font-size:13px;
                width:145px;
                vertical-align:top;
              "
            >
              Full Name
            </td>

            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#ffffff;
                font-size:14px;
                font-weight:bold;
                vertical-align:top;
              "
            >
              ${safeName}
            </td>
          </tr>

          <tr>
            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#64748b;
                font-size:13px;
                vertical-align:top;
              "
            >
              Email
            </td>

            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#60a5fa;
                font-size:14px;
                vertical-align:top;
                word-break:break-word;
              "
            >
              ${safeEmail}
            </td>
          </tr>

          <tr>
            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#64748b;
                font-size:13px;
                vertical-align:top;
              "
            >
              Phone / WhatsApp
            </td>

            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#ffffff;
                font-size:14px;
                vertical-align:top;
              "
            >
              ${safePhone}
            </td>
          </tr>

          <tr>
            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#64748b;
                font-size:13px;
                vertical-align:top;
              "
            >
              Country
            </td>

            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#ffffff;
                font-size:14px;
                vertical-align:top;
              "
            >
              ${safeCountry}
            </td>
          </tr>

          <tr>
            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#64748b;
                font-size:13px;
                vertical-align:top;
              "
            >
              Service
            </td>

            <td
              class="info-cell"
              style="
                padding:9px 0;
                color:#ffffff;
                font-size:14px;
                vertical-align:top;
              "
            >
              ${safeService}
            </td>
          </tr>

        </table>


        <!-- MESSAGE -->

        <div
          class="message-section"
          style="
            margin-top:22px;
            padding-top:20px;
            border-top:1px solid rgba(255,255,255,0.07);
          "
        >

          <div
            style="
              color:#60a5fa;
              font-size:10px;
              font-weight:bold;
              letter-spacing:2px;
              text-transform:uppercase;
            "
          >
            Customer Message
          </div>

          <div
            class="message-box"
            style="
              margin-top:10px;
              padding:16px;
              background:#030712;
              border:1px solid rgba(255,255,255,0.07);
              color:#cbd5e1;
              font-size:14px;
              line-height:1.7;
            "
          >
            ${safeMessage}
          </div>

        </div>


        <!-- BUTTON -->

        <div
          class="button-wrapper"
          style="
            margin-top:22px;
          "
        >

          <a
            href="mailto:${encodeURIComponent(email)}"
            style="
              display:inline-block;
              padding:12px 20px;
              background:#3b82f6;
              color:#ffffff;
              text-decoration:none;
              font-size:13px;
              font-weight:bold;
            "
          >
            Reply to Customer
          </a>

        </div>

      </div>


      <!-- FOOTER -->

      <div
        class="footer"
        style="
          padding:18px 30px;
          background:#02050d;
          border-top:1px solid rgba(255,255,255,0.06);
        "
      >

        <p
          style="
            margin:0;
            color:#64748b;
            font-size:11px;
            line-height:1.6;
          "
        >
          This enquiry was submitted through the official MK World website.
        </p>

      </div>

    </div>

  </div>

</body>
</html>
`;

    /* ============================================================
       CUSTOMER / RECEIVER EMAIL
    ============================================================ */

    const customerEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>Thank You - MK World</title>

  <style>
    @media only screen and (max-width: 600px) {
      .outer {
        padding: 16px 10px !important;
      }

      .header {
        padding: 26px 18px !important;
      }

      .content {
        padding: 22px 18px !important;
      }

      .footer {
        padding: 18px !important;
      }

      .title {
        font-size: 24px !important;
      }

      .enquiry-box {
        padding: 16px !important;
      }

      .enquiry-cell {
        padding: 7px 0 !important;
      }

      .paragraph {
        margin-top: 20px !important;
        line-height: 1.7 !important;
      }

      .button-wrapper {
        margin-top: 20px !important;
      }
    }
  </style>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#030712;
    font-family:Arial,Helvetica,sans-serif;
    color:#ffffff;
  "
>

  <div
    class="outer"
    style="
      padding:28px 15px;
      background:#030712;
    "
  >

    <div
      style="
        max-width:680px;
        margin:0 auto;
        background:#07101f;
        border:1px solid rgba(255,255,255,0.08);
      "
    >

      <!-- HEADER -->

      <div
        class="header"
        style="
          padding:30px;
          text-align:center;
          background:linear-gradient(135deg,#07101f,#0b1830);
        "
      >

        <div
          style="
            display:inline-block;
            padding:8px 12px;
            background:rgba(59,130,246,0.10);
            color:#60a5fa;
            font-size:10px;
            font-weight:bold;
            letter-spacing:3px;
          "
        >
          MK WORLD
        </div>

        <h1
          class="title"
          style="
            margin:16px 0 0;
            color:#ffffff;
            font-size:28px;
            line-height:1.2;
          "
        >
          Thank you, ${safeName}!
        </h1>

        <p
          style="
            margin:9px auto 0;
            max-width:500px;
            color:#94a3b8;
            font-size:13px;
            line-height:1.7;
          "
        >
          We've received your enquiry and our team will review it shortly.
        </p>

      </div>


      <!-- CONTENT -->

      <div
        class="content"
        style="
          padding:26px 30px;
        "
      >

        <!-- ENQUIRY BOX -->

        <div
          class="enquiry-box"
          style="
            padding:20px;
            background:#030712;
            border:1px solid rgba(255,255,255,0.07);
          "
        >

          <div
            style="
              color:#60a5fa;
              font-size:10px;
              font-weight:bold;
              letter-spacing:2px;
              text-transform:uppercase;
            "
          >
            Your Enquiry
          </div>

          <table
            style="
              width:100%;
              margin-top:10px;
              border-collapse:collapse;
            "
          >

            <tr>

              <td
                class="enquiry-cell"
                style="
                  padding:8px 0;
                  color:#64748b;
                  font-size:13px;
                  vertical-align:top;
                "
              >
                Country
              </td>

              <td
                class="enquiry-cell"
                style="
                  padding:8px 0;
                  color:#ffffff;
                  font-size:14px;
                  font-weight:bold;
                  text-align:right;
                  vertical-align:top;
                "
              >
                ${safeCountry}
              </td>

            </tr>

            <tr>

              <td
                class="enquiry-cell"
                style="
                  padding:8px 0;
                  color:#64748b;
                  font-size:13px;
                  vertical-align:top;
                "
              >
                Service
              </td>

              <td
                class="enquiry-cell"
                style="
                  padding:8px 0;
                  color:#ffffff;
                  font-size:14px;
                  text-align:right;
                  vertical-align:top;
                "
              >
                ${safeService}
              </td>

            </tr>

          </table>

        </div>


        <!-- MESSAGE -->

        <p
          class="paragraph"
          style="
            margin:20px 0 0;
            color:#94a3b8;
            font-size:14px;
            line-height:1.8;
          "
        >
          Thank you for choosing MK World. We appreciate your interest
          and look forward to helping you with your plans.
        </p>

        <p
          class="paragraph"
          style="
            margin:12px 0 0;
            color:#94a3b8;
            font-size:14px;
            line-height:1.8;
          "
        >
          If you need to provide additional information, simply reply
          to this email.
        </p>


        <!-- BUTTON -->

        <div
          class="button-wrapper"
          style="
            margin-top:22px;
            text-align:center;
          "
        >

          <a
            href="https://mkworld.org"
            style="
              display:inline-block;
              padding:12px 22px;
              background:#3b82f6;
              color:#ffffff;
              text-decoration:none;
              font-size:13px;
              font-weight:bold;
            "
          >
            Visit MK World
          </a>

        </div>

      </div>


      <!-- FOOTER -->

      <div
        class="footer"
        style="
          padding:18px 30px;
          text-align:center;
          border-top:1px solid rgba(255,255,255,0.06);
          background:#02050d;
        "
      >

        <p
          style="
            margin:0;
            color:#64748b;
            font-size:11px;
          "
        >
          MK World
        </p>

        <p
          style="
            margin:5px 0 0;
            color:#475569;
            font-size:10px;
          "
        >
          Study · Travel · Explore · Umrah
        </p>

      </div>

    </div>

  </div>

</body>
</html>
`;

    /* ============================================================
       SEND BOTH EMAILS
    ============================================================ */

    await Promise.all([
      transporter.sendMail({
        from: `"MK World" <${senderEmail}>`,
        to: ownerEmail,
        replyTo: email,
        subject: `New Enquiry — ${name} — ${service}`,
        text: `
New MK World enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Country: ${country}
Service: ${service}

Message:
${message}
        `,
        html: ownerEmailHtml,
      }),

      transporter.sendMail({
        from: `"MK World" <${senderEmail}>`,
        to: email,
        replyTo: ownerEmail,
        subject: "We received your enquiry — MK World",
        text: `
Hello ${name},

Thank you for contacting MK World.

We have received your enquiry regarding:

Service: ${service}
Country: ${country}

Our team will review your enquiry and get back to you soon.

MK World
Study · Travel · Explore · Umrah
        `,
        html: customerEmailHtml,
      }),
    ]);

    /* ============================================================
       SUCCESS
    ============================================================ */

    return {
      success: true,
      message: "Your enquiry has been sent successfully.",
    };
  } catch (error) {
    console.error("CONTACT SERVER ACTION ERROR:", error);

    return {
      success: false,
      message:
        "We couldn't send your enquiry right now. Please try again later.",
    };
  }
}
