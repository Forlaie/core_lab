"use client"

import React from 'react'
import Image from 'next/image';
import { art } from '@/Assets/assets';

const Artwork = () => {

  return (
    <div className='px-30 py-10 mx-auto relative'>
      <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>Our Artwork :D</h1>
      <p className='pt-2'>Not only do we do research, but we also know how to have fun! Here are some of the artworks made by some of the members in our lab:</p>
      
      <div className='grid grid-cols-auto my-5 gap-6'>
        {art.map((artwork, index)=>(
            <div className='border border-gray-400 rounded-lg px-5 py-5' key={index}>
                <Image src={artwork.image} alt="" className=''/>
                <h3 className='text-lg my-4 text-[#0b3a72] font-semibold'>Artist: {artwork.artist}</h3>
                <p className='text-sm text-gray-600 leading-5'>{artwork.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Artwork
