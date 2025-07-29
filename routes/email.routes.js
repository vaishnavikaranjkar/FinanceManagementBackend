import express from 'express';
import { sendEmiEmailNotif } from '../notifImpl/sendEmiEmailNotif.js';

const router = express.Router();

router.post('/send', async (req, res) => {
  const { to, subject, body } = req.body;

  if (!to || !subject || !body) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('📩 Triggering Email...');

  try {
    await sendEmiEmailNotif(to, subject, body);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;
