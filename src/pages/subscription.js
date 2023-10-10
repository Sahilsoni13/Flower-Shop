import React from 'react'
import BG from "../components/images/BG.png"
import Left from '../components/images/left colum.png'
const Subscription = () => {
  return (
    <section className="subscribe">
      <div className="subscribe-main">
        <div className="subscribe-left">
           <img src={BG} alt="" />
        </div>
        <div className="subscribe-right">
         <h1>Flower Subscription</h1>
         <label htmlFor="">For Yourself
          <li>The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!</li>
         </label>
         <label htmlFor="">As a Gift
          <li>Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.</li>
         </label>
         <label htmlFor="">For Business
          <li>Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.</li>
         </label>
         <button type="button">Explore Plans</button>
        </div>
      </div>
      <div className="work-main">
        <div className="work-left">
          <h1>How does it work?</h1>
        </div>
        <div className="work-right">
          <div className="work-text">
            <h2>Choose a plan</h2>
            <p>Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
          </div>
          <div className="work-text">
            <h2>Frequency and Duration</h2>
            <p>Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.</p>
          </div>
          <div className="work-text">
            <h2>Pay once</h2>
            <p>After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones</p>
          </div>
        </div>
      </div>
      <div className="plan-main">
        <div className="plain-left">
           
        </div>
        <div className="plan-right">
          <img src={Left} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Subscription