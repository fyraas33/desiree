"use client"

import { useState } from "react";

import "./lamp.css"

function Lamp() {

  const [isLightOn, setLightOn] = useState(false);

  const handleButtonClick = () => {
    setLightOn((prevIsLightOn) => !prevIsLightOn);
  };
  return (
    <div className="lamp-section">
    <div className="lamp js-turnoff-btn">
      <div className="lamp-item lamp-top" />
      <div className="lamp-item lamp-middle" />
      <div className={`lamp-item lamp-bottom ${isLightOn ? 'open' : ''}`} onClick={handleButtonClick} />
      <div className={`lamp-item lamp-light ${isLightOn ? 'open' : ''}`} />
    </div>
  </div>


  )
}

export default Lamp