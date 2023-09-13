import React from "react";
import Image from "next/image";
import Ui from "../public/vercel.svg";

export default function Hero() {
  return (
    <div className='w-full bg-primary fixed text-slate-50 px-[3rem] rounded-b-[3rem] lg:rounded-none py-[1rem] flex items-center justify-between shadow-lg'>
      <h2 className='font-bold text-[1.3rem]'>
        GPT<span className='font-light text-secondary'>Quiz</span>
      </h2>
      <div className='relative w-[50px] h-[50px]'>
        <Image
          src={Ui}
          alt='GPTQuiz Logo'
          fill
          className='w-full h-full object-cover rounded-full shadow-lg'
        />
      </div>
    </div>
  ); 
}
