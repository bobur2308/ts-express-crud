// src/config/db.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI:string = process.env.mongo_uri || 'mongodb://localhost:27017/ts-express-crud';
    const conn = await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully to ' + conn.connection.host);
  } catch (error: any) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); 
  }
};

export default connectDB;