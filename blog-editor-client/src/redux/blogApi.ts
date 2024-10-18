import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { blogsBaseUrl } from "../api";
import Cookies from "js-cookie";
import { CreateBlogResponse, Blog } from "../vite-env";

const token = Cookies.get("token");

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: blogsBaseUrl }),
  tagTypes: ["Blog", "Blogs"],
  endpoints: (builder) => ({
    createBlog: builder.mutation<CreateBlogResponse, Partial<Blog>>({
      query: (formData) => ({
        url: "/add",
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Blog", "Blog"],
    }),
    getBlogs: builder.query<Blog[], void>({
      query: () => ({
        url: "/get-all",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Blogs", "Blog"],
    }),
    getBlog: builder.query<Blog, string>({
      query: (blogId) => ({
        url: `/get/${blogId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Blogs", "Blog"],
    }),
    updateBlog: builder.mutation<Blog, { id: string; blogData: Partial<Blog> }>(
      {
        query: ({ id, blogData }) => ({
          url: `/update/${id}`,
          method: "PUT",
          body: blogData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        invalidatesTags: ["Blogs", "Blog"],
      }
    ),
    deleteBlog: builder.mutation<void, string>({
      query: (blogId) => ({
        url: `/delete/${blogId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Blogs", "Blog"],
    }),
    completeBlog: builder.mutation<void, string>({
      query: (blogId) => ({
        url: `/complete/${blogId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Blogs", "Blog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useGetBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useCompleteBlogMutation
} = blogApi;

export default blogApi;

export const blogMiddleware = blogApi.middleware;
