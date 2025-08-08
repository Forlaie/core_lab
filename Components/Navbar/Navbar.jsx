"use client"

import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../Assets/core_logo.png'
import header_bg_color from '../../Assets/header-bg-color.png'
import { assets } from '@/Assets/assets';

const Navbar = () => {

  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  const [isScroll, setIsScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }
      else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={header_bg_color} alt="" className='w-full'/>
    </div>

    <nav className={`sticky top-0 z-20 transition-colors duration-300 ease-in-out ${isScroll ? "bg-white" : "bg-transparent"}`}>
      <div className='relative border-b border-b-[#f1f2f3]'>
          <div className='clear-both mx-auto p-4 max-w-full flex justify-between px-30 items-center'>
            <Link href="/">
              <div className='flex items-center gap-2 cursor-pointer'>
                <Image src={logo} alt="Logo" width={50} height={50}/>
                <h1 className='text-lg font-semibold text-[#002a5c]'>CORE Lab</h1>
              </div>
            </Link>
              <ul className='hidden md:flex gap-[40px] text-m nav-links'>
                <Link href="/"><li className='cursor-pointer'>Home</li></Link>
                <Link href="/team"><li className='cursor-pointer'>Team</li></Link>
                <Link href="/publications"><li className='cursor-pointer'>Publications</li></Link>
                <Link href="/projects"><li className='cursor-pointer'>Projects</li></Link>
                <Link href="#contactus"><li className='cursor-pointer'>Contact Us</li></Link>
              </ul>

              <button className='block md:hidden top-0 right-0' onClick={openMenu}>
                  <Image src={assets.menu_black} alt="" className='w-6'/>
              </button>
          </div>
      </div>

      {/* mobile menu */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          
          <button className='absolute right-6 top-6' onClick={closeMenu}>
              <Image src={assets.close_black} alt="" className='w-5 cursor-pointer'/>
          </button>
          <Link href="/"><li className='cursor-pointer'>Home</li></Link>
          <Link href="/team"><li className='cursor-pointer'>Team</li></Link>
          <Link href="/publications"><li className='cursor-pointer'>Publications</li></Link>
          <Link href="/projects"><li className='cursor-pointer'>Projects</li></Link>
          <Link href="#contactus"><li className='cursor-pointer'>Contact Us</li></Link>
      </ul>

    </nav>
  </>
  )
}

export default Navbar
