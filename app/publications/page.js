import Papers from '@/Components/Publications/Papers';
import Sidebar from '@/Components/Publications/Sidebar';
import React from 'react'

export default function Publications() {
  return (
    <div className="flex w-full">
      <div className='w-[20%]'>
      <Sidebar/>
      </div>
      <div className='w-[80%]'>
        <Papers/>
      </div>
    </div>
  );
}
