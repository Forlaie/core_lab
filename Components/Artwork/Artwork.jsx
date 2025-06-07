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
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if (tx < 0){
            tx += 25;
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
                    <p>Michael's namecard decorated! <br/> Shoutout to Michael for introducting me to research, definitely changed my uni experience for the better &gt;:)</p>
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
                    <p>Andrew's namecard decorated!<br/> This is the first namecard I drew on, shoutout to Andrew the goat for letting his office be my canvas :P</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="art-info">
                        <Image src={whiteboard} alt="" />
                        <div>
                            <h3>William Jackson 3</h3>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. The supportive
                        ommunity, state-of-the-art facilities, and commitment
                        to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="art-info">
                        <Image src={door} alt="" />
                        <div>
                            <h3>William Jackson 4</h3>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. The supportive
                        ommunity, state-of-the-art facilities, and commitment
                        to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Artwork
