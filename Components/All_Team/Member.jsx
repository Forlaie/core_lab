import React from 'react'
import papers from '../../Papers/papers.json'
import posters from '../../Papers/Posters/poster_papers.json';
import { professors, grads, undergrads, pastmembers } from '@/Assets/assets';
import Image from 'next/image'
import website_icon from '../../Assets/website_icon.png'
import google_scholar_icon from '../../Assets/google_scholar_icon.png'
import email_icon from '../../Assets/email_icon.png'
import linkedin_icon from '../../Assets/linkedin_icon.png'

const Member = ({ member }) => {
  const parts = (member || '').split('_')

  const fullName = parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ')

  const person = professors[fullName] || grads[fullName] || undergrads[fullName] || pastmembers[fullName]

  if (!person) {
    return <p>Member not found</p>
  }

  // Filter papers by year
  const filteredPapersByYear = {}
  for (const year of Object.keys(papers)) {
    const papersInYear = papers[year].filter(paper => {
      const authors = Array.isArray(paper.author) ? paper.author : [paper.author]
      return authors.some(a => a.toLowerCase() === fullName.toLowerCase())
    })
    if (papersInYear.length > 0) {
      filteredPapersByYear[year] = papersInYear
    }
  }
  const sortedPaperYears = Object.keys(filteredPapersByYear).sort((a, b) => {
    const aNum = parseInt(a)
    const bNum = parseInt(b)
    if (isNaN(aNum)) return 1
    if (isNaN(bNum)) return -1
    return bNum - aNum
  })

  // Filter posters by year
  const filteredPostersByYear = {};
  for (const poster of posters) {
    const authors = Array.isArray(poster.author) ? poster.author : [poster.author];
    if (authors.some(a => a.toLowerCase() === fullName.toLowerCase())) {
      const year = poster.year || 'Unknown';
      if (!filteredPostersByYear[year]) filteredPostersByYear[year] = [];
      filteredPostersByYear[year].push(poster);
    }
  }
  const sortedPosterYears = Object.keys(filteredPostersByYear).sort((a, b) => {
    const aNum = parseInt(a);
    const bNum = parseInt(b);
    if (isNaN(aNum)) return 1;
    if (isNaN(bNum)) return -1;
    return bNum - aNum;
  });

  return (
    <section className="px-30 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]">
        {person.name}
      </h1>

      <div className="pt-3 flex">
        <Image src={person.image} alt={person.name} className="w-[20%] pb-5" />
        <div className="pl-5 text-[#0b3a72]">
          <p className="pb-5">{person.bio}</p>
          <div className="flex flex-col items-start space-y-1 pt-3 border-t border-t-[#f1f2f3]">
            {person.website && (
              <div className="flex space-x-1 items-center">
                <Image src={website_icon} alt={person.name} className="w-6" />
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {person.website}
                </a>
              </div>
            )}
            {person.email && (
              <div className="flex space-x-1 items-center">
                <Image src={email_icon} alt={person.email} className="w-6" />
                <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline">
                  {person.email}
                </a>
              </div>
            )}
            {person.googlescholar && (
              <div className="flex space-x-1 items-center">
                <Image src={google_scholar_icon} alt="Google Scholar Profile" className="w-6" />
                <a
                  href={person.googlescholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Scholar
                </a>
              </div>
            )}
            {person.linkedin && (
              <div className="flex space-x-1 items-center">
                <Image src={linkedin_icon} alt="LinkedIn Profile" className="w-6" />
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <h1 id="papers" className="text-xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3] mt-10">
        Papers
      </h1>

      {sortedPaperYears.length === 0 && <p className="pt-5">No papers found.</p>}

      {sortedPaperYears.map(year => (
        <div key={year} className="scroll-mt-25 mt-6">
          <div className="text-[20px] text-[#0a1588] font-semibold border-y border-y-[#0a1588] py-2">
            {year}
          </div>
          <ul className="pt-5">
            {filteredPapersByYear[year].map((paper, index) => (
              <li key={paper.doi || index} className="mb-2 py-3">
                <span>
                  {Array.isArray(paper.author)
                    ? paper.author.map((a, i) => (
                        <React.Fragment key={i}>
                          {a.toLowerCase() === fullName.toLowerCase() ? (
                            <strong>{a}</strong>
                          ) : (
                            a
                          )}
                          {i < paper.author.length - 1 && ', '}
                        </React.Fragment>
                      ))
                    : paper.author.toLowerCase() === fullName.toLowerCase()
                    ? (
                      <strong>{paper.author}</strong>
                    )
                    : (
                      paper.author
                    )}
                  .
                </span>
                <span className="ml-1">
                  <a
                    href={paper.url}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    "{paper.title}"
                  </a>
                  <span className="italic"> {paper.booktitle || paper.journal || paper.series}.</span> ({paper.year}).
                  {paper.url && (
                    <span className="ml-1">
                      [
                      <a
                        href={paper.url}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        url
                      </a>
                      ]
                    </span>
                  )}
                  {paper.doi && (
                    <span className="ml-1">
                      [
                      <a
                        href={`https://doi.org/${paper.doi}`}
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
      ))}

      <h1 id="posters" className="text-xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3] mt-10">
        Posters
      </h1>

      {sortedPosterYears.length === 0 && <p className="pt-5">No posters found.</p>}

      {sortedPosterYears.map(year => (
        <div key={year} className="scroll-mt-25 mt-6">
          <div className="text-[20px] text-[#0a1588] font-semibold border-y border-y-[#0a1588] py-2">
            {year}
          </div>
          <ul className="pt-5">
            {filteredPostersByYear[year].map((poster, index) => (
              <li key={poster.doi || index} className="mb-2 py-3">
                <span>
                  {Array.isArray(poster.author)
                    ? poster.author.map((a, i) => (
                        <React.Fragment key={i}>
                          {a.toLowerCase() === fullName.toLowerCase() ? <strong>{a}</strong> : a}
                          {i < poster.author.length - 1 && ', '}
                        </React.Fragment>
                      ))
                    : poster.author}
                  .
                </span>
                <span className="ml-1">
                  <a
                    href={poster.url}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    "{poster.title}"
                  </a>
                  <span className="italic"> {poster.booktitle || poster.journal || poster.series}.</span> ({poster.year}).
                  {poster.url && (
                    <span className="ml-1">
                      [
                      <a
                        href={poster.url}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        url
                      </a>
                      ]
                    </span>
                  )}
                  {poster.doi && (
                    <span className="ml-1">
                      [
                      <a
                        href={`https://doi.org/${poster.doi}`}
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
      ))}
    </section>
  )
}

export default Member
