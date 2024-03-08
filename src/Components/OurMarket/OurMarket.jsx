import React from 'react'
import './OurMarket.css'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import image2 from '../Assets/House2.jpg'
import { marketData } from '../../Data/marketData'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const OurMarket = () => {
  return (
    <div className='paddings ourWra'>
        <div className='flexCenter paddings innerWidth ourCon'>
            <div className='ourLeft'>
                <div className="ourImage">
                    <img src={image2} alt="" />
                </div>
            </div>

            <div className='flexColStart ourRight'>
                <span className='orangeText'>Our Market</span>
                <span className='primaryText'>What we provide for our customers</span>
                <span className='secondaryText'>
                    Ownership transitions with legacy properties are ripe with potential trials and tribulations,
                    <br />
                    that if not properly planned for, can lead to disagreement, distress, and financial surprises.
                </span>

                {/* Accordia Section */}
                <Accordion className='ourAccordion' allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        marketData.map((item, i) => {
                            return(
                                <AccordionItem className='accItem' key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accButton'>
                                            <div className="flexCenter flexColStart accIcon1"><img src={item.icon} alt="" /></div>
                                            <span className='primaryText'>{item.title}</span>
                                            <div className="flexCenter flexColEnd accIcon2">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText accP">{item.description}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default OurMarket;