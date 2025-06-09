import React from 'react'
import './Team.css'

const Sidebar = () => {
  return (
    <div className='pl-30 py-5 pr-5 w-[30%]'>
        <div className='flex flex-col space-y-4 sticky top-26 bg-white z-20'>
            <a href="#professor" className='bar'>
                Professors
            </a>
            <a href="#grads" className='bar'>
                Graduate Students
            </a>
            <a href="#undergrads" className='bar'>
                Undergraduates
            </a>
        </div>
    </div>
  )
}

export default Sidebar
