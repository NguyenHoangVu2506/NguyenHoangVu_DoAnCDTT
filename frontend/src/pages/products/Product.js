import React, { useEffect, useState } from "react";
import AllProducts from "../products/AllProducts";
import NewProducts from "../products/NewProducts";
import SaleProducts from "../products/SaleProducts";
import Login from "../users/Login";
import { Link } from "react-router-dom";
function Product() {

    return (

        <div class="product-container">

            <div class="container">
                <div class="sidebar  has-scrollbar" >

                    <div class="sidebar-category">
                        <div class="sidebar-top">
                            <h2 class="sidebar-title">Category</h2>

                            <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                        <article class="filter-group">
                            <h7 class="title">
                                <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	 Product type </a>
                            </h7>
                            <div class="filter-content collapse show" id="collapse_1">
                                <div class="inner">
                                    <ul class="list-menu">
                                        <li><a href="#">Shorts  </a></li>
                                        <li><a href="#">Trousers </a></li>
                                        <li><a href="#">Sweaters  </a></li>
                                        <li><a href="#">Clothes  </a></li>
                                        <li><a href="#">Home items </a></li>
                                        <li><a href="#">Jackats</a></li>
                                        <li><a href="#">Somethings </a></li>
                                    </ul>
                                </div>{/* <!-- inner.// -->*/}
                            </div>
                        </article> {/*<!-- filter-group  .// -->*/}
                        <article class="filter-group">
                            <h7 class="title">
                                <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2">	 Product type </a>
                            </h7>
                            <div class="filter-content collapse show" id="collapse_2">
                                <div class="inner">
                                    <ul class="list-menu">
                                        <li><a href="#">Shorts  </a></li>
                                        <li><a href="#">Trousers </a></li>
                                        <li><a href="#">Sweaters  </a></li>
                                        <li><a href="#">Clothes  </a></li>
                                        <li><a href="#">Home items </a></li>
                                        <li><a href="#">Jackats</a></li>
                                        <li><a href="#">Somethings </a></li>
                                    </ul>
                                </div>{/* <!-- inner.// -->*/}
                            </div>
                        </article> {/*<!-- filter-group  .// -->*/}





                    </div>

                </div>
                <div class="product-box">
                    <AllProducts />
                    <SaleProducts />
                    <NewProducts />



                </div>

            </div>

        </div>


    )
}




export default Product;