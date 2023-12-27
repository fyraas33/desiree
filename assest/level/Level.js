import React from 'react'
import "./level.css"
function Level() {
  return (
    <div>
       <div className="containeerr">
  <div className="skill-box">
    <span className="title">Pyhton</span>
    <div className="skill-bar">
      <span className="skill-per html">
        <span className="tooltip">80%</span>
      </span>
    </div>
  </div>
  <div className="skill-box">
    <span className="title">Php</span>
    <div className="skill-bar">
      <span className="skill-per css">
        <span className="tooltip">30%</span>
      </span>
    </div>
  </div>
  <div className="skill-box">
    <span className="title">Java</span>
    <div className="skill-bar">
      <span className="skill-per javascript">
        <span className="tooltip">40%</span>
      </span>
    </div>
  </div>
  <div className="skill-box">
    <span className="title">C++</span>
    <div className="skill-bar">
      <span className="skill-per nodejs">
        <span className="tooltip">60%</span>
      </span>
    </div>
  </div>
</div>


    </div>
  )
}

export default Level