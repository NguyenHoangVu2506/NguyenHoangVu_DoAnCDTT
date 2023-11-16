import React, { useEffect, useState } from "react";
// import Product_item from "../components/frontend/product_item1";
import productservice from "../../../services/ProductService";
import Product_item from "../../components/frontend/product_item1";
import StoreProductsService from "../../../services/StoreProductsService";

function HotProducts(props) {
    // const [limit, setLimit] = useState(8);
    // const [products, setProducts] = useState([]);
    // useEffect(function () {
    //     (function () {
    //         productservice.getProductHot(limit, 1).then(function (result) {
    //             setProducts(result.data.products);
    //         });
    //     })()
    // }, [limit]);
    const [end_page, setEndPage] = React.useState(1);
    const [page, setPage] = useState(1);
    const PageChange = (event, value) => {
        setPage(value);
    };
    const [HotProducts, setBest_SallersProducts] = useState([]);
    try {
        useEffect(function () {
            (async function () {
                const products_data = await StoreProductsService.getBestsallerProductAll(8, page);
                if (products_data.data.success === true) {
                    setBest_SallersProducts(products_data.data.bestsaller_products_all);
                    setEndPage(products_data.data.end_page);
                } else {

                }

            })();
        }, [page]);
    } catch (e) {
        console.error(e);
    }
    return (
        <div>
        <div class="product-main">

            <h2 class="title ">Sản phẩm bán chạy</h2>

            <div class="product-grid">
            {HotProducts.map(function(product,index){
                    
                    return <Product_item product={product} key={index}/>;
                })}
            </div>

        </div>
        <button className="btn-newsletter" onClick={() => setLimit(limit + 4)}>Xem Thêm</button>
                    </div>
                    )
}
export default HotProducts;