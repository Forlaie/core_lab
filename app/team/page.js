import React from 'react'
import Profs from '@/Components/All_Team/Profs';
import Undergrads from "@/Components/All_Team/Undergrads";
import Sidebar from '@/Components/All_Team/Sidebar';
import Grads from '@/Components/All_Team/Grads';

export default function Team() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
        <Profs/>
        <Grads/>
        <Undergrads/>
      </div>
    </div>
  );
}