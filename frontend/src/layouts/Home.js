import React from "react";
import Slider from "./Slider";
import NewProducts from "../pages/products/NewProducts";
import SaleProducts from "../pages/products/SaleProducts";
import AllProducts from "../pages/products/AllProducts";

function Home(props)
{
    return (
        <div className="container">
            <Slider/>
            <NewProducts/>
            <SaleProducts/>
            <AllProducts/>
        </div>
    );
}
export default Home