import React from "react";
import Slider from "../pages/page/Slider";
import Product from "../pages/products/Product";
import BlogHome from "../pages/blog/BlogHome";

function Home(props) {
  return (
    <main>
      <div class="container">
      <Slider />

      <Product />
      <BlogHome />
      </div>
    </main>
  );
}
export default Home