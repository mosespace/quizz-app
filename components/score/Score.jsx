"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Score({ score, results }) {
  // console.log(showResults);

  return (
    <div className=' text-center flex pt-[2rem] flex-col justify-center gap-[1.5rem] px-[3rem]'>
      <div className='relative h-[300px]'>
        <Image
          src='/score/Score.png'
          alt=''
          className='w-full h-full object-cover'
          fill
        />
      </div>
      <div className='font-bold flex flex-col text-2xl gap-[.5rem]'>
        <span>"{`{player}`}" 😎</span>
        <h2>Your Score Is {score}</h2>
      </div>
      <div className='font-bold flex flex-col gap-[1.5rem]'>
        <button
          onClick={results}
          className='bg-primary px-[1rem] py-[.8rem] hover:bg-transparent hover:border-2 border-primary transition ease-in-out delay-150 hover:py-[.65rem]'
        >
          Play again
        </button>
        <Link
          href='/quizhack'
          className='bg-primary px-[1rem] py-[.8rem] hover:bg-transparent hover:border-2 border-primary transition ease-in-out delay-150 hover:py-[.65rem]'
        >
          <button>Choose other quiz</button>
        </Link>
      </div>
    </div>
  );
}
