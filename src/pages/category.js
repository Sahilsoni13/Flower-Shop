import React from 'react'
import flower_card from "../json/category.json"
import Left from "../components/images/left colum.png"
const Category = () => {
  return (
    <>
    <section className="category">
      <div className="category-main">
        <div className="category-left">
          <h1 className='common-h-50'>Fresh Flowers</h1>
        </div>
        <div className="category-right">
             <div className="category-cards">
              {
                flower_card.map((item,index)=>{
                  return(
                    <div className="flowers-cards" key={index}>
                      <h4>{item[`category_tittle`]}</h4>
                      <p>{item[`category_price`]}</p>
                    </div>
                  )
                })
              }
             </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Category