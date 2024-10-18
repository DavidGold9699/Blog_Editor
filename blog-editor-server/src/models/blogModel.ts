import mongoose, { Schema, Document } from "mongoose";

export interface BlogSchemaInterface extends Document {
  title: string;
  description: string;
  isCompleted: boolean;
  userId: mongoose.Schema.Types.ObjectId;
}

const blogSchema = new Schema<BlogSchemaInterface>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Blog = mongoose.model<BlogSchemaInterface>("Blog", blogSchema);

export default Blog;
