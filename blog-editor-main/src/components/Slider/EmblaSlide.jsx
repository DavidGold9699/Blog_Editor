import React from "react";
import { MdArrowOutward } from "react-icons/md";

function EmblaSlide({ desc, bg, textColor, title }) {
  return (
    <div className={`${bg} h-[320px] w-[336px] min-w-[336px] p-[40px]  rounded-lg`}>
      <div className="flex flex-col h-full place-content-between">
        <div className="flex flex-col gap-y-3 ">
          <h3 className="text-[20px] text-[#fff] font-semibold">{title}</h3>
          <p className={`leading-[27px] ${textColor}`}>
            {desc}
          </p>
        </div>
        <MdArrowOutward className="text-[22px] text-[#fff] font-bold cursor-pointer" />
      </div>
    </div>
  );
}

export default EmblaSlide;
