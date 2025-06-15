import Papers from '@/Components/Publications/Papers';
import Sidebar from '@/Components/Publications/Sidebar';
import React from 'react'

export default function Publications() {
  return (
    <div className="flex">
      <Sidebar/>
      <div>
        <Papers/>
      </div>
    </div>
  );
}
