import React from 'react'
import './HowToStart.css'

const HowToStart = () => {
  return (
    <div className="paddings howWra">
        <div className="paddings innerWidth howCon">
            <div className="flexColCenter howInCon">
                <span className='primaryText'>How To Start With Us</span>
                <span className='secondaryText'>LogIn or SignUp to start in our website.
                    <br />
                    We will find what suits you
                </span>
                <button className="button">
                    <a href="https://github.com/MhdEmad/">Get Started</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default HowToStart