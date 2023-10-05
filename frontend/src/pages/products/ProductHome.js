import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../../services/ProductService";
import { urlImage } from "../../config";
import accounting from 'accounting';
function ProductHome() {
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (function () {
            productservice.getProductAll(limit, 1).then(function (result) {
                setProducts(result.data.products);
            });
        })()
    }, [limit]);
    return (

        <div class="product-container">
            <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">Sản phẩm</li>
                        <li class="breadcrumb-item">Tất cả sản phẩm</li>
                    </ol>
                </div>
            </section>
            <div class="container">


                <div class="product-box">
                    <div class="product-main">

                        <h2 class="title text-center">Tất cả sản phẩm</h2>

                        <div class="product-grid">
                            {products.map(function (product, index) {
                                return (
                                    <div class="showcase">

                                        <div class="showcase-banner">

                                            <img src={urlImage + "product/" + product.image} alt="Mens Winter Leathers Jackets" width="300"
                                                class="product-img default" />
                                            <img src={urlImage + "product/" + product.image1} alt="Mens Winter Leathers Jackets" width="300"
                                                class="product-img hover" />

                                            <p class="showcase-badge">5%</p>

                                            <div class="showcase-actions">

                                                <button class="btn-action">
                                                    <ion-icon name="heart-outline"></ion-icon>
                                                </button>

                                                <Link to={"/chi-tiet/" + product.slug} class="btn-action">
                                                    <ion-icon name="eye-outline"></ion-icon>
                                                </Link>

                                                <button class="btn-action">
                                                    <ion-icon name="repeat-outline"></ion-icon>
                                                </button>

                                                <button class="btn-action">
                                                    <ion-icon name="bag-add-outline"></ion-icon>
                                                </button>

                                            </div>

                                        </div>

                                        <div class="showcase-content">

                                            <a href="#" class="showcase-category"></a>

                                            <a href={"/chi-tiet/" + product.slug}>
                                                <h3 class="showcase-title">{product.name}</h3>
                                            </a>
                                            <div class="price-box">
                                                <p class="price text-danger">{accounting.formatNumber(product.price, 0, ".", ",")}đ</p>
                                                <del>{accounting.formatNumber(product.price_sale, 0, ".", ",")}đ</del>
                                            </div>
                                            <div class="showcase-rating">
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star"></ion-icon>
                                                <ion-icon name="star-outline"></ion-icon>
                                            </div>



                                        </div>

                                    </div>

                                );

                            })}
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <button className="btn-newsletter" onClick={() => setLimit(limit + 8)}>Xem Thêm</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    )
}




export default ProductHome;