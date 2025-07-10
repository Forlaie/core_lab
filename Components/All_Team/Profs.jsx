import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import './Team.css';
import ml_name from '../../Assets/ml_name.png'
import ap_name from '../../Assets/ap_name.png'
import lz_name from '../../Assets/lz_name.png'
import generic from '../../Assets/generic.png'

const Profs = () => {
  return (
    <div className="team-category scroll-mt-20" id="professor">
      <h1>Professors</h1>
      <div className="team-members">
        <div className="member">
            <Link href="/team/michael_liut"><Image src={ml_name} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/michael_liut"><h4>Michael Liut</h4></Link>
              <p>Assistant Professor, Teaching Stream (UTM)</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/andrew_petersen"><Image src={ap_name} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/andrew_petersen"><h4>Andrew Petersen</h4></Link>
              <p>Professor, Teaching Stream (UTM)</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/lisa_zhang"><Image src={lz_name} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/lisa_zhang"><h4>Lisa Zhang</h4></Link>
              <p>Assistant Professor, Teaching Stream (UTM)</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/bogdan_simion"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/bogdan_simion"><h4>Bogdan Simion</h4></Link>
              <p>Associate Professor, Teaching Stream (UTM)</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/tingting_zhu"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/tingting_zhu"><h4>Tingting Zhu</h4></Link>
              <p>Assistant Professor, Teaching Stream (UTM)</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/andi_bergen"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/andi_bergen"><h4>Andi Bergen</h4></Link>
              <p>Assistant Professor, Teaching Stream (UTM)</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/angela_zavaleta_bernuy"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/angela_zavaleta_bernuy"><h4>Angela Zavaleta Bernuy</h4></Link>
              <p>Assistant Professor (McMaster)</p>
            </div>
        </div>
        <div className="member">
            <Link href="/team/brian_harrington"><Image src={generic} alt=""/></Link>
            <div className="member-info">
              <Link href="/team/brian_harrington"><h4>Brian Harrington</h4></Link>
              <p>Professor, Teaching Stream (UTSC)</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profs
