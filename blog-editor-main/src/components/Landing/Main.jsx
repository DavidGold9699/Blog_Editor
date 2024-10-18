"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Wrapper from "../Wrapper";

const Main = () => {
  const [learnMore, setLearnMore] = useState(
    "Synesxi offers a paradigm-shifting solution: a comprehensive platform/ecosystem specifically designed to empower you within the Solana blockchain.  Synesxi isn't just a marketplace, it's your gateway to the vibrant Solana blockchain. We connect a global community of key players on the Solana blockchain, from curious newcomers to seasoned veterans  to harness the full potential of this revolutionary technology. Synesxi provides seamless, end-to-end services that cater to every participant within the Solana network, empowering individuals and businesses (B2B/B2C/D2C) to thrive"
  );

  return (
    <div className="w-full flex h-[700px] overflow-y-hidden justify-center items-center">
      <Wrapper>
        <div
          data-aos="fade-up"
          className="flex flex-col items-center overflow-y-hidden justify-center w-full h-[calc(100vh-200px)] gap-y-[28px] text-center"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <span className="text-4xl md:text-[64px] text-[#ffffff] md:max-w-[70%] mb-4 font-bold md:space-y-[16px] md:leading-[73px]">
              <h1 className="">
                Your Gateway
                <br className="hidden md:block" /> to a Better and Seamless Web3 Experience
              </h1>
            </span>
            <p className="text-[#ffffffbe] text-[20px] md:text-[26px]">
              Discover, Collaborate and Own Your Solana Journey
            </p>
          </div>

          {/* <div className="flex flex-col items-center justify-center px-5 py-2 rounded-3xl gap-x-2 "> */}
          {/* <div>
            <button
              data-tooltip-target="tooltip-bottom"
              data-tooltip-placement="bottom"
              type="button"
              className="bg-[rgba(89,183,233,1)] flex items-center justify-center px-5 py-2 gap-x-2  font-semibold rounded-[10px] text-[#fff] relative top-0 left-0"
            >
              Learn More
            </button>
            <div
              id="tooltip-bottom"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Synesxi offers a paradigm-shifting solution: a comprehensive platform/ecosystem specifically designed to empower you within the Solana blockchain.  Synesxi isn't just a marketplace, it's your gateway to the vibrant Solana blockchain. We connect a global community of key players on the Solana blockchain, from curious newcomers to seasoned veterans  to harness the full potential of this revolutionary technology. Synesxi provides seamless, end-to-end services that cater to every participant within the Solana network, empowering individuals and businesses (B2B/B2C/D2C) to thrive.
            </div>
          </div> */}
        </div>
      </Wrapper>
      <div className="absolute md:flex justify-center hidden items-center z-[-10] overflow-y-hidden h-[500px]">
        <Image src='/assets/GIFbackground.gif' alt="" width={500} height={500} className=" opacity-10 w-[3000px]"/>
      </div>
    </div>
  );
};

export default Main;
