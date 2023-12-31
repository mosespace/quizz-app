import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrLinkNext } from "react-icons/gr";

export default function Index() {
  const data = [
    {
      pathname: "/mathematics",
      image: "/math-quiz.png",
      alt: "GPTQuiz mathematics",
      title: "Mathematics",
    },
    {
      pathname: "/sst-quiz",
      image: "/social-studies-quiz.png",
      alt: "GPTQuiz social-studies",
      title: "Social Studies",
    },
    {
      pathname: "/science-quiz",
      image: "/science-quiz.webp",
      alt: "GPTQuiz science",
      title: "Science",
    },
    {
      pathname: "/cre-quiz",
      image: "/sst-quiz.jpg",
      alt: "GPTQuiz cre",
      title: "CRE",
    },
  ];
  return (
    <div className='flex flex-col py-[8rem] w-full h-screen'>
      <div className='flex p-[2rem] justify-between'>
        <h2 className='font-bold'>Current Quizzes</h2>
        <div className='flex justify-between items-center gap-2 text-primary'>
          <Link href='#'>
            <span>See All </span>
          </Link>
          <GrLinkNext className='text-primary' />
        </div>
      </div>
      <div className='grid gap-2 grid-cols-1 px-[2rem] lg:grid-cols-4'>
        {data.map((item, i) => {
          return (
            <div className='flex flex-col' key={i}>
              <Link href={item.pathname}>
                <div className='relative h-[150px] lg:h-[250px] w-full'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='font-bold bg-primary  lg:bg-secondary text-center py-4'>
                  <span>{item.title}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
