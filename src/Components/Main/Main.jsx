import React from 'react'
import './Main.css'
import icon from '../Assets/location-icon.png'
import CountUp from "react-countup";
import image1 from '../Assets/House1.jpg'
import {motion} from 'framer-motion'

const Main = () => {
  return (
    <div className="flexCenter mainWra">
        <div className="flexCenter paddings innerWidth mainCon">
            <div className="flexColStart mainLeft">
                <div className="leftTitle">
                    <div className="leftOrange" />
                    <motion.h1
                    initial={{y: '2rem', opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2, type: 'spring'}}>
                        Discover All <br /> Propertirs Around <br /> The World
                    </motion.h1>
                </div>
                <div className="flexColStart leftDescription">
                    <span className='secondaryText'>Recommendations are based on your location and search activity.</span>
                    <span className='secondaryText'>such as the homes you've viewed and saved and the filters you've used.</span>
                </div>
                <div className="flexCenter leftSearch">
                    <img src={icon} alt="" />
                    <input type="text" placeholder='Your Location ...' />
                    <button className='button btn'>Search</button>
                </div>
                <div className="flexCenter numbers">
                    <div className="flexColCenter countUp">
                        <span>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>

                    <div className="flexColCenter countUp">
                        <span>
                            <CountUp start={1800} end={2000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Daily Agents</span>
                    </div>

                    <div className="flexColCenter countUp">
                        <span>
                            <CountUp end={50} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>VIP Agents</span>
                    </div>
                </div>
            </div>



            <div className="flexCenter mainRight">
                <motion.div
                initial = {{x: '7rem', opacity: 0}}
                animate = {{x: '0', opacity: 1}}
                transition={{duration: 2, type: 'spring'}}
                className="mainImage">
                    <img src={image1} alt="" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Main;