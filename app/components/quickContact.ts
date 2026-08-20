"use server";

import nodemailer from "nodemailer";

type QuickContactResult = {
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

export async function submitQuickContact(
  formData: FormData,
): Promise<QuickContactResult> {
  try {
    const name = getString(formData, "name");
    const email = getString(formData, "email");
    const message = getString(formData, "message");

    /* ============================================================
       VALIDATION
    ============================================================ */

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please complete all fields.",
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
       SAFE HTML VALUES
    ============================================================ */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    /* ============================================================
       SMTP
    ============================================================ */

    const transporter = createTransporter();

    const ownerEmail =
      process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    const senderEmail = process.env.SMTP_USER;

    if (!ownerEmail || !senderEmail) {
      throw new Error("Email configuration is incomplete.");
    }

    /* ============================================================
       OWNER EMAIL
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

  <title>New Contact Message - MK World</title>

  <style>
    @media only screen and (max-width:600px) {
      .outer {
        padding:16px 10px !important;
      }

      .header {
        padding:24px 18px !important;
      }

      .content {
        padding:22px 18px !important;
      }

      .footer {
        padding:18px !important;
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
          style="
            margin:10px 0 0;
            color:#ffffff;
            font-size:26px;
            line-height:1.2;
          "
        >
          New Contact Message
        </h1>

        <p
          style="
            margin:8px 0 0;
            color:#94a3b8;
            font-size:13px;
            line-height:1.6;
          "
        >
          Someone has contacted you through the website.
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
          Contact Information
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
              style="
                padding:8px 0;
                color:#64748b;
                font-size:13px;
                width:120px;
              "
            >
              Name
            </td>

            <td
              style="
                padding:8px 0;
                color:#ffffff;
                font-size:14px;
                font-weight:bold;
              "
            >
              ${safeName}
            </td>
          </tr>

          <tr>
            <td
              style="
                padding:8px 0;
                color:#64748b;
                font-size:13px;
              "
            >
              Email
            </td>

            <td
              style="
                padding:8px 0;
                color:#60a5fa;
                font-size:14px;
                word-break:break-word;
              "
            >
              ${safeEmail}
            </td>
          </tr>

        </table>


        <!-- MESSAGE -->

        <div
          style="
            margin-top:20px;
            padding-top:18px;
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
            Message
          </div>

          <div
            style="
              margin-top:10px;
              padding:15px;
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


        <!-- REPLY -->

        <div style="margin-top:20px;">

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
            Reply to ${safeName}
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
          "
        >
          MK World · Website Contact
        </p>

      </div>

    </div>

  </div>

</body>
</html>
`;

    /* ============================================================
       CUSTOMER EMAIL
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
    @media only screen and (max-width:600px) {
      .outer {
        padding:16px 10px !important;
      }

      .header {
        padding:26px 18px !important;
      }

      .content {
        padding:22px 18px !important;
      }

      .footer {
        padding:18px !important;
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
          style="
            margin:15px 0 0;
            color:#ffffff;
            font-size:26px;
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
          We've received your message and will get back to you shortly.
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
            padding:18px;
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
            Your Message
          </div>

          <p
            style="
              margin:10px 0 0;
              color:#cbd5e1;
              font-size:14px;
              line-height:1.7;
            "
          >
            ${safeMessage}
          </p>

        </div>


        <p
          style="
            margin:18px 0 0;
            color:#94a3b8;
            font-size:14px;
            line-height:1.8;
          "
        >
          Thank you for contacting MK World. We appreciate your interest
          and look forward to helping you.
        </p>


        <div
          style="
            margin-top:20px;
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
        subject: `New Contact Message — ${name}`,
        text: `
New MK World contact message

Name: ${name}
Email: ${email}

Message:
${message}
        `,
        html: ownerEmailHtml,
      }),

      transporter.sendMail({
        from: `"MK World" <${senderEmail}>`,
        to: email,
        replyTo: ownerEmail,
        subject: "We received your message — MK World",
        text: `
Hello ${name},

Thank you for contacting MK World.

We have received your message and our team will get back to you shortly.

Your message:
${message}

MK World
Study · Travel · Explore · Umrah
        `,
        html: customerEmailHtml,
      }),
    ]);

    return {
      success: true,
      message: "Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("QUICK CONTACT SERVER ACTION ERROR:", error);

    return {
      success: false,
      message:
        "We couldn't send your message right now. Please try again later.",
    };
  }
}