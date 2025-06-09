import Member from '@/Components/Publications/Member';
import React from 'react'

export default function MemberPage({ params }) {
  return <Member member={params.member}/>;
}