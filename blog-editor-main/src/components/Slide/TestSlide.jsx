import React from "react";
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const TestSlide = () => {
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        {slideData.map((image, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4  flex-shrink-0 transition-transform duration-300 ${
              index === currentSlide ? "translate-x-0" : "-translate-x-full"
            }`} style={{ minWidth: '25%' }}
          >
                <div className="bg-[rgba(89,183,233,1)] h-full w-[336px] min-w-[336px]  p-[40px]  rounded-lg">
        <div className="flex flex-col h-full place-content-between">
          <div className="flex flex-col gap-y-3 ">
            <h3 className="text-[20px] text-[#fff] font-semibold">
              {image.title}
            </h3>
            <p className="leading-[27px] text-[rgba(207,239,255,1)]">
              {image.desc}
            </p>
          </div>
          <MdArrowOutward className="text-[22px] text-[#fff] font-bold cursor-pointer" />
        </div>
      </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 px-4 py-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-0 px-4 py-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default TestSlide;
