import React from 'react'
import './Properties.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import  {data } from '../../Data/data'
import { swiperArrows } from '../../Data/common'

const SwiperButton = () => {
    const swiper = useSwiper()
    return (
        <div className="flexCenter proButton">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}

const Properties = () => {
  return (
    <div className="flexCenter paddings innerWidth proWra">
        <div className="paddings innerWidth proCon">
            <div className="flexColStart paddings proHead">
                <span className='orangeText'>Top Properties</span>
                <span className='primaryText'>We found what suits you!</span>
            </div>

            <Swiper {...swiperArrows}>
                <SwiperButton />
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart proCard">
                                <img src={card.image} alt="Home" />
                                <span className='secondaryText proCardPrice'>
                                    <span style={{color: 'orange'}}>$</span><span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Properties;