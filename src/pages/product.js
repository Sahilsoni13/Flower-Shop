import React from "react";
import Productimg from "../components/images/productsimg.png";
import Plus from "../components/images/Vector (1).png";
import Minus from "../components/images/Vector.png";
import Left from "../components/images/left arrow.png";
import Right from "../components/images/right arrow.png";
import Products from "../json/product.json";
import Productitem from "../json/products_add_main.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";

const Product = () => {
  return (
    <section className="products">
      <div className="products-main">
        <div className="products-left">
          <img src={Productimg} alt="" />
        </div>
        <div className="products-right">
          <div className="details">
            <p className="products-common">
              Fresh Flowers / <span>Rosy Delight</span>
            </p>
          </div>
          <div className="products-heading">
            <h1 className="products-common">Rosy Delight - $100</h1>
            <p className="products-common">
              Large exceptional bouquet composed of a selection of David Austin
              roses, known for their beauty and subtle fragrance. The bouquet is
              accompanied by seasonal foliage which will enhance these sublime
              flowers even
            </p>
          </div>
          <div className="products-quantity">
            <h3 className="products-common">Quantity</h3>{" "}
            <img src={Minus} alt="" /> <p>1</p> <img src={Plus} alt="" />
          </div>
          <div className="combination">
            <h2 className="products-common">
              Excellent Combination with:<span>Vase Not Included</span>
            </h2>
            <div className="product-list">
            {<Swiper
              slidesPerView={5}
              navigation={true}
              // spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {/* <img src={Left} alt="" /> */}
              {Products.map((item, index) => {
                return (
                     <div className="products-item" key={index}>
                     <SwiperSlide>  
                    <img src={require(`../components/images/${item["product_img"]}`)}alt=""/>
                    <h4 className="products-common">{item["product_name"]}</h4>
                    <p className="products-common">{item["product_price"]}</p>
                  </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>}
              {/* <img src={Right} alt="" /> */}
            </div>
          </div>
          <div className="price">
            <h2 className="products-common">Price options</h2>
            <h4 className="products-common">
              {" "}
              <input type="radio" name="price" id="" /> One time purchase. Price
              $100
            </h4>
            <h4 className="products-common">
              <input type="radio" name="price" id="" />
              Subscribe now, and save 25% on this order.{" "}
            </h4>
          </div>
          <button className="btn-black" type="button">
            {" "}
            ADD TO BASKET{" "}
          </button>
        </div>
      </div>
      <div className="products-add">
        <div className="add-main">
          <div className="add-left">
            <h1 className="common-h-50">You may also like…</h1>
          </div>
          <div className="add-right">
           
              {Productitem.map((item, index) => {
                return (
                  <>
                      <div className="add-content">
                        <img
                          src={require(`../components/images/${item["add_img"]}`)}
                          alt=""
                        />
                        <div className="tittles">
                          <h4>{item["add_tittle"]}</h4>
                          <p>{item["add_price"]}</p>
                        </div>
                      </div>
                    
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
