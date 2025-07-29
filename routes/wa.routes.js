import express from 'express';
import { exec } from 'child_process';

const router = express.Router();

router.post('/send-emi-wa-notif', (req, res) => {
  console.log('📩 Triggering WhatsApp message...');

  exec('node notifImpl/sendEmiWaNotif.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error: ${error.message}`);
      return res.status(500).send('Failed to send WhatsApp');
    }
    console.log(`✅ WhatsApp script output: ${stdout}`);
    res.json({ message: 'WhatsApp message sent successfully' });
  });
});

export default router;
