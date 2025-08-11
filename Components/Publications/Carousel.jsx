import Image from "next/image";
import { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Carousel = ({slides}) => {

    let [current, setCurrent] = useState(0);

    let previousSlide = ()=>{
        if(current===0){
            setCurrent(slides.length-1)
        }
        else{
            setCurrent(current-1);
        }
    }

    let nextSlide = ()=>{
        if(current===slides.length-1){
            setCurrent(0)
        }
        else{
            setCurrent(current+1);
        }
    }

    return (
    <div className="overflow-hidden relative pt-5">
        <div className={`flex transition ease-out duration-400`} style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((s, index)=>{
                return (
                    <div key={index} className='flex-none w-full px-10 py-7 border border-gray-300 rounded-3xl hover:-translate-y-2 duration-500 cursor-pointer'>
                        <Image src={s} alt='poster' className='h-150 w-auto mb-3'/>
                        <p className='pt-3 text-[#0b3a72] border-t-2 border-t-[#0b3a72] hover:underline'>
                            <b>ITiCSE 2025 Poster</b> — Self-Explanations: Does Timing Matter?
                        </p>
                    </div>
                )
            })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex pr-30 text-5xl te">
            <button className="cursor-pointer" onClick={previousSlide}>
                <BsFillArrowLeftCircleFill/>
            </button>
            <button className="cursor-pointer" onClick={nextSlide}>
                <BsFillArrowRightCircleFill/>
            </button>
        </div>
    </div>
    )
}

export default Carousel