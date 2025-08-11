
import Poster from '@/Components/Publications/Poster';
import React from 'react';

export default async function PosterPage({ params }) {
  const { doi } = await params;
  return <Poster doi={doi} />;
}