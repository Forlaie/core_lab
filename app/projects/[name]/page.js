import Project from '@/Components/All_Projects/Project';
import React from 'react';

export default async function ProjectPage({ params }) {
  const { name } = await params;
  return <Project name={name} />;
}