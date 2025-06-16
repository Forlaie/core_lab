import React from 'react'
import publications from '../../data/papers.json';
import bio from '../../data/bios.js'; 
import Image from 'next/image';

const Member = ({ member }) => {
  const parts = (member || '').split('_');

  const fullName = parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');

  const authorPublications = publications.filter(pub => {
    const authors = Array.isArray(pub.author) ? pub.author : [pub.author];
    return authors.some(a => a.toLowerCase() === fullName.toLowerCase());
  });

  const pubsByYear = authorPublications.reduce((acc, pub) => {
    const year = pub.year || 'Unknown';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(pubsByYear).sort((a, b) => b.localeCompare(a));

  const person = bio.find(m => m.name === fullName);

  if (!person) {
    return <p>Member not found.</p>;
  }

  return (
    <section className='px-30 py-10 mx-auto'>
      <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>
        {person.name}
      </h1>

      <div className='pt-3 flex'>
        <Image src={person.image} alt={person.name} className='w-[20%] pb-5' />
        <div className='pl-5 text-[#0b3a72]'>
          <p className='pb-5'>
            {person.bio}
          </p>
          <a
            href={person.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Website
          </a>
        </div>
      </div>

      <h1 className='text-xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3] mt-10'>
        Publications
      </h1>

      {sortedYears.map(year => (
        <div key={year} className="scroll-mt-25 mt-6">
          <div className="text-[20px] text-[#0a1588] font-semibold border-y border-y-[#0a1588] py-2">
            {year}
          </div>
          <ul className="pt-5">
            {pubsByYear[year].map((pub, index) => (
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
                      ? <strong>{pub.author}</strong>
                      : pub.author
                  }
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
      ))}
    </section>
  );
};

export default Member;
