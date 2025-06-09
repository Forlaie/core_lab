import React from 'react'
import publications from '../../data/publications.json';
import Image from 'next/image';
import generic from '../../Assets/generic.png'

const Member = ({member}) => {
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
      <section className='px-30 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>{fullName}</h1>
        <div className='pt-3 flex'>
            <Image src={generic} alt="" className='w-[20%]'/>
            <div className='pl-5 text-[#0b3a72]'>
                <p>
                    Naaz is a PHD student and she is very cool :D<br/>
                    This is her{' '}
                    <a href="https://www.naazsibia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        website
                    </a>
                    .
                </p>
            </div>
        </div>
        <ul className='pt-5'>
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
      </section>
    )
}

export default Member
