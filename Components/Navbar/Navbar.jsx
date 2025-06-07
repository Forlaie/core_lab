"use client"

import React, { useEffect, useState } from 'react'
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../Assets/core_logo.png'

const Navbar = () => {

  return (
    <nav className='sticky top-0 z-20 bg-white'>
      <div className='relative border-b border-b-[#f1f2f3]'>
          <div className='clear-both mx-auto p-4 max-w-full flex justify-between px-30 items-center'>
            <Link href="/">
              <div className='flex items-center gap-2 cursor-pointer'>
                <Image src={logo} alt="Logo" width={50} height={50}/>
                <h1 className='text-lg font-semibold text-[#002a5c]'>CORE Lab</h1>
              </div>
            </Link>
              <ul className='flex gap-[40px] text-m nav-links'>
                <Link href="/"><li className='cursor-pointer'>Home</li></Link>
                <Link href="/team"><li className='cursor-pointer'>Team</li></Link>
                <Link href="/publications"><li className='cursor-pointer'>Publications</li></Link>
                <Link href="/projects"><li className='cursor-pointer'>Projects</li></Link>
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
