import React from "react";


export default function Login() {
  return (
    <div className='flex items-center justify-center'>
      <div className='relative left-0 right-0 m-0'>
        <div className='relative'>
          <img
            src='/3264493.jpg'
            alt='GPT-Image'
            fill
            className='w-full h-full object-cover'
          />
        </div>
        <div className='bg-orange-400 flex items-center justify-center absolute left-20 top-[10rem] z-50 h-[150px] w-full transform -translate-x-1/2 ml-0'>
          <h2 className='font-bold text-2xl pl-[3rem]'>Welcome Back!</h2>
        </div>
      </div>
    </div>
  );
}
