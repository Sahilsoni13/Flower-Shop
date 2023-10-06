import React from 'react'
import Instagram from '../images/Instagram.png'
import Twitter from "../images/Twitter.png"
import Telegram from "../images/Telegram.png"
import FB from "../images/Facebook.png"
import Pinterest from "../images/Pinterest.png"
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-content">
           <p>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
           <div className="footer-contact">
           <input type="text"  placeholder='Your Email'/>
           <button type="button">Remind</button>
           </div>
        </div>
        <div className="footer-content footer-common">
           <h2>Contact Us</h2>
           <label htmlFor="">Address
            <li>15/4 Khreshchatyk Street, Kyiv </li>
           </label>
           <label htmlFor="">Phone
            <li>+380980099777</li>
           </label>
           <label htmlFor="">General Enquiry:
            <li>Kiev.Florist.Studio@gmail.com</li>
           </label>
           <h2>Follow Us</h2>
           <div className="sites-brands brands">
             <img src={Instagram} alt="" />
             <img src={Pinterest} alt="" />
             <img src={FB} alt="" />
             <img src={Twitter} alt="" />
             <img src={Telegram} alt="" />
            </div>
        </div>
        <div className="footer-content footer-common">
        <h2>Shop</h2>
        <ul>
          <li><a href="">All Products</a></li>
          <li><a href="">Fresh Flowers</a></li>
          <li><a href="">Dried Flowers</a></li>
          <li><a href="">Live Plants</a></li>
          <li><a href="">Designer Vases</a></li>
          <li><a href="">Aroma Candles</a></li>
          <li><a href="">Freshener Diffuser</a></li>
        </ul>
        <h2>Service</h2>
        <ul>
          <li><a href="">Flower Subcription</a></li>
          <li><a href="">Wedding & Event Decor</a></li>
        </ul>
        </div>
        <div className="footer-content footer-common">
          <h2>About Us</h2>
           <ul>
            <li><a href="">Our story</a></li>
            <li><a href="">Blog</a></li>
           </ul>
           <ul>
            <li><a href="">Shipping & returns</a></li>
            <li><a href="">Terms & conditions</a></li>
            <li><a href="">Privacy policy</a></li>
           </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer