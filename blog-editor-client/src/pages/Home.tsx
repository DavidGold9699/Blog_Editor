import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  useCompleteBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from "../redux/blogApi";
import {
  DeleteBlogModal,
  ScreenSpinner,
  UsePageTitle,
  UpdateBlogModal
} from "../components";
import { CreateBlogResponse, Blog } from "../vite-env";
import {
  AiOutlineCheckSquare,
  LiaEdit,
  MdOutlineCheckBoxOutlineBlank,
  RiDeleteBin6Line,
} from "../icons";
import React from "react";
import toast from "react-hot-toast";
import BlogEditor from "../components/BlogEditor";
import Cookies from "js-cookie";
import { blogsBaseUrl } from '../api';
import { useNavigate } from "react-router-dom";

const Home = () => {
  UsePageTitle("Home");

  const { isLoading: getBlogLoading, data, refetch } = useGetBlogsQuery();

  const [deleteBlogMutation, { isLoading: DeleteBlogLoading }] =
    useDeleteBlogMutation();

  const [updateBlogMutation, { isLoading: UpdateBlogLoading }] =
    useUpdateBlogMutation();

  const [completeBlogMutation] = useCompleteBlogMutation();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<CreateBlogResponse | null>(
    null
  );

  const handleDeleteConfirmation = (blogId: string) => {
    setBlogToDelete(blogId);
    setIsDeleteModalOpen(true);
  };

  const handleUpdateBlog = (blog: CreateBlogResponse) => {
    setSelectedBlog(blog);
    setIsUpdateModalOpen(true);
  };

  const handleDeleteBlog = async () => {
    try {
      if (blogToDelete) {
        await deleteBlogMutation(blogToDelete);
      }
      setBlogToDelete(null);
      setIsDeleteModalOpen(false);
      refetch();
    } catch (error) {
      toast.error(error.message, {
        duration: 2000,
      });
    }
  };

  const handleCompleteBlog = async (blogId: string) => {
    try {
      await completeBlogMutation(blogId);
      await refetch();
      toast.success("Blog Status Changes", {
        duration: 2000,
      });
    } catch (error) {
      toast.error(error.message, {
        duration: 2000,
      });
    }
  };

  const formatDate = date => {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));
  }

  const blogs = data?.blogs || [];

  const handleGetBlog = _id => {
    const token = Cookies.get("token");
    const url = `${blogsBaseUrl}preview/${_id}?authToken=${token}`; // Replace with your API endpoint
    window.open(url, '_blank');
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-8 p-4 items-center justify-center">
      {getBlogLoading && <ScreenSpinner />}

      {blogs.length !== 0 && <p className="text-2xl font-bold w-4/5">My Blogs</p>}

      {blogs.length === 0 ? (
        <p className="text-2xl font-bold">No Blogs Available</p>
      ) : (
        blogs.map((blog: Blog) => {
          return (
            <div className="shadow-md hover:shadow-xl" key={blog._id} onClick={() => handleGetBlog(blog._id)}>
              <Card sx={{ width: '80vw' }}>
                <CardContent className="flex flex-col gap-3 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl font-bold flex items-center">
                        {blog.title}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      {/* <button
                        title="Complete"
                        onClick={() => handleCompleteBlog(blog._id)}
                        className="text-indigo-900 cursor-pointer"
                      >
                        {blog.isCompleted ? (
                          <AiOutlineCheckSquare size={22} />
                        ) : (
                          <MdOutlineCheckBoxOutlineBlank size={22} />
                        )}
                      </button> */}

                      <p className="flex items-center pr-2">
                        {formatDate(blog.createdAt)}
                      </p>

                      <button
                        title="Update"
                        className="text-indigo-900 cursor-pointer"
                        onClick={(e) => {
                          // handleUpdateBlog(blog)
                          localStorage.setItem("blog", JSON.stringify(blog));
                          navigate("/edit/blog");
                          e.stopPropagation();
                        }}
                      >
                        <LiaEdit size={22} />
                      </button>
                      <button
                        title="Delete"
                        onClick={(e) => {
                          handleDeleteConfirmation(blog._id)
                          e.stopPropagation();
                        }}
                        className="text-red-900 cursor-pointer"
                      >
                        <RiDeleteBin6Line size={20} />
                      </button>
                    </div>
                  </div>
                  {/* <p className="text-sm text-justify font-medium flex items-center justify-center">
                    {blog.description}
                  </p> */}
                </CardContent>
              </Card>
            </div>
          );
        })
      )}

      <DeleteBlogModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirmDelete={handleDeleteBlog}
        DeleteBlogLoading={DeleteBlogLoading}
      />

      <UpdateBlogModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onUpdateBlog={(updatedBlog) => {
          updateBlogMutation({
            id: selectedBlog?._id || "",
            blogData: updatedBlog,
          });
          setIsUpdateModalOpen(false);
        }}
        initialBlog={selectedBlog}
        UpdateBlogLoading={UpdateBlogLoading}
        refetch={refetch}
      />
    </div>
  );
};

export default Home;
