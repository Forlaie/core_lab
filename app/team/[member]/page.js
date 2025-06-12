import Member from '@/Components/Publications/Member';
import React from 'react';

export default async function MemberPage({ params }) {
  const { member } = await params; // await needed if Next.js treats params as Promise
  return <Member member={member} />;
}