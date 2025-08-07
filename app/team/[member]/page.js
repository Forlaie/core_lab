import Member from '@/Components/Publications/Member';
import React from 'react';

export default async function MemberPage({ params }) {
  const { member } = await params;
  return <Member member={member} />;
}