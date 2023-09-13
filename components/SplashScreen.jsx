import React from "react";
import { PiSignInBold } from "react-icons/pi";

export default function SplashScreen() {
  return (
    <div className='py-[3rem] bg-slate-50 flex flex-col items-center justify-center gap-[5rem] w-full'>
      <h2 className='font-extrabold text-[2.5rem]'>
        GPT<span className='font-medium text-black'>Quiz</span>
      </h2>
      <button
        type='button'
        class='text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2'
      >
        <PiSignInBold className='w-4 h-4 mr-2' />
        Continue to authorization
      </button>
    </div>
  );
}
