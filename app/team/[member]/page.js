import React from 'react'
import publications from '../../../data/publications.json';

export default function Name({params}) {
  const { member } = params;
  const parts = (member || '').split('_');

  const fullName = parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');

  // If it's "Last, First", convert to "First Last"
  const normalize = name => {
    if (name.includes(',')) {
      const [last, first] = name.split(',').map(s => s.trim());
      return `${first} ${last}`.toLowerCase();
    }
    return name.toLowerCase();
  };

  const authorPublications = publications.filter(pub => {
    const authors = Array.isArray(pub.author) ? pub.author : [pub.author];
    return authors.some(a => normalize(a) === fullName.toLowerCase());
  });

  return (
    <div>
      <h1>Team Member: {fullName}</h1>
      <h2>Publications:</h2>
      <ul>
        {authorPublications.map((pub, index) => (
          <li key={pub.doi || index} className="mb-2">
            {Array.isArray(pub.author) ? pub.author.join(', ') : pub.author}.
            <span className="ml-1">
              <a
                href={pub.url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                "{pub.title}"
              </a>
              <span className="italic">
                {' '}
                {pub.booktitle || pub.journal || pub.series}.
              </span>{' '}
              ({pub.year}).
              {pub.url && (
                <span className="ml-1">
                  [
                  <a
                    href={pub.url}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    url
                  </a>
                  ]
                </span>
              )}
              {pub.doi && (
                <span className="ml-1">
                  [
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    doi
                  </a>
                  ]
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

    </div>
  );
}