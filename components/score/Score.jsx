"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Score({ score }) {
  const router = useRouter();
  return (
    <div className=' text-center flex pt-[2rem] flex-col justify-center gap-[1.5rem] px-[3rem]'>
      <div>
        <img src='/score/Score.png' alt='' />
      </div>
      <div className='font-bold flex flex-col text-2xl gap-[.5rem]'>
        <span>John 😎</span>
        <h2>Your Score Is {score}</h2>
      </div>
      <div className='font-bold flex flex-col gap-[1.5rem]'>
        <button className='bg-primary px-[1rem] py-[.8rem] hover:bg-transparent hover:border-2 border-primary transition ease-in-out delay-150 hover:py-[.65rem]'>
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
