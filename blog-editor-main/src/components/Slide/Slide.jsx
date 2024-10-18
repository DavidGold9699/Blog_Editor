'use client'
import { MdArrowOutward } from "react-icons/md";

const Slide = ({ title, desc,textColor, bg }) => {


  return (
    <div className={`${bg} h-full w-[400px] min-w-[400px]  py-8 px-7  rounded-lg`}>
        <div className="flex flex-col h-full place-content-between">
        <div className="flex flex-col gap-y-3 ">
          <h3 className="text-[20px] text-[#fff] font-semibold">{title}</h3>
          <p className={`${textColor}`}>{desc}</p>
        </div>
        <MdArrowOutward className="text-[22px] font-bold cursor-pointer" />
      </div>
    </div>
  );
};

export default Slide;
