import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendEmiWhatsAppNotif() {
  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: process.env.MY_WHATSAPP_NUMBER,
      body: '📢 Reminder: Your EMI is due today!'
    });

    console.log('✅ Message sent:', message.sid);
  } catch (error) {
    console.error('❌ Error sending message:', error.message);
  }
}

sendEmiWhatsAppNotif();
