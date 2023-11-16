import React from "react";
import Slider from "../../pages/frontend/page/Slider";
import Product from "../../pages/frontend/products/Product";

function Home(props) {
  return (
    <main>
      <div class="container">
      <Slider />
      <Product />
      
      </div>
    </main>
  );
}
export default Home