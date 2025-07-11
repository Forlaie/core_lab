import React from 'react'
import './Projects.css'
import Image from 'next/image'
import Link from 'next/link'
import voiceex from '../../Assets/voiceex.png'

const Active = () => {
  return (
    <section className='px-30 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>Active Projects</h1>
        <p className='pt-2'>
            These are the active projects we have going on in our lab!
        </p>
        <div className="project">
            <Image src={voiceex} alt=""></Image>
            <div className="project-info">
                <Link href="/projects/voiceex"><h4>VoiceEx</h4></Link>
                <p>
                    VoiceEx is a voice explanations system we've been developing over the past couple years.
                    Primarily focused on self-explanations to enhance student learning, we've gone from prompting text self-explanations to voice self-explanations.
                    Using VoiceEx, instructors can prompt students to reflect on a specific question/topic, which students then record a self-explanation to.
                    Afterwards, students may receive feedback or follow-up questions on their self-explanation.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Active
