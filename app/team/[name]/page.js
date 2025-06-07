import React from 'react'
import publications from '../../../data/publications.json';

export default function Name({params}) {
  const { name } = params;

  const authorPublications = publications.filter(pub =>
    pub.author.some(a => a.toLowerCase().includes(name.toLowerCase()))
  );

  return (
    <div>
      <h1>Team Member: {name}</h1>
      <h2>Publications:</h2>
      <ul>
        {authorPublications.map((pub) => (
          <li key={pub.doi}>{pub.title}</li>
        ))}
      </ul>
    </div>
  );
}