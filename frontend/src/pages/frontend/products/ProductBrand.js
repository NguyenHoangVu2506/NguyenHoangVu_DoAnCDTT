import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Product_item from "../../components/frontend/product_item1";
import ListCategory from "../../components/frontend/ListCategory";
import ListBrand from "../../components/frontend/ListBrand";
import StoreProductsService from "../../../services/StoreProductsService";
import { Pagination, Rating, Stack } from "@mui/material";
import Product_list from "../../components/frontend/product_list";

function ProductBrand() {
    
    const { slug } = useParams();
    const [BrandProduct, setBrandProduct] = useState([]);
    const [page, setPage] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };

    const [end_page, setEndPage] = React.useState(1);
    const [viewMode, setViewMode] = useState("grid");


    try {
        useEffect(function () {
            (async function () {
                const products_data = await StoreProductsService.getProductByBrand(8, page, slug);
                if (products_data.data.success === true) {
                    setBrandProduct(products_data.data.ProductsByBrand);
                    setEndPage(products_data.data.end_page);

                } else {

                }

            })();
        }, [slug, page]);
    } catch (e) {
        console.error(e);
    }
    const handleListView = () => {
        setViewMode("list");
    };

    const handleGridView = () => {
        setViewMode("grid");
    };

    return (
        <div class="product-container">

            <div class="container">
                <div class="sidebar  has-scrollbar" >
                    <div class="sidebar-category">
                        <ListCategory />
                        <ListBrand />
                    </div>
                </div>
                <div class="product-box">
                    <div class="product-main">
                    <div id="btnContainer" class="mb-3">
                            <button className={`btn${viewMode === "list" ? " active" : ""}`} onClick={handleListView}>
                                <i className="fa fa-bars"></i> List
                            </button>
                            <button className={`btn${viewMode === "grid" ? " active" : ""}`} onClick={handleGridView}>
                                <i className="fa fa-th-large"></i> Grid
                            </button>

                        </div>
                        {viewMode === "grid" ? (
                            <div className="product-grid">
                                {BrandProduct.map((product, index) => (
                                    <Product_item product={product} key={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="product-list">
                                {BrandProduct.map((product, index) => (
                                    <Product_list product={product} key={index} />
                                ))}
                            </div>
                        )}

                    </div>
                    <div className="row">
                        <Stack spacing={3}>
                            <Pagination count={end_page} page={page} onChange={ChangePage} />
                        </Stack>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ProductBrand;
