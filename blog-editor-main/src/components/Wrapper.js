import React from "react";
import Parallex from "./Parallex";

const Wrapper = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center w-screen overflow-x-hidden overflow-y-hidden max-w-screen-sm sm:px-5 px-1 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      {/* <Parallex pos="bottom-0" /> */}
      {/* <Parallex pos="bottom-0" /> */}
      {children}
    </div>
  );
};

export default Wrapper;
