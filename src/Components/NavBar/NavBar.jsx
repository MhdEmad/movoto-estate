import React, { useState } from "react";
import './NavBar.css'
import logo from "../Assets/Logo.png";
import hamLogo from '../Assets/hamIcon.png'
import OutsideClickHandler from "react-outside-click-handler";

const NavBar = () => {

  const [listOpen, setListOpen] = useState(false)
  const listStyles = (listOpen) => {
    if (document.documentElement.clientWidth <= 800)
    {return {right: !listOpen && '-100%'}}
  }

  return (
    <div className="NavPaddings navWra">
      <div className="flexCenter paddings innerWidth navCon">
        <img src={logo} alt="/" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setListOpen(false);
          }}
        >
          <div className="flexCenter navMen" style={listStyles(listOpen)}>
            <a href="/">Residencies</a>
            <a href="/">Our Value</a>
            <a href="/">Contact Us</a>
            <a href="/">Get Started</a>
            <button className="button">
              <a href="/">Contact</a>
            </button>
          </div>
          </OutsideClickHandler>
        <div className="listIcon" onClick={() => setListOpen((prev) => !prev)}>
          <img src={hamLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
