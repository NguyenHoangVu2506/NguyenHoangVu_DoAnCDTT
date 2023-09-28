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
                                <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">Mô hình Gundam </a>
                            </h7>
                            <div class="filter-content collapse show" id="collapse_1">
                                <div class="inner">
                                    <ul class="list-menu">
                                        <li><a href="#">Gundam giá rẻ </a></li>
                                        <li><a href="#">Gundam Bandai</a></li>
                                        <li><a href="#">HG Gundam ( High Grade )  </a></li>
                                    </ul>
                                </div>{/* <!-- inner.// -->*/}
                            </div>
                        </article> {/*<!-- filter-group  .// -->*/}
                        <article class="filter-group">
                            <h7 class="title">
                                <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2">Mô hình Anime</a>
                            </h7>
                            <div class="filter-content collapse show" id="collapse_2">
                                <div class="inner">
                                    <ul class="list-menu">
                                        <li><a href="#">OnePiece</a></li>
                                        <li><a href="#">Naruto</a></li>
                                        <li><a href="#">Dragon Ball</a></li>
                                        <li><a href="#">Genshin Impact</a></li>
                                        <li><a href="#">Kimetsu no Yaiba</a></li>
                                    </ul>
                                </div>{/* <!-- inner.// -->*/}
                            </div>
                        </article> {/*<!-- filter-group  .// -->*/}
                        <article class="filter-group">
                            <h7 class="title">
                                <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3">Mô hình Lắp ráp</a>
                            </h7>
                            <div class="filter-content collapse show" id="collapse_3">
                                <div class="inner">
                                    <ul class="list-menu">
                                        <li><a href="#">Máy bay</a></li>
                                        <li><a href="#">Xe máy</a></li>
                                        <li><a href="#">Thuyền</a></li>
                                        <li><a href="#">Mô hình kiến trúc</a></li>
                                        <li><a href="#">Mô hình lắp ráp khác</a></li>
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