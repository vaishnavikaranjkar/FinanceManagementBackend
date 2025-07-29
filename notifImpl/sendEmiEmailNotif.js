import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmiEmailNotif(to, subject, body) {
  try {
    const message = await transporter.sendMail({
      from: `"My Angular App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: body,
      html: `<p>${body}</p>`,
    });

    console.log('✅ Email sent:', message.response);
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw error;
  }
}

