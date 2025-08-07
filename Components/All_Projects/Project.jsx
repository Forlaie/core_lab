import React from 'react';
import Image from 'next/image';
import { projectInfo } from '@/Assets/assets';

const Project = ({ name }) => {

  const project = projectInfo[name]

  if (!project) return <div>Project Not Found</div>;

  const pubs = project.publications

  const pubsByYear = pubs.reduce((acc, pub) => {
    const year = pub.year || 'Unknown';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(pubsByYear).sort((a, b) => b.localeCompare(a));

  return (
    <section className='px-30 py-10 mx-auto'>

        <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>
            VoiceEx
        </h1>

        <div className='pt-3 flex items-center'>
            <Image src={project.image} alt="" className='w-[20%] pb-5' />
            <div className='pl-5 text-[#0b3a72]'>
                <p className='pb-5'>
                VoiceEx is a voice explanations system we've been developing over the past couple years.
                Primarily focused on self-explanations to enhance student learning, we've gone from prompting text self-explanations to voice self-explanations.
                Using VoiceEx, instructors can prompt students to reflect on a specific question/topic, which students then record a self-explanation to.
                Afterwards, students may receive feedback or follow-up questions on their self-explanation.
                </p>
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
                                {a}
                                {i < pub.author.length - 1 && ', '}
                            </React.Fragment>
                            ))
                        : pub.author}
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
    
    export default Project;
