import React from 'react'
import Image from 'next/image';
import './Team.css';
import generic from '../../Assets/generic.png'

const Grads = () => {
  return (
    <div className="team-category">
      <h1>Graduate Students</h1>
      <div className="team-members">
        <div className="member">
            <Image src={generic} alt=""/>
            <div className="member-info">
              <h4>Naaz Sibia</h4>
              <p>Resident Artist #1</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Grads
