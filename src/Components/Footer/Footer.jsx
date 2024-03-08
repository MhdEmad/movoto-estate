import React from 'react'
import './Footer.css'
import logo from '../Assets/Logo.png'

const Footer = () => {
  return (
    <div className="paddings foWra">
        <div className="paddings innerWidth flexCenter foCon">

            {/* Left Side */}
            <div className="flexColStart foLeft">
                <img src={logo} alt="" width={100} />

                <span className='secondaryText'>
                    Always we try to give our best servises <br />
                    to everyone all over the world.
                </span>
            </div>

            {/* Right Side */}
            <div className="foRight">
                <span className='primaryText'>Who are we?</span><br />
                <span className='secondaryText'>A423 London, SW20, UK</span>

                <div className='flexCenter foList'>
                    <span>Residencies</span>
                    <span>Our Value</span>
                    <span>Contact Us</span>
                    <span>Get Started</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer