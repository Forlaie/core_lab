import React from 'react'
import publications from '../../../data/publications.json';

export default function Name({params}) {
  const { member } = params;
  const parts = (member || '').split('_');

  const fullName = parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');

  const authorPublications = publications.filter(pub =>
    pub.author.some(a => a.toLowerCase().includes(fullName.toLowerCase()))
  );

  return (
    <div>
      <h1>Team Member: {fullName}</h1>
      <h2>Publications:</h2>
      <ul>
        {authorPublications.map((pub) => (
          <li key={pub.doi}>{pub.title}</li>
        ))}
      </ul>
    </div>
  );
}