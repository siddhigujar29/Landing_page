import React from 'react'
import './style/Benifits.css'
import Location from './imges/location_1974201 1.png'
import Tropy from './imges/trophy_1974231 1.png'
import Distance from './imges/distance_1974249 1.png'

const Benefits = () => {
  return (
    <div>
      <section class="sec6">
  <div className="div3">
    <h2 className="text10">User Benefits</h2>
    <h4 className="text13">Why SwingPro is your Ultimate Golf Companion</h4>
    <h4 className="text13">Precision and Accuracy</h4>
    <ul id="ul2">
      <li>Achieve pinpoint accuracy with every swing.</li>
      <li>Make data-driven decision to perfect your technique.</li>
      <li>Unleash your ful potential on the fairway</li>
    </ul>
    <img src={Location} alt="" className="userImg"/>
  </div>

  <div>
    <h4 className="text13">Consistency in Every Swing</h4>
    <ul id="ul2">
      <li>Master the art of a consistentswing.</li>
      <li>Chart your journey towards excellence.</li>
      <li>Bid farewell to inconsistency,usher in excellence.</li>
    </ul>
  <img src={Tropy} alt="" className="userImg"/>
  </div>

  <div>
    <h4 className="text13">personalized insights</h4>
    <ul id="ul2">
      <li>Identity areas for improvements customized for you.</li>
      <li>Receive actionable recommendations for growth.</li>
      <li>Transform your weaknesses into your strengths.</li>
    </ul>
    <img src={Distance}alt="" className="userImg"/>
  </div>

</section> 

 
    </div>
  )
}

export default Benefits
