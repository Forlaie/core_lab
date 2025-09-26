import Member from '@/Components/All_Team/Member';
import Sidebar from '@/Components/Publications/Sidebar';
import React from 'react';

export default async function MemberPage({ params }) {
  const { member } = await params;
  return (
    <div className='flex'>
      {/* <Sidebar/> */}
      <div>
        <Member member={member} />
      </div>
    </div>
  )
}