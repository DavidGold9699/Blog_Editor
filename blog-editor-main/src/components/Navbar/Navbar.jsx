"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Wrapper from "../Wrapper";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const link = () => {
    router.push("/", { scroll: false });
  };

  return (
    <Wrapper>
      <div className="hidden lg:flex fixed top-0 w-full bg-black z-30 items-center justify-center border-b border-[#1D1D1D] py-[20px] px-[20px]">
        <div className="flex  items-center justify-between w-full text-[#fff] max-w-screen-sm px-5 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="w-[229px] h-[42px]">
            <Link href="/">
              {" "}
              <Image
                src="/assets/logo.png"
                width={229}
                height={42}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex flex-row list-none nav gap-x-5">
              <li
                className={`${
                  activeLink == "feature" && path == "/" ? "bg-[#393D3E]" : ""
                } px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer`}
              >
                {/* <Link href="/" scroll={false} */}
                <LinkScroll
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("feature");
                  }}
                >
                  <span onClick={() => link()}>Features</span>
                </LinkScroll>
              </li>
              <li
                className={`${
                  activeLink == "benefit" && path == "/" ? "bg-[#393D3E]" : ""
                } px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer`}
              >
                {/* <Link href="/" scroll={false} */}
                <LinkScroll
                  activeClass="active"
                  to="benefit"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("benefit");
                  }}
                >
                  <span onClick={() => link()}>Benefits</span>
                </LinkScroll>
              </li>
              <li
                className={`${
                  activeLink === "discover" && path == "/" ? "bg-[#393D3E]" : ""
                } px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer`}
              >
                {/* <Link href="/" scroll={false} */}
                <LinkScroll
                  activeClass="active"
                  to="discover"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={() => {
                    setActiveLink("discover");
                  }}
                >
                  <span onClick={() => link()}>Discover</span>
                </LinkScroll>
              </li>
              <li
                className={`${
                  path == "/blog" ? "bg-[#393D3E]" : ""
                } px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer`}
              >
                <Link href="/blog">Blog</Link>
              </li>
              <li
                className={`${
                  path == "/contact" ? "bg-[#393D3E]" : ""
                } px-5 py-2 rounded-3xl hover:bg-[#393D3E] cursor-pointer`}
              >
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
          <Link href="https://forms.gle/m9phCsAfKCquBiVU6" target="_blank">
            <button className="bg-[#1B95AC] group text-white rounded-3xl py-2 px-5 flex gap-x-2 items-center justify-center">
              <span className="hidden transition-all md:block group-hover:block">
                Join Waitlist
              </span>{" "}
              <div>
                <MdArrowOutward />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
