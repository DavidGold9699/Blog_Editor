import React from "react";
import SliderComponent from "../Slider/Features";
import Wrapper from "../Wrapper";

const OPTIONS = { align: "start" };
const slideData = [
  {
    id: 1,
    title: "Talent Pool",
    desc: "Assemble your dream team from a pool of pre-vetted developers, marketers, community managers, graphics designers, and more.",
    bg: "bg-[rgba(89,183,233,1)]",
    textColor: "text-[rgba(207,239,255,1)]",
  },
  {
    id: 2,
    title: "Swap/Trade",
    desc: "As the market shifts,  your strategy evolves! Buy, sell, or hodl any Solana token in an instant. Never miss a market move - seize the moment and stay ahead of the game.",
    bg: "bg-[rgba(39,39,39,1)]",
    textColor: "text-[rgb(149,149,149)]",
  },
  {
    id: 3,
    title: "Launchpad",
    desc: "Secure funding and community support for your innovative project",
    bg: "bg-[rgba(89,183,233,1)]",
    textColor: "text-[rgba(207,239,255,1)]",
  },
  {
    id: 4,
    title: "Incubator",
    desc: "Get expert guidance and resources to accelerate your journey",
    bg: "bg-[rgba(39,39,39,1)]",
    textColor: "text-[rgb(149,149,149)]",
  },
];
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Ecosystem = () => {
  return (
    <Wrapper>
      <div
        id="discover"
        data-aos="fade-up"
        className="flex flex-col mb-[50px] gap-y-[50px] w-[100%] my-20"
      >
        <div className="flex flex-col items-center justify-center w-full gap-y-11">
          <h1 className="text-3xl md:text-[64px] text-center text-[#ffffff]  font-bold  md:leading-[73px]">
            Complete Ecosystem
          </h1>
          <p className="text-[rgba(255,255,255,1)] text-[26px] text-center">
            Access a comprehensive suite of services, including a swap/bridge,
            launchpad, and incubator. Scale your project from ideation to reality.
          </p>
        </div>
        {/* <div className="relative w-full overflow-y-hidden h-[320px] ecosystem"> */}
        {/* <Slidecontainer /> */}
        {/* </div> */}
        <SliderComponent slides={slideData} options={OPTIONS} />
      </div>
    </Wrapper>
  );
};

export default Ecosystem;
