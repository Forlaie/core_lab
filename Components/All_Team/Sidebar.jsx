import React from 'react'

const Sidebar = () => {
  return (
    <div className='pl-5 lg:pl-30 py-5 pr-5 w-[20%]'>
        <div className='flex flex-col space-y-4 sticky top-26 bg-transparent z-20'>
            <a href="#professor" className='text-[#06264c] pb-2 border-b border-[#f1f2f3] cursor-pointer'>
                Professors
            </a>
            <a href="#grads" className='text-[#06264c] pb-2 border-b border-[#f1f2f3] cursor-pointer'>
                Graduate Students
            </a>
            <a href="#undergrads" className='text-[#06264c] pb-2 border-b border-[#f1f2f3] cursor-pointer'>
                Undergraduates
            </a>
            <a href="#pastmembers" className='text-[#06264c] pb-2 border-b border-[#f1f2f3] cursor-pointer'>
                Past Members
            </a>
        </div>
    </div>
  )
}

export default Sidebar
