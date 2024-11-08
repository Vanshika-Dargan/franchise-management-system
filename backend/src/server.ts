import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import leadRoutes from './modules/leads/routes'
import authRoutes from './modules/auth/routes'
dotenv.config({ path: '../.env' });

const app = express();
app.use(express.json());


app.use('/api', leadRoutes);
app.use('/auth',authRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Franchise Platform API');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(); 
});

const connectDB = async () => {
    try {
    if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined');
    }
          
      await mongoose.connect(process.env.MONGO_URI , {
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1); 
    }
  };