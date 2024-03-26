import React from 'react'
import './style/introduction.css'
import intro from './imges/Frame.png'
const introduction = () => {
  return (
  <>
        <div id="intro" >
    <div id="introImgDiv">
      <img src={intro} alt="" />
    </div>
    <div id="introContentDiv">
      <h1>Introduction</h1>
      <br/><br/>
      <div className='wel'>welcome to SwingPro- Your Golf Swing <br/>Enhancement Partner<p/></div><br/></div>
        <p class="para">Whether you're seasonal golfer or just<br/>getting started on the greens,SwingPro is here<br/>to
          help you master your swing technique and<br/>
          elevate your golf game to new heights.Our<br/>state-of-the-art golf swing tracker software<br/>offers
          personalized insights,real-time analysis,<br/>and seamless intergration with wearable<br/>devices.
        </p>
    </div><br/>

    </>

  )
}
 export default introduction
