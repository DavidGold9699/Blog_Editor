import React from "react";
import Image from "next/image";
import Bluebg from "../Bluebg";
import Wrapper from "../Wrapper";

const SecondLayer = () => {

  return (
    <div className=" relative">
      <Wrapper>
        <div className="relative w-full py-3 mb-36 lg:mb-44">
          <div className="">
            <div className="flex flex-col-reverse lg:flex-row gap-y-8 lg:gap-y-0 h-auto">
              <div data-aos="fade-left" className="flex flex-col lg:w-[70%] w-full gap-y-[20px] lg:gap-y-[50px] text-[#ffffff] ">
                <span className=" w-full h-full md:bg-black absolute top-0" style={{ opacity: '30%' }}></span>
                <div className=" mt-[90px]" style={{ paddingLeft: '60px', paddingRight: '30px' }}>
                  <h1 className="text-2xl text-center md:text-[32px] relative text-[#ffffff] md:text-left font-bold md:leading-[47px]">
                    <span className="text-[rgba(248,206,98,1)]">Synesxi's &nbsp;</span>
                    Leading<br></br> the Solana Revolution
                  </h1>
                  <p className="text-[20px] relative mt-4">
                    <span className="text-[rgba(235,195,255,1)]">Synesxi</span> isn't
                    just a marketplace, it's your gateway to the vibrant Solana
                    blockchain. We connect a global community of key players on the
                    Solana blockchain, from curious newcomers to seasoned veterans  to
                    harness the full potential of this revolutionary technology.
                    Synesxi provides seamless, end-to-end services that cater to every
                    participant within the Solana network, empowering individuals and
                    businesses (B2B/B2C) to thrive.
                  </p>
                </div>
              </div>
              <div className="w-full" data-aos="fade-right">
                <span className=" w-full h-full bg-black absolute top-0 z-0" style={{ opacity: '50%' }}></span>
                <img src='/assets/laptop.png' className=" w-full h-full relative z-10" alt="" />
              </div>
            </div>

          </div>
        </div>
      </Wrapper>
      <div className="absolute top-[-10px] left-[-150px] z-[10] opacity-70">
        <Bluebg bgcolor="bg-[rgba(248,206,98,1)]" />
      </div>
      <div className="absolute top-[-10px] right-[-150px] z-[10]  ">
        <Bluebg bgcolor="bg-[#59D8F0]" />
      </div>
    </div>
  );
};

export default SecondLayer;
