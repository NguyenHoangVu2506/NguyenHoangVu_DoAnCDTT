import React, { useEffect, useState } from "react";
import productservice from "../../services/ProductService";
import { urlImage } from "../../config";
import { Link } from "react-router-dom";
import accounting from "accounting";
function NewProducts(props) {
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (function () {
            productservice.getProductNew(limit, 1).then(function (result) {
                setProducts(result.data.products);
            });
        })()
    }, [limit]);
    return (
        <div>
            <div class="product-main">

                <h2 class="title ">Sản phẩm mới</h2>

                <div class="product-grid">
                    {products.map(function (product, index) {
                        return (
                            <div class="showcase">

                                <div class="showcase-banner">

                                    <img src={urlImage + "product/" + product.image} alt="Mens Winter Leathers Jackets" width="300"
                                        class="product-img default" />
                                    <img src={urlImage + "product/" + product.image1} alt="Mens Winter Leathers Jackets" width="300"
                                        class="product-img hover" />

                                    <p class="showcase-badge angle green">new</p>

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
                                        <p class="price text-danger">{accounting.formatNumber(product.price, 0, ".", ",")}₫</p>
                                        <del>{accounting.formatNumber(product.price_sale, 0, ".", ",")}₫</del>
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
                        )
                    })}
                </div>

            </div>
            <button className="btn-newsletter" onClick={() => setLimit(limit + 4)}>Xem Thêm</button>

        </div>)
}
export default NewProducts;