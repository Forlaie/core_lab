"use client"

import React, { useState } from 'react'
import publications from '../../data/papers.json'
import SearchBar from './SearchBar'
import "./Style.css"

const Papers = () => {
  const [query, setQuery] = useState('')

  // Filter publications according to search bar
  const filteredPublications = publications.filter(pub => {
    const searchString = `${pub.title} ${pub.author} ${pub.year} ${pub.booktitle || pub.journal || pub.series}`.toLowerCase()
    return searchString.includes(query.toLowerCase())
  })

  // Group publications by year
  const pubsByYear = filteredPublications.reduce((acc, pub) => {
    const year = pub.year || 'Unknown'
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(pub)
    return acc
  }, {})

  // Get years sorted descending (most recent first)
  const sortedYears = Object.keys(pubsByYear).sort((a, b) => b.localeCompare(a))

  return (
    <section className="pr-30 pl-5 py-5 mx-auto w-300">
      <h1 className="text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]">
        All Publications
      </h1>

      <SearchBar query={query} setQuery={setQuery} />

      {filteredPublications.length === 0 ? (
        <ul className="pt-5">
          <li>No matching publications found.</li>
        </ul>
      ) : (
        sortedYears.map(year => (
          <div key={year} id={year} className="scroll-mt-25">
            <div className="text-[20px] text-[#0a1588] font-semibold border-y border-y-[#0a1588] py-2">
              {year}
            </div>
            <ul className="pt-5">
              {pubsByYear[year].map((pub, index) => (
                <li key={pub.doi || index} className="mb-2 py-3">
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
              ))}
            </ul>
          </div>
        ))
      )}
    </section>
  )
}

export default Papers
