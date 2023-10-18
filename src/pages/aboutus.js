import React, { Fragment } from "react";
import helo from "../components/images/Right column.jpg";
import Img1 from "../components/images/r1.png";
import instagram from "../components/images/Instagram.png";
import pinterest from "../components/images/Pinterest.png";
import fb from "../components/images/Facebook.png";
import twitter from "../components/images/Twitter.png";
import telegram from "../components/images/Telegram.png";
import story from "../json/story.json";
const Aboutus = () => {
  return (
    <>
      <section className="aboutus">
        <div className="aboutus-main">
          <div className="aboutus-left">
            <div className="aboutus-heading">
              <h1 className="common-h-50">Our Story</h1>
              <h1 className="echho common-h-50">About</h1>
              <h1 className="common-h-50">Kyiv LuxeBouquets</h1>
              <p>
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                Spread Joy with Our Online Flower Delivery Service
              </p>
            </div>
            <div className="social-icons">
              <img src={instagram} alt="" />
              <img src={pinterest} alt="" />
              <img src={fb} alt="" />
              <img src={twitter} alt="" />
              <img src={telegram} alt="" />
            </div>
          </div>
          <div className="aboutus-right">
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className="expertise">
          <div className="expertise_1">
            <h2>OUR STORY</h2>
            <h1 className="common-h-50">Our Founder's Passion </h1>
            <p>
              Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
              goal of bringing unique and exquisite bouquets to the people of
              Kyiv. Natalia has always had a passion for flowers and design, and
              his vision was to create a local floral studio that would
              specialize in the creation and delivery of fresh, beautiful, and
              distinctive bouquets.
            </p>
          </div>
          <div className="expertise_2">
            {story.map((item, index) => {
              return (
                <Fragment key={index}>
                  {index % 2 === 0 ? (
                    <div className="exp-section" >
                      <div className="ex-left">
                        <img
                          src={require(`../components/images/${item["ex-image"]}`)}
                          alt=""
                        />
                      </div>
                      <div className="ex-right">
                        <h1>{item["ex-tittle"]}</h1>
                        <p>{item["ex-bio"]}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="exp-section" >
                      <div className="ex-right">
                        <h1>{item["ex-tittle"]}</h1>
                        <p>{item["ex-bio"]}</p>
                      </div>
                      <div className="ex-left">
                        <img
                          src={require(`../components/images/${item["ex-image"]}`)}
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
            {}
          </div>
        </div>
        <div className="discover">
          <h1>Discover Our Beautiful Bouquets</h1>
          <p>
            Explore our collection of exquisite bouquets and surprise your loved
            ones with the perfect gift. Click the button below to start shopping
          </p>
          <button type="button">shop now</button>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
