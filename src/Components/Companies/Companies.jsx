import React from 'react'
import './Companies.css'
import image1 from '../Assets/comp1.png'
import image2 from '../Assets/comp2.png'
import image3 from '../Assets/comp3.png'
import image4 from '../Assets/comp4.png'

const Companies = () => {
  return (
    <div className="compWra">
        <div className="flexCenter paddings innerWidth compCon">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
    </div>
  )
}

export default Companies