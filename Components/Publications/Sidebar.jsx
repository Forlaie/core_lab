import React from 'react'

const Sidebar = () => {
  return (
    <div className='pl-5 lg:pl-30 py-5 pr-5 w-150'>
        <div className='flex flex-col space-y-4 sticky top-26 bg-transparent z-20'>
            <a href="#posters" className='color-[#06264c] pb-[8px] border-b border-b-[#f1f2f3] cursor-pointer'>
                Posters
            </a>
            <a href="#publications" className='color-[#06264c] pb-[8px] border-b border-b-[#f1f2f3] cursor-pointer'>
                Publications
            </a>
        </div>
    </div>
  )
}

export default Sidebar