import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../../../services/ProductService";
import accounting from 'accounting';
import Product_item from "../../components/frontend/product_item1";
import StoreProductsService from "../../../services/StoreProductsService";
import { Pagination, Rating, Stack } from "@mui/material";
import Product_list from "../../components/frontend/product_list";
function ProductHome() {
    const [AllProducts, setAllProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [product_qty, setProduct_qty] = useState([]);

    const [end_page, setEndPage] = useState(1);
    const PageChange = (event, value) => {
        setPage(value);
    };
    const [viewMode, setViewMode] = useState("grid");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products_data = await StoreProductsService.getNewProductAll(8, page);
                if (products_data.data.success === true) {
                    setAllProducts(products_data.data.new_products_all);
                    setEndPage(products_data.data.end_page);
                    setProduct_qty(products_data.data.product_qty);

                } else {
                    // Xử lý lỗi nếu cần thiết
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [page]);

    const handleListView = () => {
        setViewMode("list");
    };

    const handleGridView = () => {
        setViewMode("grid");
    };

    const handleButtonToggle = (index) => {
        const container = document.getElementById("btnContainer");
        const btns = container.getElementsByClassName("btn");
        const current = container.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        btns[index].className += " active";
    };

    return (
        <div className="product-container">
            <section className="py-3 bg-light">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">Sản phẩm</li>
                        <li className="breadcrumb-item">Tất cả sản phẩm</li>
                    </ol>
                </div>
            </section>

            <div className="container">
                <div className="product-box">
                    <div className="product-main">
                        <h2 className="title1 text-center">Tất cả sản phẩm</h2>
                        <div id="btnContainer" className="mb-3">
                            <button className={`btn${viewMode === "list" ? " active" : ""}`} onClick={handleListView}>
                                <i className="fa fa-bars"></i> List
                            </button>
                            <button className={`btn${viewMode === "grid" ? " active" : ""}`} onClick={handleGridView}>
                                <i className="fa fa-th-large"></i> Grid
                            </button>

                        </div>
                        <div className="row">
                            <aside class="col-md-2">

                                <article class="filter-group">
                                    <h6 class="title">
                                        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	 Product type </a>
                                    </h6>
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
                                    <h6 class="title">
                                        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Brands </a>
                                    </h6>
                                    <div class="filter-content collapse show" id="collapse_2">
                                        <div class="inner">
                                            <label class="custom-control custom-checkbox">
                                                <input type="checkbox" checked="" class="custom-control-input" />
                                                <div class="custom-control-label">Adidas
                                                    <b class="badge badge-pill badge-light float-right">120</b>  </div>
                                            </label>
                                            <label class="custom-control custom-checkbox">
                                                <input type="checkbox" checked="" class="custom-control-input" />
                                                <div class="custom-control-label">Nike
                                                    <b class="badge badge-pill badge-light float-right">15</b>  </div>
                                            </label>
                                            <label class="custom-control custom-checkbox">
                                                <input type="checkbox" checked="" class="custom-control-input" />
                                                <div class="custom-control-label">The Noth Face
                                                    <b class="badge badge-pill badge-light float-right">35</b> </div>
                                            </label>
                                            <label class="custom-control custom-checkbox">
                                                <input type="checkbox" checked="" class="custom-control-input" />
                                                <div class="custom-control-label">The cat
                                                    <b class="badge badge-pill badge-light float-right">89</b> </div>
                                            </label>
                                            <label class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Honda
                                                    <b class="badge badge-pill badge-light float-right">30</b>  </div>
                                            </label>
                                        </div> {/*<!-- inner.// -->*/}
                                    </div>
                                </article>{/* <!-- filter-group .// -->*/}
                                <article class="filter-group">
                                    <h6 class=" ">
                                        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3"> Price range </a>
                                    </h6>
                                    <div class="filter-content collapse show" id="collapse_3">
                                        <div class="inner">
                                            <input type="range" class="custom-range" min="0" max="100" name="" />
                                            <div class="form-row">
                                                <div class="form-group col-md-6">
                                                    <label>Min</label>
                                                    <input class="form-control" placeholder="$0" type="number" />
                                                </div>
                                                <div class="form-group text-right col-md-6">
                                                    <label>Max</label>
                                                    <input class="form-control" placeholder="$1,0000" type="number" />
                                                </div>
                                            </div>{/* <!-- form-row.// -->*/}
                                            <button class="btn btn-block btn-primary">Apply</button>
                                        </div> {/*<!-- inner.// -->*/}
                                    </div>
                                </article> {/*<!-- filter-group .// -->*/}
                                <article class="filter-group">
                                    <h6 class="title">
                                        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Sizes </a>
                                    </h6>
                                    <div class="filter-content collapse show" id="collapse_4">
                                        <div class="inner">
                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> XS </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> SM </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> LG </span>
                                            </label>

                                            <label class="checkbox-btn">
                                                <input type="checkbox" />
                                                <span class="btn btn-light"> XXL </span>
                                            </label>
                                        </div> {/*<!-- inner.// -->*/}
                                    </div>
                                </article> {/*<!-- filter-group .// -->*/}
                                <article class="filter-group">
                                    <h6 class="title">
                                        <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5"> Condition </a>
                                    </h6>
                                    <div class="filter-content collapse show" id="collapse_5">
                                        <div class="inner">
                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" checked="" class="custom-control-input" />
                                                <div class="custom-control-label">Any condition</div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                                <div class="custom-control-label">Brand new </div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                                <div class="custom-control-label">Used items</div>
                                            </label>

                                            <label class="custom-control custom-radio">
                                                <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                                <div class="custom-control-label">Very old</div>
                                            </label>
                                        </div>{/* <!-- inner.// -->*/}
                                    </div>
                                </article>{/* <!-- filter-group .// -->*/}

                            </aside> {/*<!-- col.// -->*/}

                            <main class="col-md-10">
                                {viewMode === "grid" ? (
                                    <div className="product-grid">
                                        {AllProducts.map((product, index) => (
                                            <Product_item product={product} key={index} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="product-list">
                                        {AllProducts.map((product, index) => (
                                            <Product_list product={product} key={index} />
                                        ))}
                                    </div>
                                )}
                            </main>
                        </div>
                    </div>
                    <div className="row">
                        <Stack spacing={3}>
                            <Pagination count={end_page} page={page} onChange={PageChange} />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductHome;