import React from 'react'
import logo from './imges/image 1.png'
import './style/Header.css'


const Navbar = () => {
    return (
        <div>
            <section className="header">
                <div id="logoDiv">
                    <a href="#"><img src={logo} className="logoImage"/></a>
                </div>
                <div id="navDiv">
                    <ul id="nav">
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="features.html">Features</a></li>
                        <li><a href="service.html">Pricing</a></li>
                        <li><a href="Testimonials.html">Testimonials</a></li>
                        <button className="signUpBtn">Sign-up</button>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Navbar
