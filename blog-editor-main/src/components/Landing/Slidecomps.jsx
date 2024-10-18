import React from "react";
import Image from "next/image";
import Wrapper from "../Wrapper";

const Slidecomps = () => {

  return (
    <Wrapper>
      <div id="benefit" className="flex flex-col mb-[50px] mt-[20px] gap-y-[50px] w-[100%]" >
        <div className=" w-full flex justify-center">
          <img src='/assets/673362d8ae1.png' alt="" className=" absolute top-[-50px] z-1 w-full !visible items-center" />
        </div>
        <h1 data-aos="fade-up" className="text-3xl md:text-[64px] text-center text-[#ffffff]  font-bold  md:leading-[73px]">
          <span className=" text-[#F8CE62]">Empower your Web3 Experience.</span><br></br> Access the tools and resources you need to #DYOR efficiently
        </h1>
        <div data-aos="fade-left" className="grid grid-cols-1 gap-y-5 lg:grid-cols-3 gap-x-5">
          <div className="rounded-[10px] p-[20px] w-full h-[508px] flex flex-col gap-y-4 pt-[50px] bg-[#8C5CA4] group hover:bg-[#000]  hover:border-[1px] border-[#8C5CA4] transition-all">
            <h3 className="text-[24px] font-bold text-[#fff]">
              Tailored Benefits
            </h3>
            <div>
              <p className="text-[rgba(255,255,255,1)] text-[17px] leading-[25px]">
                <span className="text-[rgba(248,206,98,1)] font-semibold">
                  Discover and trade:{" "}
                </span>
                Explore a curated selection of innovative Dapps and tokens built
                on the Solana blockchain.
              </p>
            </div>
            <div>
              <p className="text-[rgba(255,255,255,1)] text-[17px] leading-[25px]">
                <span className="text-[rgba(248,206,98,1)] font-semibold">
                  Interact with confidence:{" "}
                </span>
                Our rigorous vetting process mitigates risk and fosters trust
                within the ecosystem.
              </p>
            </div>
            <div>
              <p className="text-[rgba(255,255,255,1)] text-[17px] leading-[25px]">
                <span className="text-[rgba(248,206,98,1)] font-semibold">
                  Seamless user experience:{" "}
                </span>
                Navigate a user-friendly platform that simplifies your interaction
                with the Solana ecosystem.
              </p>
            </div>
          </div>
          <div className="rounded-[10px] p-[20px] w-full h-[508px] flex flex-col gap-y-4 pt-[50px] bg-[#EDFFCF]  group hover:bg-[#000]  hover:border-[1px] border-[#8C5CA4] transition-all ">
            <h3 className="group-hover:text-[#fff] text-[24px] font-bold text-[#000] ">
              B2B, B2C and Direct to Consumers{" "}
            </h3>
            <div>
              <p className="group-hover:text-[#fff] text-[17px] leading-[25px] text-[#000]">
                <span className="group-hover:text-[#EDFFCF] font-semibold">
                  Access talent and expertise:{" "}
                </span>
                Connect with a pool of skilled developers and service providers to
                fuel your Web3 ambitions.
              </p>
            </div>
            <div>
              <p className="group-hover:text-[#fff] text-[17px] leading-[25px] text-[#000]">
                <span className="group-hover:text-[#EDFFCF] font-semibold">
                  Expand your reach:{" "}
                </span>
                Leverage the platform to connect with potential customers and
                partners within the Solana ecosystem.
              </p>
            </div>
            <div>
              <p className="group-hover:text-[#fff] text-[17px] leading-[25px] text-[#000]">
                <span className="group-hover:text-[#EDFFCF] font-semibold">
                  Collaborate and innovate:{" "}
                </span>
                Foster connections and knowledge sharing to drive innovation and
                success.
              </p>
            </div>
          </div>
          <div className="rounded-[10px] p-[20px] w-full h-[508px] flex flex-col gap-y-4 pt-[50px] bg-[#FFEACF]  group hover:bg-[#000]  hover:border-[1px] border-[#8C5CA4] transition-all">
            <h3 className=" group-hover:text-[#fff] text-[24px] font-bold text-[#000]">
              Partners
            </h3>
            <div>
              <p className="group-hover:text-[#fff] text-[17px] leading-[25px] text-[#000]">
                <span className="group-hover:text-[#FFEACF] font-semibold ">
                  Join a leading platform:
                </span>{" "}
                Collaborate with Synesxi, a prominent player at the forefront of
                the Web3 revolution.
              </p>
            </div>
            <div>
              <p className="group-hover:text-[#fff] text-[17px] leading-[25px] text-[#000]">
                <span className="group-hover:text-[#FFEACF] font-semibold ">
                  Reach a wider audience:{" "}
                </span>
                Gain access to a growing and engaged community within the Solana
                ecosystem.
              </p>
            </div>
            <div>
              <p className="group-hover:text-[#fff] text-[17px] leading-[25px] text-[#000]">
                <span className="group-hover:text-[#FFEACF] font-semibold ">
                  Contribute to the future:{" "}
                </span>
                Shape the future of Web3 by collaborating with a platform
                dedicated to building a thriving and collaborative ecosystem.
              </p>
              <p className="group-hover:text-[#fff] text-[17px] leading-[25px] text-[#000]">
                Together as a team,  we can unlock the immense potential of the
                Solana ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Slidecomps;
