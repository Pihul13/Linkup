import express from 'express';
import dotenv from 'dotenv';
import cookieParse from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

import { connectDB } from './lib/db.js';

dotenv.config()
const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParse());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, // Allow cookies to be sent with requests
}))

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

app.listen(PORT, () => {
  console.log('Server is running on PORT:',+ PORT);
  connectDB();
});