"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Mobilenavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleToggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="flex lg:hidden flex-col items-center justify-between w-full text-[#fff] py-4 sticky top-0 bg-[#121315] z-20">
      <div className="flex items-center justify-between w-full ">
        {" "}
        <div className="w-[229px] h-[42px]">
          <Image
            src="/assets/logo.png"
            width={229}
            height={42}
            alt="logo"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <button
          onClick={handleToggle}
          className="bg-[#1B95AC] group text-white rounded-3xl py-2 px-5 flex gap-x-2 items-center justify-center"
        >
          <RxHamburgerMenu />
        </button>
      </div>
      {openNav && (
        <div
          className={`${
            openNav ? "opacity-1 h-fit top-16 " : "bottom-0 opacity-0 h-[0] "
          } w-full mt-3 absolute z-10 bg-[#121315] transition-none`}
        >
          <nav>
            <ul className="flex flex-col w-full list-none nav gap-x-5">
              <li className="px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer">
                <Link href=" ">Features</Link>
              </li>
              <li className="px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer">
                <Link href=" ">Benefits</Link>
              </li>
              <li className="px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer">
                <Link href=" ">Discover</Link>
              </li>
              <li className="px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer">
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center w-full ">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScGVO2NmdZvDGPAhdQzFvSnVksIhtysa-ZeyiGkTloOmVpkPw/viewform">
              <button className="bg-[#1B95AC] w-full text-white rounded-3xl py-2 px-5 flex gap-x-2 items-center justify-cente my-3">
                <span className="w-full">Join waitlist</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobilenavbar;
