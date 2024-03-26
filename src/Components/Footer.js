import React from 'react'
import './style/Footer.css'
import Logo from './imges/image 1.png'
const Footer = () => {
  return (
    <>
       <footer id="sec8">
  <div className="lastDiv">
  <img src={Logo}  class="lastImg"/> 
  <p className="lastPara">SwingPro is unique yet versatile golf training aid that affers effective <br/>
  methods on correcting body alignment and swing posfure. It's a <br/>
  specially designed training devices that enhances the way you play golfbr <br/>
  by helpingyou develop muscle memory through instilling the right <br/>
  "feel" when holding your club and position </p>

    <p class="lastText">Contact Information: <br/><br/>
    Email:info@swingpro.com <br/> <br/>
     Phone:+1(123)456-7890 <br/>
    </p>   
  

  <ul id="lastUl">
        <li>link:</li><br/>
        <li>Home</li><br/>
        <li>Features</li><br/>
        <li>Pricing</li><br/>
        <li>Testimonials</li>
  </ul>
  <p className="parabola">&copy 2025 SwingPro All rights reserved</p>
  </div>
   </footer>
    </>
  )
}

export default Footer
