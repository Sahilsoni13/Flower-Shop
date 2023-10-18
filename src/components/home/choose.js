import React from 'react'
import Choose_text from "../../json/choose.json"
const Choose = () => {
  return (
   <>
   <section className="choose">
    <div className="choose-main">
    <div className="about-left">
          <div className="about-text">
          <h1 className='common-h-50'>Why choose us ?</h1>
          </div>
        </div>
     <div className="choose-right">
      {
        Choose_text.map((item,index)=>{
          return(
            <div className="choose-info" key={index}>
            <h2 className='common-h-50'>{item['choose-heading']}</h2>
            <p>{item['choose-text']}</p>
          </div>
          )
        })
      }
    
     </div>
    </div>
   </section>
   </>
  )
}

export default Choose