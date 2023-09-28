import React from "react";
import Slider from "../pages/products/Slider";
import Product from "../pages/products/Product";
import BlogHome from "../pages/blog/BlogHome";

function Home(props) {
  return (
    <main>
      <Slider />

      <Product />
      <BlogHome />
    </main>
  );
}
export default Home