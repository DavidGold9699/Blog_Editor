import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenSpinner, UpdateBlogModal, UsePageTitle } from "../components";
import { MailRoundedIcon, MdOutlineDescription } from "../icons";
import { toast } from "react-hot-toast";
import { AddBlogData, CreateBlogResponse, SignInError } from "../vite-env";
import { useCreateBlogMutation, useGetBlogsQuery, useUpdateBlogMutation } from "../redux/blogApi";
import BlogEditor from "../components/BlogEditor";

const EditBlog: FC = () => {
  UsePageTitle("Edit");
  const navigate = useNavigate();

  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const [formData, setFormData] = useState<AddBlogData>({
    title: "",
    description: "",
  });

  const { title, description } = formData;

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (title: string) => {
    // e.preventDefault();
    const response = await createBlog({
      title: title,
      description: formData.description
    });
    if ("data" in response) {
      const { message } = response.data as unknown as CreateBlogResponse;
      toast.success(message, {
        duration: 2000,
      });
      // navigate("/");
    }
    if ("error" in response) {
      const {
        data: { message },
      } = response.error as SignInError;
      toast.error(message, {
        duration: 2000,
      });
    }
  };

  const [ready, setReady] = useState(false);
  const onReady = () => setReady(true);

  const blog = JSON.parse(localStorage.getItem("blog"));

  const onExport = async (description: any) => {
    // setFormData((prevData) => ({
    //   ...prevData,
    //   description: description
    // }));
    // setIsUpdateModalOpen(true);
    const response = await updateBlogMutation({
      id: blog._id,
      blogData: {
        title: blog.title,
        description: description
      }
    });
    if ("data" in response) {
      const { message } = response.data as unknown as CreateBlogResponse;
      toast.success(message, {
        duration: 2000,
      });
      // navigate("/");
    }
    if ("error" in response) {
      const {
        data: { message },
      } = response.error as SignInError;
      toast.error(message, {
        duration: 2000,
      });
    }
  };

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [updateBlogMutation, { isLoading: UpdateBlogLoading }] = useUpdateBlogMutation();
  const [selectedBlog, setSelectedBlog] = useState<CreateBlogResponse | null>(null);
  const { isLoading: getBlogLoading, data, refetch } = useGetBlogsQuery();

  return (
    <div className="flex justify-center items-center bg-gray-100 px-6">
      {!ready && <ScreenSpinner />}
      <BlogEditor onReady={onReady} onExport={onExport} templateDesign={JSON.parse(blog.description).design} />

      <UpdateBlogModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onUpdateBlog={(updatedBlog: any) => {
          // updateBlogMutation({
          //   id: selectedBlog?._id || "",
          //   blogData: updatedBlog,
          // });
          setIsUpdateModalOpen(false);
          
          handleSubmit(updatedBlog.title);
        }}
        initialBlog={selectedBlog}
        UpdateBlogLoading={UpdateBlogLoading}
        refetch={refetch}
      />
    </div>
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
    //   {isLoading && <ScreenSpinner />}

    //   <div className="w-[26rem] p-14 shadow-md hover:shadow-xl rounded-md bg-white">
    //     <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
    //       Add Blog
    //     </h2>
    //     <form onSubmit={handleSubmit} className="flex flex-col gap-5">
    //       <div className="w-full relative">
    //         <label htmlFor="title" className="block text-sm font-medium">
    //           Title:
    //         </label>
    //         <input
    //           id="title"
    //           name="title"
    //           value={title}
    //           onChange={handleTitleChange}
    //           className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
    //         />
    //         <MailRoundedIcon
    //           fontSize="small"
    //           className="absolute right-3 top-8 text-gray-700"
    //         />
    //       </div>
    //       <div className="w-full relative">
    //         <label htmlFor="description" className="block text-sm font-medium">
    //           Description:
    //         </label>
    //         <div className="relative">
    //           <textarea
    //             id="description"
    //             name="description"
    //             value={description}
    //             onChange={handleDescriptionChange}
    //             className="mt-1 p-7 w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           />
    //           <MdOutlineDescription
    //             size={20}
    //             className="absolute right-2 top-4 text-gray-700"
    //           />
    //         </div>
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       >
    //         Add
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default EditBlog;
