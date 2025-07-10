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
            <Link href="/team/jessica_wen"><Image src={jw_ug} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/jessica_wen"><h4>Jessica Wen</h4></Link>
              <p>Undergraduate Researcher</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/khushi_malik"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/khushi_malik"><h4>Khushi Malik</h4></Link>
              <p>Undergraduate Researcher</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/amber_richardson"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/amber_richardson"><h4>Amber Richardson</h4></Link>
              <p>Undergraduate Researcher</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Undergrads
