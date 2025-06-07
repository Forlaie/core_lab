import React from 'react'
import publications from '../../data/publications.json'

export default function Publications() {
  return (
    <div>
      <h1>All Publications</h1>
      <ul>
        {publications.map((pub) => (
          <li key={pub.doi}>
            <strong>{pub.title}</strong> by {Array.isArray(pub.author) ? pub.author.join(', ') : pub.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
