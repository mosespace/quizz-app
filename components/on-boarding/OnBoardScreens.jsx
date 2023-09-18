"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import firstOnBoard from "../../public/onBoarding/Saly-19.png";
import firstOnBoardTwo from "../../public/onBoarding/avatar2.png";
import firstOnBoardThree from "../../public/onBoarding/avatar.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function OnBoardScreens() {
  const data = [
    {
      img: firstOnBoard,
      alt: "Image Alt Text 1",
      text: "Test your knowledge and find fun and interesting quizzes to boost up your knowledge",
    },
    {
      img: firstOnBoardTwo,
      alt: "Image Alt Text 2",
      text: "The Quiz Session comprises 10 questions and you'll have 60sec for each question",
    },
    {
      img: firstOnBoardThree,
      alt: "Image Alt Text 3",
      text: "Find Fun and interesting quiz to boost up your knowledge.",
    },
  ];
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='bg-primary text-white w-full flex flex-col items-center justify-center h-screen'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper w-full lg:w-[50%] h-full flex items-center justify-center'
      >
        {data.map((item, i) => {
          return (
            <SwiperSlide key={i} className=''>
              <div className='flex rounded-b-[3rem] bg-white items-center justify-center h-[60%] overflow-hidden'>
                <div className='relative h-[450px] w-full'>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    className='w-full h-full object-cover'
                    fill
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[3rem] items-center justify-center'>
                <div className='text-center pt-[1.5rem] font-semibold '>
                  <h3>{item.text}</h3>
                </div>
              </div>
              <div className='p-[1.5rem] flex justify-center items-center'>
                <div className='autoplay-progress' slot='container-end'>
                  <svg viewBox='0 0 48 48' ref={progressCircle}>
                    <circle cx='24' cy='24' r='20'></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Link
        href='/quizhack'
        className='rounded-md py-[1.2rem] w-full px-[2rem] lg:w-[50%]'
      >
        <button className='text-center px-[3rem] py-[.8rem] font-semibold text-slate-50 text-[.9rem] bg-[#1f2041] rounded-md w-full shadow-lg uppercase'>
          Play Now
        </button>
      </Link>
    </div>
  );
}
