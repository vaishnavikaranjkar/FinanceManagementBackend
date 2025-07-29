import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRoutes from './routes/email.routes.js';
import waNotifRoutes from './routes/wa.routes.js';

dotenv.config();

const app = express();
app.use(cors()); // allow requests from your Angular frontend
app.use(express.json()); // parse JSON bodies

app.use('/api/email', emailRoutes);
app.use('/api/wa', waNotifRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});
