import Title from '@/Components/All_Projects/Title';
import React from 'react';

export default async function TitlePage({ params }) {
  const { title } = await params; // await needed if Next.js treats params as Promise
  return <Title title={title} />;
}