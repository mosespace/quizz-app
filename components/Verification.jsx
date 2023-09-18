import Link from "next/link";
import React from "react";

export default function Verification() {
  return (
    <div className='bg-[#1f2041] flex flex-col items-center justify-center gap-4 h-screen p-[3rem] text-slate-50 '>
      <div>
        <img src='/onBoarding/quiz.png' alt='GPTQuiz' />
      </div>
      <div className='pb-[1rem]'>
        <h2 className='text-[2rem] font-bold'>
          Quiz<span className='text-secondary'>Hack</span>
        </h2>
      </div>
      <div className='flex flex-col justify-center items-center gap-6 w-full'>
        <Link href='/on-boarding-screens' className='flex rounded-md '>
          <button className='text-center px-9 py-[.8rem] font-semibold text-[.9rem] bg-primary hover:bg-orange-400/90 rounded-md shadow-lg uppercase'>
            GET STARTED FREE
          </button>
        </Link>
        <Link
          href='demo-auth/sign-up/create-account'
          className='flex rounded-md '
        >
          <button className='text-center px-10 py-[.8rem] font-semibold text-[.9rem] bg-primary hover:bg-orange-400/90 rounded-md  shadow-lg uppercase'>
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}
