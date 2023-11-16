import React, { useEffect, useState } from "react";
import Product_item from "../../components/frontend/product_item1";
import SaleProductsService from "../../../services/SaleProductsService";
function SaleProducts(props) {
    // const [limit, setLimit] = useState(8);
    // const [products, setProducts] = useState([]);
    // useEffect(function () {
    //     (function () {
    //         productservice.getProductSale(limit, 1).then(function (result) {
    //             setProducts(result.data.products);
    //         });
    //     })()
    // }, [limit]);
    const [page, setPage] = React.useState(1);
    const [end_page, setEndPage] = React.useState(1);
    const PageChange = (event, value) => {
        setPage(value);
    };
    ////////////////////////////////
    const [SaleProducts, setSaleProducts] = useState([]);
    // const [BrandAll, setBrandAll] = useState([]);
    try {
        useEffect(function () {
            (async function () {
                const products_data = await SaleProductsService.getSaleProductAll(8, page);
                if (products_data.data.success === true) {
                    setSaleProducts(products_data.data.sale_products_all);
                    setEndPage(products_data.data.end_page);
                    // setBrandAll(products_data.data.brand_all);
                } else {
                    window.location.reload();
                }

            })();
        }, [page]);
    } catch (e) {
        console.error(e);
    }
    return (
        <div>
            <div class="product-main">

                <h2 class="title ">Sản phẩm Giảm giá</h2>

                <div class="product-grid">
                {SaleProducts.map(function(product,index){
                    
                    return <Product_item product={product} key={index}/>;
                })}                </div>


            </div>
            <div className="row">
                <div className="col-12 ">
                    <button className="btn-newsletter" onClick={() => setLimit(limit + 4)}>Xem Thêm</button>
                </div>
            </div>
        </div>)
}
export default SaleProducts;