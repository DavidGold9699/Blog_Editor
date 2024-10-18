"use client";
import Community from "@/components/Landing/Community";
import Ecosystem from "@/components/Landing/Ecosystem";
import Main from "@/components/Landing/Main";
import SecondLayer from "@/components/Landing/SecondLayer";
import Slidecomps from "@/components/Landing/Slidecomps";
import ThirdLayer from "@/components/Landing/ThirdLayer";
import Wrapper from "@/components/Wrapper";
import AOS from "aos";
import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <main className=" w-full flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden">
        {/* <Wrapper> */}
        <Main />
        <SecondLayer />
        <ThirdLayer />
        <Slidecomps />
        <Ecosystem />
        <Community />
        {/* </Wrapper> */}
      </main>
      <GoogleAnalytics gaId="G-KHC1TS8FTH" />
    </>
  );
}
