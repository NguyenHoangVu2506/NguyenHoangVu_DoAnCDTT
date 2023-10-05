import React, { useEffect, useState } from "react";
import sliderservice from "../../services/SliderService";
import { urlImage } from "../../config";
function Slider(props) {
  const [sliders, setSlider] = useState([]);

  useEffect(function () {
    (async function () {
      await sliderservice.getAll().then(function (result) {
        setSlider(result.data.sliders)
      });
    })();
  }, []);
  return (
    <div className="banner">

      <div className="container">

        <div className="slider-container has-scrollbar">
          {sliders.map(function (slider, index) {
            return (
              <div className="slider-item">

                <img src={urlImage + 'slider/' + slider.image} alt="" className="banner-img" />
              </div>
            )
          })}
        </div>

      </div>

    </div>
  )
}
export default Slider;