import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsMedium } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { RiYoutubeLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import Wrapper from "../Wrapper";
import Copyright from "./copyright";

const style = {};

const Footer = () => {
  return (
    <div className="text-[#ffffff] bg-[rgb(23,24,28)] border-t border-[#272727] w-full h-auto gap-y-4 flex flex-col">
      <div className="flex items-start justify-between gap-x-2 xl:px-[396px] lg:px-[120px] px-2 mt-[142px]">
        <div className="">
          <Image src="/assets/logo.png" width={282} height={61} alt="logo" />
          <p className="text-[16px] font-serif text-[#858585] mt-[22px] ml-[52px]">
            Your gateway to a better and seamless Web3 experience
          </p>
        </div>
        {/* <div className=" flex flex-col justify-start items-start gap-[16px]">
          <div className=" text-[14px] text-[#858585]">Benefits</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">Employee</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">Experience</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">Reviews</div>
        </div>
        <div className=" flex flex-col justify-start items-start gap-[16px]">
          <div className=" text-[14px] text-[#858585]">Partners</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">GreatPartners</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">Referral Stars</div>
        </div>
        <div className=" flex flex-col justify-center items-start gap-[16px]">
          <div className=" text-[14px] text-[#858585]">Case Studies</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">BigTech 101</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">Architects.ai</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">EveryStartup</div>
        </div>
        <div className=" flex flex-col justify-center items-start gap-[16px]">
          <div className=" text-[14px] text-[#858585]">Resources</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">About Us</div>
          <div className=" text-[14px] text-[#ffffff] font-medium">Claim your
            Startup</div>
          <Link href="/blog" className=" text-[14px] text-[#ffffff] font-medium">Blog</Link>
          <div className=" text-[14px] text-[#ffffff] font-medium">Contact</div>
        </div> */}
        <div className="flex flex-col justify-center gap-3 text-[16px]">
          <span className=" text-gray-400 text-base"> Resources</span>
          <span>
            <Link href="/contact">Contact us</Link>
          </span>
          <span>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScGVO2NmdZvDGPAhdQzFvSnVksIhtysa-ZeyiGkTloOmVpkPw/viewform"
              target="_blank"
            >
              Careers
            </Link>
          </span>
          <span className="">
            <Link href="/privacy">Privacy Policy</Link>
          </span>
          <span>
            <Link href="/terms">Terms of service</Link>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full xl:px-[396px] lg:px-[120px] px-2 mt-[50px] ">
        <div className="border-t border-[#31353F] w-full flex items-center justify-between gap-x-3 mb-[56px]">
          <Copyright />
          <div className=" flex justify-center items-center gap-[24px] mt-[24px]">
            <Link
              href="https://www.linkedin.com/company/synesxi/"
              target="_blank"
              className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="https://x.com/synesxi_hub"
              target="_blank"
              className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
            >
              <BsTwitterX />
            </Link>

            <Link
              href="https://t.me/synesxi"
              target="_blank"
              className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
            >
              <FaTelegram />
            </Link>
            <Link
              href="https://medium.com/@synesxi"
              target="_blank"
              className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
            >
              <BsMedium />
            </Link>
            <Link
              href="https://www.youtube.com/@Synesxi"
              target="_blank"
              className="rounded-[50%] bg-[#272727] p-3 cursor-pointer"
            >
              <RiYoutubeLine />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
