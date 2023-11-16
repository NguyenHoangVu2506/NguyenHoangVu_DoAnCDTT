import React, { useEffect, useState } from "react";
import NewProducts from "../../frontend/products/NewProducts";
import SaleProducts from "../../frontend/products/SaleProducts";

// import categoryservice from "../../services/CategoryService";
import CategoryItem from "../category/CategoryItem";
import HotProducts from "./HotProducts";
import ProductCategory from "./ProductCategory";
import categoryservice from "../../../services/CategoryService";
import ListCategory from "../../components/frontend/ListCategory";
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
                <ListCategory/>
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