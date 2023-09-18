"use client";
import React from "react";
import Image from "next/image";
// import Ui from "../../public/sst-quiz.jpg";
import { usePathname } from "next/navigation";
import { BsSearch } from "react-icons/bs";

export default function Nav() {
  const pathname = usePathname();
  if (
    pathname === "/" ||
    pathname === "/on-boarding-screens" ||
    pathname === "/demo-auth/sign-in/login" ||
    pathname === "/demo-auth/sign-up/create-account"
  )
    return null;

  return (
    <div
      className='w-full fixed top-0 left-0 right-0 bg-[#1f2041] rounded-b-3xl text-primary px-[2rem] py-[1rem] flex flex-col items-center justify-between gap-4 shadow-lg mb-[5rem]'
      style={{ zIndex: 1000 }}
    >
      <div className='flex items-center justify-between w-full'>
        <div>
          <h2 className='font-bold text-[1.3rem]'>
            GPT<span className='font-light text-slate-50'>Quiz</span>
          </h2>
        </div>
        <div className='relative w-[40px] h-[40px] bg-secondary rounded-full'>
          {/* <Image
            src={Ui}
            alt='GPTQuiz Logo'
            fill
            className='w-full h-full object-cover rounded-full shadow-lg'
          /> */}
        </div>
      </div>
      <div className='relative flex w-full flex-wrap items-stretch'>
        <input
          type='search'
          className='relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-slate-50 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-slate-50 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-slate-50/30 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
          placeholder='Search for quiz'
          aria-label='Search'
          aria-describedby='button-addon1'
        />

        <button
          className='relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
          type='button'
          id='button-addon1'
          data-te-ripple-init
          data-te-ripple-color='light'
        >
          <BsSearch className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
}
