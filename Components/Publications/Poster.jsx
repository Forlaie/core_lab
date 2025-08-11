import { posters } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react'

const Poster = ({ doi }) => {
  const poster = posters[doi]
  const pub = poster.publication

  if (!poster) return <div>Poster Not Found</div>;

  return (
    <div className='py-10 pb-5 px-30'>
        <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3] text-center'>{poster.title}</h1>
        <div className='flex flex-row gap-20 items-start'>
            <Image src={poster.image} alt="" className='pt-5 w-[50%]'/>
            <div className='w-full'>
                <h1 className='text-xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3] mt-10'>Publication</h1>
                <div className="mb-2 py-3" key={pub.doi || pub.title}>
                    <span>
                    {Array.isArray(pub.author)
                        ? pub.author.map((a, i) => (
                            <React.Fragment key={i}>
                            {a}
                            {i < pub.author.length - 1 && ", "}
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
                        {" "}
                        {pub.booktitle || pub.journal || pub.series}.
                    </span>{" "}
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Poster