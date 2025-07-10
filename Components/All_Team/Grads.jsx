import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import './Team.css';
import generic from '../../Assets/generic.png'

const Grads = () => {
  return (
    <div className="team-category scroll-mt-20" id="grads">
      <h1>Graduate Students</h1>
      <div className="team-members">
        <div className="member">
            <Link href="/team/naaz_sibia"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/naaz_sibia"><h4>Naaz Sibia</h4></Link>
              <p>Ph.D. Student</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/harry_ye"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/harry_ye"><h4>Harry Ye</h4></Link>
              <p>Ph.D. Student</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Grads
