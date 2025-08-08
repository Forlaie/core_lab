import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectInfo} from '@/Assets/assets';

const Active = () => {
  return (
    <section className='px-30 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>Active Projects</h1>
        <p className='pt-2 pb-5'>
            These are the active projects we have going on in our lab!
        </p>
        {Object.values(projectInfo).map((project, index)=>(
            <div className="flex flex-col lg:flex-row pb-10" key={index}>
            <Image src={project.image} alt="" className='pb-5 lg:pr-4 w-full lg:w-[20%]'></Image>
            <div className="block">
                <Link href={project.link}><h4 className='m-0 text-[#002a5c] text-3xl font-semibold cursor-pointer inline hover:underline'>{project.name}</h4></Link>
                <p className='m-0 text-[#002a5c]'>{project.description}</p>
            </div>
        </div>
        ))}
    </section>
  )
}

export default Active
