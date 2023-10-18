import React from 'react'
import Flower from "../images/flower-decor.png"
import Background from "../images/background.jpg"
const Services = () => {
  return (
    <>
    <section className="services">
      <div className="services-main">
        <div className="services-heading ">
          <h1 className='services-common-heading common-h-50'>Our Service</h1>
        </div>
        <div className="services-left">
          <img src={Flower} alt="" />
        </div>
        <div className="services-right">
          <h4>service</h4>
           <h1 className='services-common-heading common-h-50'>Flower Subcriptions</h1>
           <p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
           <button type="button">Subscribe Now</button>
        </div>
      </div>
        <div className="  services-bottom ">
        <h4>service</h4>
           <h1 className='services-common-heading common-h-50'>Wedding & Event Decor</h1>
           <p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
           <button type="button">Inquire Now</button>   
        </div>
    </section>
    </>
  )
}

export default Services