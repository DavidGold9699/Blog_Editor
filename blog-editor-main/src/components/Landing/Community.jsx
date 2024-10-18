import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Parallex from "../Parallex";
import Link from "next/link"
import Wrapper from "../Wrapper";

const Community = () => {
  return (
    <Wrapper>
      <div data-aos="fade-up" className="flex flex-col items-center justify-center text-center md:text-inherit gap-y-9 py-[60px] bg-[#272727] w-full rounded-xl mb-36 md:mb-44 relative">
        <h1 className="text-3xl md:text-[64px] text-[#ffffff] md:max-w-[70%] font-bold ">
          Join The Waitlist
        </h1>
        <p className="text-[#ffffffbe] text-[21px] md:text-[24px]">Be among the first to experience Synesxi:<br></br>
          Your gateway to a better and seamless Web3 experience</p>
        <Link href="https://forms.gle/m9phCsAfKCquBiVU6" target="_blank">

          <button className="flex items-center justify-center gap-x-2 w-[300px] py-[16px] px-[32px] rounded-[30px] text-white font-semibold bg-[#1B95AC]"><span>Register Now</span><MdArrowOutward /></button>
        </Link>

        <Parallex pos="bottom-0" />
      </div>
    </Wrapper>
  );
};

export default Community;
