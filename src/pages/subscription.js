import React from "react";
import BG from "../components/images/BG.png";
import Left from "../components/images/left colum.png";
import item1 from "../components/images/bouquet.png";
import Plus from "../components/images/Vector (1).png";
import Minus from "../components/images/Vector.png";
import b_arrow from "../components/images/arrow-bottom-right.png"
const Subscription = () => {
  return (
    <section className="subscribe">
      <div className="subscribe-main">
        <div className="subscribe-left">
          <img src={BG} alt="" />
        </div>
        <div className="subscribe-right">
          <h1 className="common-h-50">Flower Subscription</h1>
          <label htmlFor="">
            For Yourself
            <li>
              The perfect way to keep your home fresh and beautiful. Get a
              regular delivery of stunning bouquets straight to your doorstep
              without lifting a finger. Enjoy the beauty and fragrance of fresh
              flowers hassle-free!
            </li>
          </label>
          <label htmlFor="">
            As a Gift
            <li>
              Simply provide us with their address and let us take care of the
              rest, delivering beautiful blooms straight to their doorstep at
              the frequency and duration of your choosing.
            </li>
          </label>
          <label htmlFor="">
            For Business
            <li>
              Is a great way to create a pleasant atmosphere and leave a good
              impression on your guests and customers. Fresh floral arrangements
              will improve the aesthetic image of your business, and our service
              guarantees timely replacement without extra care or effort on your
              part.
            </li>
          </label>
          <button type="button">Explore Plans</button>
        </div>
      </div>
      <div className="work-main">
        <div className="work-left">
          <h1 className="common-h-50">How does it work?</h1>
        </div>
        <div className="work-right">
          <div className="work-text">
            <h2>Choose a plan</h2>
            <p>
              Select the subscription plan that suits you best from our three
              bouquet designs: classic, seasonal, and deluxe. Each plan comes
              with a designer vase, free delivery, and a discount of up to 30%.
              Our seasonal and deluxe plans also include a luxurious scented
              candle to enhance the ambiance.
            </p>
          </div>
          <div className="work-text">
            <h2>Frequency and Duration</h2>
            <p>
              Choose delivery frequency: once a week, every two weeks, or once a
              month. Then, select your subscription duration from 3 to 12
              months. Enjoy savings with a longer subscription. We understand
              that every customer has different needs, and we aim to provide
              flexible subscription options that cater to your specific
              preferences.
            </p>
          </div>
          <div className="work-text">
            <h2>Pay once</h2>
            <p>
              After entering your contact and delivery information and paying
              for your subscription, you can sit back and relax, knowing that
              you have secured a regular supply of fresh, stunning flowers for
              yourself or your loved ones
            </p>
          </div>
        </div>
      </div>
      <div className="plan-main">
        <div className="plan-left">
          <div className="plan-demo">
            <p>Build Your Subscription</p>
          </div>
          <div className="plan-heading">
            <h1>Selecting a Plan</h1>
            <p>
              Enjoy free shipping on every order and save up to 30%. Every
              bouquet we deliver is carefully curated to ensure it arrives fresh
              and stunning. To modify, pause, or cancel your subscription,
              simply log in to your account dashboard. You're in complete
              control of your flower delivery experience.
            </p>
          </div>
          <div className="plan-content">
            <div className="plan-items">
              <div className="p-item-left">
                <img src={item1} alt="" />
              </div>
              <div className="p-item-right">
                <label htmlFor="">
                  Classic
                  <li>Price $45 </li>
                  <li>Free Delivery</li>
                  <li>Best for a budget</li>
                  <li>Glass vase with first delivery</li>
                  <li>Save up to 25%</li>
                </label>
              </div>
              <div className="p-item-btn">
                <button type="button">Select</button>
              </div>
            </div>
            <div className="plan-items">
              <div className="p-item-left">
                <img src={item1} alt="" />
              </div>
              <div className="p-item-right">
                <label htmlFor="">
                  Classic
                  <li>Price $45 </li>
                  <li>Free Delivery</li>
                  <li>Best for a budget</li>
                  <li>Glass vase with first delivery</li>
                  <li>Save up to 25%</li>
                </label>
              </div>
              <div className="p-item-btn">
                <button type="button">Select</button>
              </div>
            </div>
            <div className="plan-items">
              <div className="p-item-left">
                <img src={item1} alt="" />
              </div>
              <div className="p-item-right">
                <label htmlFor="">
                  Classic
                  <li>Price $45 </li>
                  <li>Free Delivery</li>
                  <li>Best for a budget</li>
                  <li>Glass vase with first delivery</li>
                  <li>Save up to 25%</li>
                </label>
              </div>
              <div className="p-item-btn">
                <button type="button">Select</button>
              </div>
            </div>
          </div>
          <div className="deliveries">
            <div className="d-line1"></div>
            <div className="d-one">
              <h1 className="d-common-h1">
                How often do you want flowers delivered ?
              </h1>
              <p className="d-common-p">Select the delivery frequency</p>
              <div className="d-type">
                <button type="button">Monthly</button>
                <button type="button">Bi-Weekly</button>
                <button type="button">Weekly</button>
              </div>
            </div>
            <div className="d-line"></div>
            <div className="d-two">
              <h1 className="d-common-h1">
                How many deliveries would you like ?
              </h1>
              <p className="d-common-p">
                Pay once and do not worry about flowers, our bouquets will be
                beautiful and on time, as many times as you need{" "}
              </p>
              <div className="d-quantity">
                <div className="minus"><img src={Minus} alt="" /></div>
                <p>1</p>
                
                <div className="plus">
                  <img src={Plus} alt="" />
                </div>
              </div>
            </div>
            <div className="d-check">
              <button type="button">Checkout</button>
            </div>
          </div>
        </div>
        <div className="plan-right">
          <img src={Left} alt="" />
        </div>
      </div>
      <div className="faq">
        <div className="faq-main">
          <div className="faq-heading">
            <h1 className="common-h-50">Subscription FAQ</h1>
          </div>
          <div className="faq-align">
            
          <div className="tittle-main">
            <h3>How often will I get a new bouquet?</h3>
            <p>Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!</p>
          </div>
          <div className="faq-line"></div>
          <div className="faq-q">
            <h3>Can i send subscription like as a gift ? <img src={b_arrow} alt="" /> </h3>
          </div>
          <div className="faq-line"></div>
          <div className="faq-q">
           <h3>Can I choose which bouquet I get ? <img src={b_arrow} alt="" /> </h3>
          </div>
          <div className="faq-line"></div>
          <div className="faq-q">
              <h3>Can I change the shipping address ? <img src={b_arrow} alt="" /> </h3>
          </div>
          <div className="faq-line"></div>
          <div className="faq-q">
           <h3>What day will the subscription bouquet come? <img src={b_arrow} alt="" /> </h3>
          </div>
          <div className="faq-line"></div>
          <div className="faq-q">
           <h3>Can I suspend my subscription to flowers ? <img src={b_arrow} alt="" /> </h3>
          </div>
          <div className="faq-line"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Subscription;
