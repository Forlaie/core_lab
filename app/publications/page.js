import Papers from '@/Components/Publications/Papers';
import Posters from '@/Components/Publications/Posters';
import Sidebar from '@/Components/Publications/Sidebar';
import React from 'react'

export default function Publications() {
  return (
    <div className="flex">
      <Sidebar/>
      <div>
        <Posters/>
        <Papers/>
      </div>
    </div>
  );
}
