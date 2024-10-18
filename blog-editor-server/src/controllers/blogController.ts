import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import Blog from "../models/blogModel";
import User from "../models/userModel";

export const addBlog = asyncHandler(async (req: Request, res: Response) => {
  const userId = req?.user?.id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).json({
      success: false,
      message: "User Not Found",
    });
    return;
  }

  const { title, description, isCompleted } = req.body as {
    title?: string;
    description?: string;
    isCompleted?: boolean;
  };

  if (!title || !description) {
    res.status(401).json({
      success: false,
      message: "Please Provide Required Fields",
    });
    return;
  }

  const blog = await Blog.create({
    title,
    description,
    isCompleted,
    userId: user?._id,
  });

  user.blogs.push(blog._id);

  await user.save();

  res.status(201).json({
    success: true,
    message: "Blog Added Successfully",
    blog,
  });
});

export const getBlogs = asyncHandler(async (req: Request, res: Response) => {
  const userId = req?.user?.id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).json({
      success: false,
      message: "User Not Found",
    });
    return;
  }
  const blogs = await Blog.find({ userId: user?._id }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    blogs,
  });
});

export const getBlog = asyncHandler(async (req: Request, res: Response) => {
  const userId = req?.user?.id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).json({
      success: false,
      message: "User Not Found",
    });
  }

  const { id } = req.params;

  const blog = await Blog.findOne({ _id: id, userId: user?._id });

  if (!blog) {
    res.status(400).json({
      success: false,
      message: "Blog Not Found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    blog,
  });
});

export const getPreview = asyncHandler(async (req: Request, res: Response) => {
  const userId = req?.user?.id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).json({
      success: false,
      message: "User Not Found",
    });
  }

  const { id } = req.params;

  const blog = await Blog.findOne({ _id: id, userId: user?._id });

  if (!blog) {
    res.status(400).json({
      success: false,
      message: "Blog Not Found",
    });
    return;
  }

  res.status(200).send(JSON.parse(blog.description).html);
});

export const updateBlog = asyncHandler(async (req: Request, res: Response) => {
  const userId = req?.user?.id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).json({
      success: false,
      message: "User Not Found",
    });
  }

  const { id } = req.params;

  const { title, description, isCompleted } = req.body as {
    title?: string;
    description?: string;
    isCompleted?: boolean;
  };

  const blog = await Blog.findOne({ _id: id, userId: user?._id });

  if (!blog) {
    res.status(400).json({
      success: false,
      message: "Blog Not Found",
    });
    return;
  }

  if (title !== undefined) {
    blog.title = title;
  }

  if (description !== undefined) {
    blog.description = description;
  }

  if (isCompleted !== undefined) {
    blog.isCompleted = isCompleted;
  }

  const updatedBlog = await blog.save();

  res.status(200).json({
    success: true,
    blog: updatedBlog,
    message: "Blog Updated Successfully",
  });
});

export const deleteBlog = asyncHandler(async (req: Request, res: Response) => {
  const userId = req?.user?.id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).json({
      success: false,
      message: "User Not Found",
    });
    return;
  }

  const { id } = req.params;

  const blog = await Blog.findOne({ _id: id, userId: user?._id });

  if (!blog) {
    res.status(401).json({
      success: false,
      message: "Blog Not Found",
    });
    return;
  }

  user.blogs = user.blogs.filter((blogId) => blogId.toString() !== id);

  await user.save();

  await blog.deleteOne({ _id: id });

  res.status(200).json({
    success: true,
    message: "Blog Deleted Successfully",
    blog,
  });
});

export const toggleBlogComplete = asyncHandler(async (req: Request, res: Response) => {
  const userId = req?.user?.id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(400).json({
      success: false,
      message: "User Not Found",
    });
    return;
  }

  const { id } = req.params;

  const blog = await Blog.findOne({ _id: id, userId: user?._id });

  if (!blog) {
    res.status(401).json({
      success: false,
      message: "Blog Not Found",
    });
    return;
  }

  // Toggle the isCompleted field
  blog.isCompleted = !blog.isCompleted;

  const updatedBlog = await blog.save();

  res.status(200).json({
    success: true,
    blog: updatedBlog,
  });
});
