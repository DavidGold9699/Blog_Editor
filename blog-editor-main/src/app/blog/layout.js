"use client";

import Image from "next/image";

import BlogPage from "./page";
import { useState } from "react";

export default function BlogLayout({ children }) {
  const backgroundStyle = {
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%), linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)",
    height: "100vh",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const [blogInfo, setBlogInfo] = useState({
    create: '',
    read: '',
    title: ''
  });

  const updateBlogInfo = blogInfoParam => setBlogInfo(blogInfoParam);

  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden sticky">
      <div className="pt-[130px] w-full h-[100%] flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-br from-[#000] via-[#59D8F033] via-[#FF1CF71A] to-blue-900 overflow-hidden">
        <div className="w-4/5 h-[450px] flex">
          <div className="w-1/2 h-[100%] flex flex-col justify-center container mx-auto px-4 py-8">
            <a href="#" className="text-green-500 flex items-center mb-4">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              BACK TO BLOG
            </a>
            <div className="mb-4 text-gray-400">
              <span>{blogInfo.create}</span>
              <span className="mx-2">•</span>
              <span>{blogInfo.read} min read</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-[#E8E8E9] weight-700">
              {/* Synesxi's Epic Extravaganza: Your Chance to Win from a $4000 Prize Pool! */}
              {blogInfo.title}
            </h1>
          </div>
          <div className="w-1/2 h-[100%] flex flex-col justify-center">
            <Image
              src="/assets/zealy.png"
              alt="zealy"
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* {children} */}
      <BlogPage setBlogInfo={setBlogInfo} />
    </div>
  );
}
