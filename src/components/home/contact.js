import React from 'react'
import Call from "../images/call.png"
import Loco  from "../images/pin_drop.png"
import Romm from "../images/Right column.jpg"
import Instagram from '../images/Instagram.png'
import Twitter from "../images/Twitter.png"
import Telegram from "../images/Telegram.png"
import FB from "../images/Facebook.png"
import Pinterest from "../images/Pinterest.png"
const Contact = () => {
  return (

    <>
    <section className="contact">
      <div className="contact-main">
        <div className="contact-left">
          <div className="contact-top">
            <h1 className='common-h-50'>To Contact Us</h1>
            <p>We will call you back</p>
            <div className="input-field">
              <input type="text" placeholder='+380 XX XXX XX XX'/>
              <button type="button">book a call</button>
            </div>
          </div>
          <div className="contact-middle common">
            <p>Phone</p>
            <div className="main-div">
            <li> <img src={Call} alt="" />+380980099777</li>
            <li> <img src={Call} alt="" />+380980099111</li>
            </div>
          </div>
          <div className="contact-bottom common">
          <p>Address</p>
          <div className="main-div">
            <li>opening hours: 8 to 11 p.m.</li>
            <li> <img src={Loco} alt="" />15/4 Khreshchatyk Street, Kyiv </li>
          </div>
          </div>
        </div>
        <div className="contact-right">
          <img src={Romm } alt="" className='front'/>
          <div className="contact-sites">
            <div className="site-heading">
             <h2>Follow us</h2>
            </div>
            <div className="sites-brands">
             <img src={Instagram} alt="" />
             <img src={Pinterest} alt="" />
             <img src={FB} alt="" />
             <img src={Twitter} alt="" />
             <img src={Telegram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact