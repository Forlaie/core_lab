import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import './Team.css';
import jw_ug from '../../Assets/jw_ug.png'
import generic from '../../Assets/generic.png'

const Undergrads = () => {
  return (
    <div className="team-category scroll-mt-20" id="undergrads">
      <h1>Undergraduates</h1>
      <div className="team-members">
        <div className="member">
            <Image src={jw_ug} alt=""/>
            <div className="member-info">
              <h4>Jess</h4>
              <p>Resident Artist #2</p>
            </div>
        </div>
        <div className="member">
            <Image src={generic} alt=""/>
            <div className="member-info">
              <h4>Khushi</h4>
              <p>The better artist</p>
            </div>
        </div>
        <div className="member">
            <Image src={generic} alt=""/>
            <div className="member-info">
              <h4>Amber</h4>
              <p>The crocheter</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Undergrads
