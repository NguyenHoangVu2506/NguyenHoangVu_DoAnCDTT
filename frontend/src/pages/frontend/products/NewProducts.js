import React, { useEffect, useState } from "react";
import productservice from "../../../services/ProductService";
import Product_item from "../../components/frontend/product_item1";
import StoreProductsService from "../../../services/StoreProductsService";
import { Pagination, Stack } from "@mui/material";
function NewProducts(props) {
    const [NewProducts, setNewProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [end_page, setEndPage] = useState(1);
    const PageChange = (event, value) => {
        setPage(value);
    };

    try {
        useEffect(function () {
            (async function () {
                const products_data = await StoreProductsService.getNewProductAll(8, 1);
                if (products_data.data.success === true) {
                    setNewProducts(products_data.data.new_products_all);
                    setEndPage(products_data.data.end_page);

                } else {

                }

            })();
        }, []);
    } catch (e) {
        console.error(e);
    }
    return (
        
        <div>
            
            <div class="product-main">

                <h2 class="title ">Sản phẩm mới</h2>
                <div class="product-grid">
                {NewProducts.map(function(product,index){
                    
                    return <Product_item product={product} key={index}/>;
                })}
                </div>
            </div>
            <button className="btn-newsletter" onClick={() => setLimit(limit + 4)}>Xem Thêm</button>
           
        </div>)
}
export default NewProducts;