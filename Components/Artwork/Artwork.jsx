"use client"

import React, { useRef } from 'react'
import Image from 'next/image';
import './Artwork.css'
import next_icon from '../../Assets/next_icon.png'
import back_icon from '../../Assets/back_icon.png'
import ml_name from '../../Assets/ml_name.png'
import ap_name from '../../Assets/ap_name.png'
import door from '../../Assets/door.png'
import window from '../../Assets/window.png'
import whiteboard from '../../Assets/whiteboard.png'

const Artwork = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if (tx > -50){
            tx -= 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if (tx < 0){
            tx += 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='px-30 py-10 mx-auto relative'>
      <h1 className='text-2xl font-semibold text-[#0b3a72] pb-2 border-b border-b-[#f1f2f3]'>Our Artwork :D</h1>
      <p className='pt-2'>We have a lot of artistic people in this lab! CS goes great with art guys</p>
      <Image src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <Image src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="art-info">
                        <Image src={ml_name} alt="" />
                        <div>
                            <h3>Artist: Jess</h3>
                        </div>
                    </div>
                    <p>
                        Michael's namecard decorated!<br/>
                        Shoutout to Michael for introducting me to research, definitely changed my uni experience for the better &gt;:)
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="art-info">
                        <Image src={ap_name} alt="" />
                        <div>
                            <h3>Artist: Jess</h3>
                        </div>
                    </div>
                    <p>
                        Andrew's namecard decorated!<br/>
                        This is the first namecard I drew on, shoutout to Andrew the goat for letting his office be my canvas :P
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="art-info">
                        <Image src={whiteboard} alt="" />
                        <div>
                            <h3>Artist: Jess</h3>
                        </div>
                    </div>
                    <p>
                        My magnum opus.<br/>
                        This is the culmination of ~2 years worth of office hours, starting from the second half of CSC148, all the way through CSC258 and CSC209.<br/>
                        The goal is to keep adding on to this whiteboard throughout my university life :D
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="art-info">
                        <Image src={door} alt="" />
                        <div>
                            <h3>Artist: Jess</h3>
                        </div>
                    </div>
                    <p>
                        End of year party at Andrew's office!!!<br/>
                        Thank god 209 is over...
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="art-info">
                        <Image src={window} alt="" />
                        <div>
                            <h3>Artist: Jess</h3>
                        </div>
                    </div>
                    <p>
                        Tetris!!!<br/>
                        I <i>was</i> gonna make a computer and cut out alphabet letters so that you could write messages on the window, but then saw this Tetris thing and thought it would be more fun instead<br/>
                        (Also easier to make, because I don't need to cut out a bunch of alphabet letters)
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Artwork
