import React from "react";
function Slider(props) {
    return (
        <div className="banner">

        <div className="container">
  
          <div className="slider-container has-scrollbar">
  
            <div className="slider-item">
  
              <img src={require("../assets/images/slider/slider01.webp")} alt="" className="banner-img"/>
  
              
  
            </div>
  
            <div className="slider-item">
  
              <img src={require("../assets/images/slider/slider02.webp")} alt="" className="banner-img"/>
  
              
  
            </div>
  
            <div className="slider-item">
  
              <img src={require("../assets/images/slider/slider03.webp")} alt="new fashion summer sale" className="banner-img"/>
  
             
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    )
}
export default Slider;