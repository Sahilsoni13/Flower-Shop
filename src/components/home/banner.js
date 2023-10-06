import React from 'react'
import Heroimg from "../images/img hero.png"
import Ricon from "../images/®.png"
import Card from "../../json/card.json"
const Banner = () => {
  return (
  <>
  <section className="banner">
    {/* <div className="container"> */}
     <div className="banner-main">
      <div className="banner-left">
       <div className="top">
         <h1>Kyiv <br /> LuxeBouquets <img src={Ricon} alt="" /></h1>
         <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
       </div>
       <div className="middle"></div>
       <div className="bottom">
        <div className="b-left">
        <img src={Heroimg} alt="" />
        </div>
        <div className="line"></div>
        <div className="b-right">
        <p>Experience the joy of giving with our <br /> modern floral studio. Order online and <br />send fresh flowers, plants and gifts <br /> today.</p>
        </div>
       </div>
      </div>
      <div className="banner-right">
        <div className="card-main">
          {
            Card.map((item,index)=>{
              return(
                <div className="card" key={index}>
                <div className="card-left">
                  <h2>{item[`card_tittle`]}</h2>
                  <a href="">{item['shop']} <img src={require(`../images/${item['arrow']}`)} alt="" /></a>
                </div>
                <div className="card-right">
                <img src={require(`../images/${item['card-image']}`)} alt="" />
                </div>
                <div className="card-right">
                <img src={require(`../images/${item['card-image']}`)} alt="" />
                </div>
                <div className="card-left">
                  <h2>{item[`card_tittle`]}</h2>
                  <a href="">{item['shop']} <img src={require(`../images/${item['arrow']}`)} alt="" /></a>
                </div>
               </div>
              )
            })
          }
     
        </div>
      </div>
     </div>
    {/* </div> */}
  </section>
  </>
  )
}

export default Banner