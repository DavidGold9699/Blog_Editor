import { Router } from "express";
import {
  addBlog,
  deleteBlog,
  getPreview,
  getBlog,
  getBlogs,
  toggleBlogComplete,
  updateBlog,
} from "../controllers/blogController";
import protect from "../middleware/authProtect";

const blogRouter = Router();

blogRouter.use(protect);

blogRouter.get("/get-all", getBlogs);

blogRouter.post("/add", addBlog);

blogRouter.get("/get/:id", getBlog);

blogRouter.get("/preview/:id", getPreview);

blogRouter.put("/update/:id", updateBlog);

blogRouter.delete("/delete/:id", deleteBlog);

blogRouter.get("/complete/:id", toggleBlogComplete);

export default blogRouter;
