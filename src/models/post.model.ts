// src/models/Post.ts
import mongoose, { Schema, Document } from 'mongoose';

// Define the Post interface for TypeScript
export interface IPost extends Document {
  title: string;
  content: string;
  author?: string; 
  tags?: string[]; 
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Post schema
const postSchema: Schema<IPost> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters long'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true,
      minlength: [10, 'Content must be at least 10 characters long'],
    },
    author: {
      type: String,
      // required: [true, 'Author is required'],
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, 
  }
);

// Export the Post model
export default mongoose.model<IPost>('Post', postSchema);