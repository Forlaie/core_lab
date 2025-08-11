import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import email_icon from '../../Assets/email_icon.png'

const Footer = () => {
  return (
    <div className='px-30 pt-10 mx-auto' id='contactus'>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mt-12 py-6'>
        <p>Want to contact us or learn more?</p>
        <ul className='flex flex-col items-front gap-2 justify-center mt-4 sm:mt-0'>
            <li className='flex gap-1'> <Image src={email_icon} alt="email" className="w-7"/> <a href="mailto:learningcs.utm@utoronto.ca" className="text-blue-600 hover:underline">learningcs.utm@utoronto.ca</a></li>
            <li className='flex gap-1'> <Image src={email_icon} alt="email" className="w-7"/> <a href="mailto:michael.liut@utoronto.ca" className="text-blue-600 hover:underline">michael.liut@utoronto.ca</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer