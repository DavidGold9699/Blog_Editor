import React, { useState } from "react";
import Image from "next/image";
import Bluebg from "../Bluebg";
import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const ThirdLayer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? 4 - 3 : prev - 3));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 3) % 4);
  };

  const styles = {
    shop: {
      color: '#F8CE62'
    }
  };

  const data = [{
    number: '01',
    title: 'Developers',
    content: 'Launch, and propel your tokens and dApps to new heights. Gain valuable exposure and build a loyal user base within the ever-expanding Solana ecosystem. Synesxi fosters a seamless environment for direct interaction with potential users, accelerating your growth journey.'
  },
  // {
  //   number: '02',
  //   title: 'Fostering Collaboration',
  //   content: 'Synesxi actively promotes multifaceted collaboration across the entire Solana ecosystem.'
  // },
  {
    number: '02',
    title: 'Service Providers',
    content: 'Showcase your expertise and connect with businesses actively shaping the future of Solana. Target your ideal clients efficiently within this booming ecosystem and unlock new business opportunities.'
  },
  {
    number: '03',
    title: 'Traders and Investors',
    content: 'Conduct in-depth research on tokens and dApps on the Solana Blockchain to make informed investment decisions. Explore a curated marketplace of vetted cryptocurrency tokens. While we donnot handle trades directly, you can access your favourite and other reputable exchanges for seamless trading experiences all within Synesxi.'
  },
  {
    number: '04',
    title: 'Explorers',
    content: 'Explore innovative dApps spanning DeFi, gaming, and cutting-edge applications. Seamlessly connect with essential service providers—from developers, graphic designers, community managers, marketing specialists to project managers and everything you need for an enriched experience.'
  },
  {
    number: '05',
    title: 'Unified Ecosystem',
    content: 'Synesxi simplifies discovery and access by offering a centralized hub for exploring decentralized applications (dApps), tokens, projects, and service providers.'
  },
  {
    number: '06',
    title: 'Rigorous Vetting Process',
    content: 'Our stringent vetting process  prioritizes, reliable entities, fostering a secure and trusted ecosystem. We value community involvement to continuously strengthen vetting and build trust.'
  },
  {
    number: '07',
    title: 'Facilitating Collaboration',
    content: 'By facilitating the formation of multifaceted partnerships, Synesxi creates a collaboration hub - a healthy environment for you to expand, grow your network, and influence across the entire Solana ecosystem" check the design for the correct position'
  },
  {
    number: '08',
    title: 'Trust and Transparency',
    content: 'We prioritize user safety and confidence through robust security features and a commitment to ethical practices.'
  },
  ]

  useEffect(() => {
    setTimeout(function () {
      const target = document.querySelectorAll(".js-io");
      const targetArray = Array.prototype.slice.call(target);
      const options = {
        root: null,
        rootMargin: "0% 0% -20% 0%",
        threshold: 0,
      };
      const observer = new IntersectionObserver(callback, options);
      targetArray.forEach((tgt) => {
        observer.observe(tgt);
      });

      function callback(entries) {
        entries.forEach(function (entry, i) {
          const target = entry.target;

          if (entry.isIntersecting && !target.classList.contains("_show")) {
            const delay = i * 100;
            setTimeout(function () {
              target.classList.add("_show");
            }, delay);
          }
        });
      }
    }, 400);
  }, [])

  return (
    <div id="feature" className="relative flex items-center justify-center w-full mb-[109px] z-0">
      <div data-aos="fade-up" className="flex flex-col items-center w-full gap-y-[50px] ">
        <div className="text-center flex flex-col items-center justify-center lg:px-[200px] px-2 w-full max-w-screen-sm sm:px-5 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <span style={styles.shop} className=" !text-white font-bold text-3xl text-center md:text-[50px] md:leading-[67px]">Solana at your fingertips.<br></br>
            <span className=" text-[#F8CE62]">
              <Typewriter
                options={{
                  strings: ['RESEARCH', 'INVEST', 'TRADE', 'COLLABORATE', 'BUILD', 'GROW'],
                  autoStart: true,
                  loop: true,
                  cursor: '_',
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </span>
            We empower every step! </span>
          <br />
          <br />
          <span className=" text-[25px] leading-[33px] text-center text-white">
            Synesxi actively empowers individuals and businesses on the Solana blockchain with its unified platform—a one-stop shop offering seamless, end-to-end services and a comprehensive suite of functionalities.We  foster a global community of stakeholders, enabling them to thrive and succeed.
          </span>
        </div>
        <div className="absolute top-[150px] left-[-60px] z-[-10]">
          <Bluebg bgcolor="bg-[#59D8F0]" />
        </div>
        <div className="absolute top-[150px] right-[-60px] z-[-10]">
          <Bluebg bgcolor="bg-[#8C5CA4]" />
        </div>

        <div className="relative w-full h-auto flex justify-center items-start gap-[80px] mt-8">


          <div className=" flex-col gap-[50px] hidden lg:flex">
            {data.map((data, index) =>
              index % 2 === 0 && <div key={index} data-aos="fade-up" className=" w-[388px] h-[362px] bg-[rgb(18,18,18)] rounded-[23px] flex flex-col justify-start items-start pl-[42px] pr-[30px] pt-[10px] pb-[30px] js-io _fadeup">
                <Image src={`/assets/icon${index + 1}.png`} alt="" width={55} height={55} className=" mt-[30px]" />
                <span className="  mt-[20px] text-[18px] text-white">{data.title}</span>
                <span className=" mt-[15px] text-[15px] text-gray-300 w-full">{data.content}</span>
              </div>
            )}
          </div>
          <div className=" lg:block hidden">
            <ol className=" overflow-hidden space-y-[170px]">
              <li
                className="relative flex-1 after:content-['']  after:w-0.5 after:h-[170px] anime after:bg-gray-200 after:inline-block after:absolute after:left-4 lg:after:left-5 deco-line js-io">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className="w-8 h-8 aspect-square border-2 border-transparent rounded-full flex justify-center items-center ml-[5px] text-smjs-io _fadein bg-blue-600 text-white">
                  </span>
                </a>
              </li>
              <li
                className="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-[170px] anime after:z-0 after:bg-gray-200 after:inline-block after:absolute after:left-4 lg:after:left-5 deco-line js-io">
                <a className="flex items-center font-medium w-full  ">
                  <span
                    className="w-8 h-8 relative z-20 border-2 border-transparent rounded-full flex justify-center items-center ml-[5px] text-smjs-io _fadein bg-blue-600 text-white"></span>
                </a>
              </li>
              <li
                className="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-[170px] anime after:z-0 after:bg-gray-200 after:inline-block after:absolute after:left-4 lg:after:left-5 deco-line js-io">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className="w-8 h-8 border-2 relative z-10 border-transparent rounded-full flex justify-center items-center ml-[5px] text-sm js-io _fadein bg-blue-600 text-white"></span>
                </a>
              </li>
              <li
                className="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-[170px] anime after:z-0 after:bg-gray-200 after:inline-block after:absolute after:left-4 lg:after:left-5 deco-line js-io">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className="w-8 h-8 border-2 relative z-10 border-transparent rounded-full flex justify-center items-center ml-[5px] text-sm  lg:w-8 lg:h-8 js-io _fadein bg-blue-600 text-white"></span>
                </a>
              </li>
              <li
                className="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-[170px] anime after:z-0 after:bg-gray-200 after:inline-block after:absolute after:left-4 lg:after:left-5 deco-line js-io">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className="w-8 h-8 border-2 relative z-10 border-transparent rounded-full flex justify-center items-center ml-[5px] text-sm js-io _fadein bg-blue-600 text-white"></span>
                </a>
              </li>
              <li
                className="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-[170px] anime after:z-0 after:bg-gray-200 after:inline-block after:absolute after:left-4 lg:after:left-5 deco-line js-io">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className="w-8 h-8 border-2 relative z-10 border-transparent rounded-full flex justify-center items-center ml-[5px] text-sm js-io _fadein bg-blue-600 text-white"></span>
                </a>
              </li>
              <li
                className="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-[170px] anime after:z-0 after:bg-gray-200 after:inline-block after:absolute after:left-4 lg:after:left-5 deco-line js-io">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className="w-8 h-8 border-2 relative z-10 border-transparent rounded-full flex justify-center items-center ml-[5px] text-sm js-io _fadein bg-blue-600 text-white"></span>
                </a>
              </li>
              <li
                className="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-[170px] anime after:z-0 after:bg-gray-200 after:inline-block after:absolute after:left-4 lg:after:left-5 deco-line js-io">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className="w-8 h-8 border-2 relative z-10 border-transparent rounded-full flex justify-center items-center ml-[5px] text-sm js-io _fadein bg-blue-600 text-white"></span>
                </a>
              </li>
              <li className="relative flex-1 ">
                <a className="flex items-start font-medium w-full  ">
                  <span
                    className="w-8 h-8 border-2 relative z-10 border-transparent rounded-full flex justify-center items-center ml-[5px] text-sm js-io _fadein bg-blue-600 text-white"></span>
                </a>
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-[50px] lg:hidden">
            {data.map((data, index) =>
              <div key={index} data-aos="fade-up" className=" w-[388px] h-[362px] bg-[rgb(18,18,18)] rounded-[23px] flex flex-col justify-start items-start pl-[42px] pr-[30px] pt-[10px] pb-[30px] js-io _fadeup">
                <Image src={`/assets/icon${index + 1}.png`} alt="" width={55} height={55} className=" mt-[30px]" />
                <span className="  mt-[20px] text-[18px] text-white">{data.title}</span>
                <span className=" mt-[15px] text-[15px] text-gray-300 w-full">{data.content}</span>
              </div>
            )}
          </div>
          <div className=" flex-col gap-[50px]  hidden lg:flex">
            {data.map((data, index) =>
              index % 2 === 1 && <div key={index} data-aos="fade-up" className=" w-[388px] h-[362px] bg-[rgb(18,18,18)] rounded-[23px] flex flex-col justify-start items-start pl-[42px] pr-[30px] pt-[10px] pb-[30px] js-io _fadeup">
                <Image src={`/assets/icon${index + 1}.png`} alt="" width={55} height={55} className=" mt-[30px]" />
                <span className="  mt-[20px] text-[18px] text-white">{data.title}</span>
                <span className=" mt-[15px] text-[15px] text-gray-300 w-full">{data.content}</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div >
  );
};

export default ThirdLayer;
