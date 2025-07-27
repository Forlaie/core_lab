import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { professors, grads, undergrads } from '@/Assets/assets';

const Members = () => {
  return (
    <div className='pl-5 pb-10'>
    <div className="scroll-mt-20" id="professor">
      <h1 className='text-3xl text-[#0a1588] font-bold pt-5'>Professors</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 pr-30">
        {professors.map((person, index)=>(

          <Link href={person.link} key={index}>
          <div className="border border-gray-400 rounded-lg px-5 py-5 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
            <div className="flex box-border items-center">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-center cursor-pointer"
                    />
                  </div>
                <div className="block ml-5">
                  <h4 className="m-0 text-[#002a5c] font-semibold">{person.name}</h4>
                  <p className="m-0 text-[#002a5c]">{person.position}</p>
                </div>
            </div>
          </div>
          </Link>

        ))}

      </div>
    </div>

    <div className="scroll-mt-5" id="grads">
      <h1 className='text-3xl text-[#0a1588] font-bold pt-20'>Graduate Students</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 pr-30">
        {grads.map((person, index)=>(

          <Link href={person.link} key={index}>
          <div className="border border-gray-400 rounded-lg px-8 py-8 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
            <div className="flex box-border items-center">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-center cursor-pointer"
                    />
                  </div>
                <div className="block ml-5">
                  <h4 className="m-0 text-[#002a5c] font-semibold">{person.name}</h4>
                  <p className="m-0 text-[#002a5c]">{person.position}</p>
                </div>
            </div>
          </div>
          </Link>

        ))}

      </div>
    </div>

    <div className="scroll-mt-5" id="undergrads">
      <h1 className='text-3xl text-[#0a1588] font-bold pt-20'>Undergraduate Students</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 pr-30">
        {undergrads.map((person, index)=>(

          <Link href={person.link} key={index}>
          <div className="border border-gray-400 rounded-lg px-8 py-8 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
            <div className="flex box-border items-center">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-center cursor-pointer"
                    />
                  </div>
                <div className="block ml-5">
                  <h4 className="m-0 text-[#002a5c] font-semibold">{person.name}</h4>
                  <p className="m-0 text-[#002a5c]">{person.position}</p>
                </div>
            </div>
          </div>
          </Link>

        ))}

      </div>
    </div>

    </div>
  )
}

export default Members
