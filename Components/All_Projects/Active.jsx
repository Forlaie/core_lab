import React from 'react'
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
        <div className="flex flex-col lg:flex-row pt-5">
            <Image src={voiceex} alt="" className='pb-5 lg:pr-4 w-full lg:w-[20%]'></Image>
            <div className="block">
                <Link href="/projects/voiceex"><h4 className='m-0 text-[#002a5c] text-3xl font-semibold cursor-pointer inline hover:underline'>VoiceEx</h4></Link>
                <p className='m-0 text-[#002a5c]'>
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
