import React from 'react'
import './Contact.css'
import callIcon from '../Assets/icon-call.png'
import messageIcon from '../Assets/icon-message.png'
import mailIcon from '../Assets/icon-mail.png'
import youtubeIcon from '../Assets/icon-youtube.png'
import image3 from '../Assets/House3.jpg'

const Contact = () => {
  return (
    <div className="flexCenter paddings conWra">
        <div className="flexCenter paddings innerWidth conCon">

            <div className="flexColStart conLeft">
                <span className='orangeText'>Follow us</span>
                <span className='primaryText'>You can find us</span>
                <span className='secondaryText'>You can always contact us any time and any where on the following:</span>

                <div className="flexColStart conContact">
                    {/* Contact Cards */}
                    {/* Call & Message */}
                    <div className="flexStart conRow">
                        {/* 1st contact */}
                        <div className="flexColCenter conMode">
                            <div className="flexStart">
                                <div className="flexCenter conIcon">
                                    <img src={callIcon} alt="" />
                                </div>
                                <div className="flexColStart conDetail">
                                    <span className='primaryText'>Call Us</span>
                                    <span className='secondaryText'>+44(22053672022)</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Us</div>
                        </div>
                        {/* 2nd contact */}
                            <div className="flexColCenter conMode">
                                <div className="flexStart">
                                    <div className="flexCenter conIcon">
                                        <img src={messageIcon} alt="" />
                                    </div>
                                    <div className="flexColStart conDetail">
                                        <span className='primaryText'>Message Us</span>
                                        <span className='secondaryText'>+44(2053672022)</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Us</div>
                            </div>
                    </div>
                    {/* Mail & Youtube */}
                    <div className="flexStart conRow">
                        {/* 3rd contact */}
                        <div className="flexColCenter conMode">
                            <div className="flexStart">
                                <div className="flexCenter conIcon">
                                    <img src={mailIcon} alt="" />
                                </div>
                                <div className="flexColStart conDetail">
                                    <span className='primaryText'>Email Us</span>
                                    <span className='secondaryText'>estate@gmail.com</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Us</div>
                        </div>
                        {/* 4th contact */}
                            <div className="flexColCenter conMode">
                                <div className="flexStart">
                                    <div className="flexCenter conIcon">
                                        <img src={youtubeIcon} alt="" />
                                    </div>
                                    <div className="flexColStart conDetail">
                                        <span className='primaryText'>Watch Us</span>
                                        <span className='secondaryText'>EState(YouTube)</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Us</div>
                            </div>
                    </div>
                </div>

            </div>

            <div className="conRight">
                <div className="conImage">
                    <img src={image3} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact