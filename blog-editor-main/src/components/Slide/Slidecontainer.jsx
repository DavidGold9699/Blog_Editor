"use client";
import React from "react";
import Slide from "./Slide";
import { MdArrowOutward } from "react-icons/md";
const slideData = [
  {
    id: 1,
    title: "Talent Pool",
    desc: "Assemble your dream team from a pool of pre-vetted developers, marketers, community managers, graphics designers, and more.",
    bg: "bg-[rgba(89,183,233,1)]",
    textColor: "text-[rgba(207,239,255,1)",
  },
  {
    id: 2,
    title: "Swap/Trade",
    desc: "As the market shifts,  your strategy evolves! Buy, sell, or hodl any Solana token in an instant. Never miss a market move - seize the moment and stay ahead of the game.",
    bg: "bg-[rgba(39,39,39,1)]",
    textColor: "text-[rgba(149,149,149,1)",
  },
  {
    id: 3,
    title: "Launchpad",
    desc: "Secure funding and community support for your innovative project",
    bg: "bg-[rgba(39,39,39,1)]",
    textColor: "text-[rgb(149,149,149)",
  },
  {
    id: 4,
    title: "Incubator",
    desc: "Get expert guidance and resources to accelerate your journey",
    bg: "bg-[rgba(89,183,233,1)]",
    textColor: "text-[red]",
  },
];

const Slidecontainer = () => {
  return (
    <div data-aos="fade-right" className="absolute flex w-full h-full gap-x-5">
      <div className="bg-[rgba(89,183,233,1)] h-full w-[336px] min-w-[336px]  p-[40px]  rounded-lg">
        <div className="flex flex-col h-full place-content-between">
          <div className="flex flex-col gap-y-3 ">
            <h3 className="text-[20px] text-[#fff] font-semibold">
              Talent Pool
            </h3>
            <p className="leading-[27px] text-[rgba(207,239,255,1)]">
              Assemble your dream team from a pool of pre-vetted developers,
              marketers, community managers, graphics designers, and more.
            </p>
          </div>
          <MdArrowOutward className="text-[22px] text-[#fff] font-bold cursor-pointer" />
        </div>
      </div>
      <div className="bg-[rgba(39,39,39,1)] h-full w-[336px] min-w-[336px]  p-[40px]  rounded-lg">
        <div className="flex flex-col h-full place-content-between">
          <div className="flex flex-col gap-y-3 ">
            <h3 className="text-[20px] text-[#fff] font-semibold">
              Swap/Trade
            </h3>
            <p className="leading-[27px] text-[rgba(149,149,149,1)]">
              As the market shifts, your strategy evolves! Buy, sell, or hodl
              any Solana token in an instant. Never miss a market move - seize
              the moment and stay ahead of the game.
            </p>
          </div>
          <MdArrowOutward className="text-[22px] text-[#fff] font-bold cursor-pointer" />
        </div>
      </div>
      <div className="bg-[rgba(39,39,39,1)] h-full w-[336px] min-w-[336px]  p-[40px]  rounded-lg">
        <div className="flex flex-col h-full place-content-between">
          <div className="flex flex-col gap-y-3 ">
            <h3 className="text-[20px] text-[#fff] font-semibold">
            Launchpad
            </h3>
            <p className="leading-[27px] text-[rgb(149,149,149)]">
            Secure funding and community support for your innovative project
            </p>
          </div>
          <MdArrowOutward className="text-[22px] text-[#fff] font-bold cursor-pointer" />
        </div>
      </div>
      <div className="bg-[rgba(89,183,233,1)] h-full w-[336px] min-w-[336px]  p-[40px]  rounded-lg">
        <div className="flex flex-col h-full place-content-between">
          <div className="flex flex-col gap-y-3 ">
            <h3 className="text-[20px] text-[#fff] font-semibold">
            Incubator
            </h3>
            <p className="leading-[27px] text-[rgba(207,239,255,1)]">
            Get expert guidance and resources to accelerate your journey
            </p>
          </div>
          <MdArrowOutward className="text-[22px] text-[#fff] font-bold cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Slidecontainer;
