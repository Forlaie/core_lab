"use client"

import React, { useEffect, useState } from 'react'
import { posters } from '@/Assets/assets'
import Image from "next/image";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from 'next/link';

const Posters = () => {
    let length = Object.keys(posters).length;

    let [current, setCurrent] = useState(0);
    
    let previousSlide = ()=>{
        if(current===0){
            setCurrent(length-1)
        }
        else{
            setCurrent(current-1);
        }
    }

    let nextSlide = ()=>{
        if(current===length-1){
            setCurrent(0)
        }
        else{
            setCurrent(current+1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval); // cleanup on unmount or when slides change
    }, [length]);

  return (
    <div id="posters" className='py-10 pb-5 pr-30'>
        <h1 className="text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]">
            Poster Showcase
        </h1>
        <div className="overflow-hidden relative pt-5 flex items-center">
            <button onClick={previousSlide} className="text-5xl text-[#0b3a72] cursor-pointer px-4">
                <BsFillArrowLeftCircleFill />
            </button>

            <div className="flex-1 overflow-hidden">
                <div
                className={`flex transition ease-out duration-500`}
                style={{ transform: `translateX(-${current * 100}%)` }}
                >
                {Object.values(posters).map((poster, index) => (
                    <Link href={poster.link} key={index} className='flex-none w-full'>
                        <div className="px-10 pt-5 pb-12 border border-gray-300 rounded-3xl duration-500 cursor-pointer">
                        <Image src={poster.image} alt="poster" className="h-130 w-auto mb-3 mx-auto" />
                        <p className="pt-3 text-[#0b3a72] border-t-2 border-t-[#0b3a72] hover:underline">
                            <b>{poster.conference}</b> — {poster.title}
                        </p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>

            <button onClick={nextSlide} className="text-5xl text-[#0b3a72] cursor-pointer px-4">
                <BsFillArrowRightCircleFill />
            </button>

            <div className='absolute bottom-0 py-4 flex justify-center gap-7 w-full'>
                {Object.values(posters).map((poster, index)=>{
                    return (
                        <div key={index} className={`rounded-full w-3 h-3 cursor-pointer ${index===current? 'bg-gray-600' : 'bg-gray-300'}`} onClick={()=>{setCurrent(index)}}></div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Posters
