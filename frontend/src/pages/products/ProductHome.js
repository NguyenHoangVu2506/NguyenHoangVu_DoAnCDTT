import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import NewProducts from "./NewProducts";
import SaleProducts from "./SaleProducts";
import Login from "../users/Login";
import { Link } from "react-router-dom";
function Product() {

    return (

        <div class="product-container">

            <div class="container">
                <div class="product-box">
                    <AllProducts />
                </div>

            </div>

        </div>


    )
}




export default Product;