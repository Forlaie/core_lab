import React from 'react'
import Members from '@/Components/All_Team/Team';
import Sidebar from '@/Components/All_Team/Sidebar';

export default function Team() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
        <Members/>
      </div>
    </div>
  );
}