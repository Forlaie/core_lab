import React from 'react'
import './Projects.css'
import Image from 'next/image'
import project1 from '../../Assets/project1.png'
import project2 from '../../Assets/project2.png'

const Active = () => {
  return (
    <section className='px-30 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>Active Projects</h1>
        <p className='pt-2'>
            These are some of the active projects we have going on in our lab!
        </p>
        <div className="project">
            <Image src={project1} alt=""></Image>
            <div className="project-info">
                <h4>VoiceEx</h4>
                <p>This is the description</p>
            </div>
        </div>
        <div className="project">
            <Image src={project2} alt=""></Image>
            <div className="project-info">
                <h4>Other</h4>
                <p>This is the description</p>
            </div>
        </div>
    </section>
  )
}

export default Active
