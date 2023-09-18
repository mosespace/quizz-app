"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxEyeClosed } from "react-icons/rx";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";

export default function SignUp() {
  return (
    <>
      <div className='bg-orange-50 min-[530px]:px-[3rem] text-slate-900 h-screen max-w-full flex flex-col py-4  align-middle items-center justify-center'>
        <div className=' w-full lg:w-[65%] overflow-hidden px-[2rem] lg:max-w-[450px]'>
          <div id='#upper-form'>
            <div id='#main-text' className='text-center'>
              <h1 className='text-2xl font-bold'>
                GPT<span className='font-light'>Quiz</span>
              </h1>
              <span className='text-gray-700'>
                Got an account already?
                <a href='/quizhack' className='text-secondary font-semibold'>
                  {" "}
                  Log in
                </a>
                .
              </span>
            </div>
          </div>
          <div id='#downer-form'>
            <form action=''>
              <label className='pt-[1.9rem] flex flex-col gap-[1rem] pb-[.5rem] border-b-2 border-b-gray-300 '>
                <h2 className='font-semibold'>User name</h2>
                {/* <BsPersonFill className='text-[1.5rem]' /> */}
                <div className='flex justify-between'>
                  <input
                    type='text'
                    name='user_first_name'
                    placeholder='@moses_desishub'
                    id='#first-name'
                    className='bg-transparent focus:outline-none'
                  />
                  <BsCheck2 className='text-orange-400' />
                </div>
              </label>
              <label className='pt-[1.9rem] flex flex-col gap-[1rem] pb-[.5rem] border-b-2 border-b-gray-300 '>
                <h2 className='font-semibold'>Email</h2>
                {/* <MdOutlineMarkEmailRead className='text-[1.5rem]' /> */}
                <input
                  type='email'
                  name='user_email'
                  placeholder='moses@desishub.com'
                  id='#email'
                  className='bg-transparent focus:outline-none'
                />
              </label>
              <label className='pt-[1.9rem] flex flex-col gap-[1rem] pb-[.5rem] border-b-2 border-b-gray-300 '>
                <h2 className='font-semibold'>Password</h2>

                {/* <GoLock className='text-[1.5rem]' /> */}
                <div className='flex justify-between items-center'>
                  <input
                    type='password'
                    name='user_password'
                    placeholder='********'
                    id='#password'
                    className='bg-transparent focus:outline-none'
                  />
                  <RxEyeClosed className='text-orange-400' />
                </div>
              </label>
            </form>
            <div
              id='#OR'
              className=' flex items-center justify-center py-[1.2rem] font-semibold text-slate-400 w-full'
            >
              <span className='border-t-2 border-slate-300  w-full '></span>
              <h1>OR</h1>
              <span className='border-t-2 border-slate-300  w-full '></span>
            </div>
            <div id='#upper-form'>
              <div id='#sign-up' className='flex  pb-[1.2rem]  font-bold '>
                <button className='flex text-[.9rem] min-[425px]:gap-[5rem] gap-4 py-[.6rem] px-3 w-full items-center justify-items-center border-2 rounded-full border-slate-400'>
                  <FcGoogle size={30} />
                  continue with google
                </button>
              </div>
              <div id='#sign-up' className='flex  pb-[1.2rem]  font-bold '>
                <button className='flex text-[.9rem] min-[425px]:gap-[5rem] gap-4 py-[.6rem] px-3 w-full items-center justify-items-center border-2 rounded-full border-slate-400'>
                  <BiLogoFacebookCircle size={30} className='text-blue-600' />
                  continue with facebook
                </button>
              </div>
            </div>
            <div id='#submit-button' className='py-[1.3rem]'>
              <a href='/on-boarding-screens'>
                <button
                  type='submit'
                  className='w-full flex items-center justify-center py-[.8rem] px-[1rem] font-bold text-gray-50 rounded-full bg-orange-400 hover:bg-orange-400/80 hover:text-white'
                >
                  Sign up
                </button>
              </a>
            </div>
            <div className='flex text-[.8rem] items-center justify-center text-center'>
              <p>
                By creating an account, you automatically accept our{" "}
                <a href='#' className='text-blue-600'>
                  Terms{" "}
                </a>
                and
                <a href='#' className='text-blue-600'>
                  {" "}
                  Service
                </a>
                , Privacy Policy and Cookies Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
