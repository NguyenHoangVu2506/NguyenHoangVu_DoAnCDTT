import React, { useEffect, useState } from "react";
import NewProducts from "../products/NewProducts";
import SaleProducts from "../products/SaleProducts";

import { Link } from "react-router-dom";
import categoryservice from "../../services/CategoryService";
import CategoryItem from "../category/CategoryItem";
import HotProducts from "./HotProducts";
function Product(props) {
    
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getCategoryByParentId(0).then(function (result) {
                setCategorys(result.data.categorys);
            })
        })();
    }, []);
    return (

        <div class="product-container">

            <div class="container">
                <div class="sidebar  has-scrollbar" >

                    <div class="sidebar-category">
                        <div class="sidebar-top">
                            <h2 class="sidebar-title">Danh mục sản phẩm</h2>

                            <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                        <article class="filter-group">
                            
                                {categorys.map(function (category, index) {
                                            return (
                                            <CategoryItem category={category} key={index}/>
                                            );
                                        })}
                            
                        </article> {/*<!-- filter-group  .// -->*/}
                        {/* <article class="filter-group">
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
                                </div>
                            </div>
                        </article> 
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
                                </div>
                            </div>
                        </article>  */}






                    </div>

                </div>
                <div class="product-box">
                    <NewProducts />

                    <SaleProducts />

                    <HotProducts />





                </div>

            </div>

        </div>


    )
}




export default Product;