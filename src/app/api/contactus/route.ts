import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return Response.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const domain =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const logoUrl = `${domain}/assets/images/LogoVersion2.png`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Helvetica, Arial, sans-serif;
          background-color: #f4f6f5;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 30px auto;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e0e0e0;
        }
        .header {
          background-color: #124734;
          color: #ffffff;
          padding: 30px;
          text-align: center;
        }
        .logo {
          width: 120px;
          margin-bottom: 10px;
        }
        .content {
          padding: 30px;
        }
        .title {
          font-size: 18px;
          font-weight: bold;
          color: #124734;
          margin-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 8px;
          text-transform: uppercase;
        }
        .label {
          font-size: 11px;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 4px;
          display: block;
        }
        .value {
          font-size: 15px;
          color: #333;
          margin-bottom: 16px;
        }
        .message-box {
          background: #f7f9f8;
          padding: 20px;
          border-radius: 6px;
          border-left: 4px solid #124734;
          white-space: pre-line;
        }
        .footer {
          background: #fafafa;
          padding: 20px;
          text-align: center;
          font-size: 11px;
          color: #999;
          border-top: 1px solid #eee;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="Nature Win Yala Logo" class="logo" />
          <h2>New Contact Message</h2>
        </div>

        <div class="content">
          <div class="title">Sender Information</div>

          <span class="label">Email Address</span>
          <div class="value">${email}</div>

          <div class="title">Message</div>
          <div class="message-box">
            ${message}
          </div>
        </div>

        <div class="footer">
          <p>© ${new Date().getFullYear()} Nature Win Yala</p>
          <p>This is an automated notification from the Nature Win Yala website booking engine.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    await transporter.sendMail({
      from: `"Nature Win Yala Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${email}`,
      html: htmlTemplate,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}
