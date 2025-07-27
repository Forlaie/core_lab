import React from 'react'
import publications from '../../Papers/papers.json'
import { professors, grads, undergrads } from '@/Assets/assets';
import Image from 'next/image'
import website_icon from '../../Assets/website_icon.png'
import google_scholar_icon from '../../Assets/google_scholar_icon.png'
import email_icon from '../../Assets/email_icon.png'

const Member = ({ member }) => {
  const parts = (member || '').split('_')

  const fullName = parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ')

  const person = professors.find(m => m.name === fullName) || grads.find(m => m.name === fullName) || undergrads.find(m => m.name === fullName)

  if (!person) {
    return <p>Member not found.</p>
  }

  // Filter publications inside each year group, keeping original year order
  const filteredPubsByYear = {}

  for (const year of Object.keys(publications)) {
    const pubsInYear = publications[year].filter(pub => {
      const authors = Array.isArray(pub.author) ? pub.author : [pub.author]
      return authors.some(a => a.toLowerCase() === fullName.toLowerCase())
    })
    if (pubsInYear.length > 0) {
      filteredPubsByYear[year] = pubsInYear
    }
  }

  const sortedYears = Object.keys(filteredPubsByYear).sort((a, b) => {
    const aNum = parseInt(a)
    const bNum = parseInt(b)
    if (isNaN(aNum)) return 1 // Put non-numeric last
    if (isNaN(bNum)) return -1
    return bNum - aNum // Descending numeric sort
  })


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
                <Image src={email_icon} alt={person.name} className="w-6" />
                <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline">
                  {person.email}
                </a>
              </div>
            )}
            {person.googlescholar && (
              <div className="flex space-x-1 items-center">
                <Image src={google_scholar_icon} alt={person.name} className="w-6" />
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
          </div>
        </div>
      </div>

      <h1 className="text-xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3] mt-10">
        Publications
      </h1>

      {sortedYears.map(year => (
        <div key={year} className="scroll-mt-25 mt-6">
          <div className="text-[20px] text-[#0a1588] font-semibold border-y border-y-[#0a1588] py-2">
            {year}
          </div>
          <ul className="pt-5">
            {filteredPubsByYear[year].map((pub, index) => (
              <li key={pub.doi || index} className="mb-2 py-3">
                <span>
                  {Array.isArray(pub.author)
                    ? pub.author.map((a, i) => (
                        <React.Fragment key={i}>
                          {a.toLowerCase() === fullName.toLowerCase() ? (
                            <strong>{a}</strong>
                          ) : (
                            a
                          )}
                          {i < pub.author.length - 1 && ', '}
                        </React.Fragment>
                      ))
                    : pub.author.toLowerCase() === fullName.toLowerCase()
                    ? (
                      <strong>{pub.author}</strong>
                    )
                    : (
                      pub.author
                    )}
                  .
                </span>
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
      ))}
    </section>
  )
}

export default Member
