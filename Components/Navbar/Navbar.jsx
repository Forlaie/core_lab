import React from 'react'
import './Navbar.css';
import Image from 'next/image';
import logo from '../../Assets/core_logo.png'

const Navbar = () => {
  return (
    <div className='relative border-b border-b-[#f1f2f3]'>
        <div className='clear-both mx-auto p-4 max-w-full flex justify-between px-30 items-center'>
            <div className='flex items-center gap-2'>
              <Image src={logo} alt="Logo" width={50} height={50}/>
              <h1 className='text-lg font-semibold text-[#002a5c]'>CORE Lab</h1>
            </div>
            <ul className='flex gap-[40px] text-m nav-links'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Team</li>
                <li className='cursor-pointer'>Publications</li>
                <li className='cursor-pointer'>Projects</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
