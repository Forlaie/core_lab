"use client"

import React, { useState } from 'react'
import publicationsByYear from '../../data/papers.json'
import SearchBar from './SearchBar'
import "./Style.css"

const Papers = () => {
  const [query, setQuery] = useState('')

  // Flatten all publications into one list
  const allPublications = Object.entries(publicationsByYear).flatMap(([year, pubs]) =>
    pubs.map(pub => ({ ...pub, year }))
  )

  // Filter publications according to query
  const filtered = allPublications.filter(pub => {
    const searchString = `${pub.title} ${pub.author} ${pub.year} ${pub.booktitle || pub.journal || pub.series}`.toLowerCase()
    return searchString.includes(query.toLowerCase())
  })

  // Re-group filtered results by year (preserve order)
  const groupedFiltered = filtered.reduce((acc, pub) => {
    const year = pub.year || 'Unknown'
    if (!acc[year]) acc[year] = []
    acc[year].push(pub)
    return acc
  }, {})

  // Preserve the original descending order
  const sortedYears = Object.keys(groupedFiltered)
  .sort((a, b) => {
    const aNum = parseInt(a)
    const bNum = parseInt(b)

    // Place non-numeric years like "Unknown" at the end
    if (isNaN(aNum)) return 1
    if (isNaN(bNum)) return -1

    return bNum - aNum // Descending
  })

  return (
    <section className="pr-30 pl-5 py-5 mx-auto w-300">
      <h1 className="text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]">
        All Publications
      </h1>

      <SearchBar query={query} setQuery={setQuery} />

      {filtered.length === 0 ? (
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
              {groupedFiltered[year].map((pub, index) => (
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
