"use client"

import React, { useState } from 'react'
import publications from '../../data/test.json'
import SearchBar from './SearchBar'

const Papers = () => {
  const [query, setQuery] = useState('')

  // Filtering logic
  const filteredPublications = publications.filter(pub => {
    const searchString = `${pub.title} ${pub.author} ${pub.year} ${pub.booktitle || pub.journal || pub.series}`.toLowerCase()
    return searchString.includes(query.toLowerCase())
  })

  return (
    <section className='px-30 py-10 mx-auto'>
      <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>
        All Publications
      </h1>

      <SearchBar query={query} setQuery={setQuery} />

      <ul className='pt-5'>
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub, index) => (
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
                <span className="italic"> {pub.booktitle || pub.journal || pub.series}.</span> ({pub.year}).
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
          ))
        ) : (
          <li>No matching publications found.</li>
        )}
      </ul>
    </section>
  )
}

export default Papers
