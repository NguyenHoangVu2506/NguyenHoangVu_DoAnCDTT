import React from "react";
import Slider from "../pages/products/Slider";
import Product from "../pages/products/Product";
import Blog from "../pages/blog/Blog";

function Home(props) {
  return (
    <main>
      <Slider />

      <Product />
      <Blog />
    </main>
  );
}
export default Home