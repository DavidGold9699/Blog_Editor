import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center  md:flex-row gap-[10px]">
        <div className="relative overflow-hidden border-[##474747] border-[1px] w-[300px] h-[50px] rounded-3xl">
          <input
            className="absolute text-[16px] placeholder:text-[16px] top-0 left-0 w-full h-full text-white bg-transparent border-none outline-none py-[16px] px-[20px] indent-[20px] rounded-3xl"
            type="search"
            name=""
            id=""
            placeholder="Enter email"
          />
        </div>
        <button className="bg-[#1B95AC] text-white rounded-3xl py-[16px] px-[32px] h-[54px] flex gap-x-[10px] items-center justify-center">
          <span>Join now</span> <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default Search;
