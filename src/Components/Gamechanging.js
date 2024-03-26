import React from 'react'
import './style/Gamechanging.css';
import Golfer from './imges/golfer_1974259 1.png'
import Bar from './imges/bar-chart_5856142 1.png'
import Guide from './imges/guidebook_7451420 1.png'
import Smart from './imges/smartwatch_8389127 1.png'
const Gamechanging = () => {
  return (

        <section id="sec5">
            <div className="div2">
                <h2 className="text10">Discover SwingPro's Game-Changing Features</h2>
                <div className="feature">
                    <div className="featureImage">
                        <img src={Golfer} alt="" />
                    </div>
                    <div className="featureDescription">
                        <h3 className="text11">Real-Time Swing Analysis</h3>
                        <ul className="featureList">
                            <li>Instantly analyze your swing technique</li>
                            <li>Visualize critical metrics in real-time</li>
                            <li>Refine swing with pinpoint precision</li>
                        </ul>
                    </div>
                </div>
                <div className="feature">
                    <div className="featureImage">
                        <img src={Bar}alt="" />
                    </div>
                    <div className="featureDescription">
                        <h3 className="text11">Swing History Tracking</h3>
                        <ul className="featureList">
                            <li>Document your progress journey</li>
                            <li>Track improvements over time</li>
                            <li>Leverage data-driven insights for success</li>
                        </ul>
                    </div>
                </div>
                <div className="feature">
                    <div className="featureImage">
                        <img src={Guide} alt="" />
                    </div>
                    <div className="featureDescription">
                        <h3 className="text11">Wearable Devices Integration</h3>
                        <ul className="featureList">
                            <li>Seamlessly connect with your favorite wearables</li>
                            <li>Sync and analyze swing data effortlessly</li>
                            <li>Elevate your golfing with the power of data</li>
                        </ul>
                    </div>
                </div>
                <div className="feature">
                    <div className="featureImage">
                        <img src={Smart} alt="" />
                        </div>
                        <div className="featureDescription">
                            <h3 className="text11">Visual Feedback</h3>
                            <ul className="featureList">
                            <li>Dive into your swing with detailed graphics</li>
                            <li>Identify areas for immediate improvements</li>
                            <li>Achieve consistent, top-notch performance</li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Gamechanging
