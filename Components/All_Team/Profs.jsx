import React from 'react'
import Image from 'next/image';
import './Team.css';
import ml_name from '../../Assets/ml_name.png'
import ap_name from '../../Assets/ap_name.png'
import lz_name from '../../Assets/lz_name.png'
import generic from '../../Assets/generic.png'

const Profs = () => {
  return (
    <div className="team-category">
      <h1>Professors</h1>
      <div className="team-members">
        <div className="member">
            <Image src={ml_name} alt=""/>
            <div className="member-info">
              <h4>Michael Liut</h4>
              <p>The Leader 👑</p>
            </div>
        </div>
        <div className="member">
            <Image src={ap_name} alt=""/>
            <div className="member-info">
              <h4>Andrew Petersen</h4>
              <p>Check out his door guys</p>
            </div>
        </div>
        <div className="member">
            <Image src={lz_name} alt=""/>
            <div className="member-info">
              <h4>Lisa Zhang</h4>
              <p>Has tons of candy</p>
            </div>
        </div>
        <div className="member">
            <Image src={generic} alt=""/>
            <div className="member-info">
              <h4>Bogdan Simion</h4>
              <p>Loves dad jokes</p>
            </div>
        </div>
        <div className="member">
            <Image src={generic} alt=""/>
            <div className="member-info">
              <h4>Andi Bergen</h4>
              <p>Has a box full of stickers</p>
            </div>
        </div>
        <div className="member">
            <Image src={generic} alt=""/>
            <div className="member-info">
              <h4>TingTing Zhu</h4>
              <p>Geography :0</p>
            </div>
        </div>
        <div className="member">
            <Image src={generic} alt=""/>
            <div className="member-info">
              <h4>Angela Zavaleta Bernuy</h4>
              <p>McMaster Prof :D</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profs
