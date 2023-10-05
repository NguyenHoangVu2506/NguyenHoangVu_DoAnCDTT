import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productservice from "../../services/ProductService";
import { urlImage } from "../../config";
import accounting from "accounting";
function ProductDetail(props) {
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setProduct(result.data.product);
                    setProductOther(result.data.product_other)
                }
            });
        })()
    }, []);
    return (
        <div className="container">
            <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">Sản phẩm</li>
                        <li class="breadcrumb-item">Chi tiết sản phẩm</li>
                    </ol>
                </div>
            </section>
            {/* <!-- ========================= SECTION CONTENT ========================= --> */}
            <section class="section-content bg-white padding-y">
                <div class="container">

                    {/* <!-- ============================ ITEM DETAIL ======================== --> */}
                    <div class="row">
                        <aside class="col-md-6">
                            <div class="card">
                                <article class="gallery-wrap">
                                    <div class="img-big-wrap">
                                        <div> <Link href="#"><img src={urlImage + "product/" + product.image} height={450} width={500} /></Link></div>
                                    </div> 
                                    <div class="thumbs-wrap">
                                        <a href="#" class="item-thumb"> <img src={urlImage + "product/" + product.image} width={50} height={50}/></a>
                                        <a href="#" class="item-thumb"> <img src={urlImage + "product/" + product.image1} width={50} height={50}/></a>
                                         <a href="#" class="item-thumb"> <img src={urlImage + "product/" + product.image} width={50} height={50}/></a> 
                                        <a href="#" class="item-thumb"> <img src={urlImage + "product/" + product.image1} width={50} height={50}/></a> 
                                    </div> 
                                    {/*<!-- slider-nav.// -->*/}
                                </article> {/*<!-- gallery-wrap .end// -->*/}
                            </div> {/*<!-- card.// -->*/}
                        </aside>
                        <main class="col-md-6">
                            <article class="product-info-aside">

                                <h2 class="title mt-3 h4">{product.name}</h2>

                               

                                <div class="mb-3">
                                    <p class="price text-danger h4">{accounting.formatNumber(product.price, 0, ".", ",")}₫ </p>
                                    <del>{accounting.formatNumber(product.price_sale, 0, ".", ",")}₫</del>

                                </div>
                                <dl class="row">
                                    <dt class="col-sm-3">Series:</dt>
                                    <dd class="col-sm-9">Real Grade</dd>

                                    <dt class="col-sm-3">Tỉ lệ:</dt>
                                    <dd class="col-sm-9">1/144</dd>

                                    <dt class="col-sm-3">Chiều cao:</dt>
                                    <dd class="col-sm-9">~ 13cm</dd>

                                    <dt class="col-sm-3">Xuat xu</dt>
                                    <dd class="col-sm-9">Hàng chính hãng Bandai (Nhật Bản)
                                    </dd>
                                </dl>

                                <div class="form-row  mt-4">
                                    <div class="form-group col-md">
                                        <a href="#" class="btn  btn-primary">
                                            <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                        </a>
                                        <a href="#" class="btn btn-light">
                                            <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                        </a>
                                    </div> {/*<!-- col.// -->*/}
                                </div>{/* <!-- row.// -->*/}

                            </article> {/*<!-- product-info-aside .// -->*/}
                        </main> {/*<!-- col.// -->*/}
                    </div> {/*<!-- row.// -->*/}

                    {/* <!-- ================ ITEM DETAIL END .// ================= -->*/}


                </div> {/*<!-- container .//  -->*/}
            </section>
            {/*  <!-- ========================= SECTION CONTENT END// ========================= -->*/}

            {/* <!-- ========================= SECTION  ========================= -->*/}
            <section class="section-name padding-y bg">
                <div class="container">

                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="title-description">Mô tả</h5>
                            <ul class="list-check">
                                {product.detail}
                            </ul>


                        </div>


                    </div>

                </div>
            </section>
            <h4 className="text-center"> </h4>            <h4 className="text-center">Sản phẩm liên quan</h4>


            <div class="container">

                <div class="blog-container has-scrollbar">
                {product_other.map(function(product,index)
                    {
                        return                     <div class="blog-card">

                        <a href="#">
                            <img src={urlImage + "product/" + product.image} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                        </a>

                        <div class="blog-content">


                            <a href="#">
                                <h3 class="blog-title">{product.name}</h3>
                            </a>

                            <p class="blog-meta">
                            {product.price}₫
                            </p>

                        </div>

                    </div>

                    })}
                    {/* <div class="blog-card">

                        <a href="#">
                            <img src={require("../../assets/images/blog/blog02.webp")} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                        </a>

                        <div class="blog-content">


                            <a href="#">
                                <h3 class="blog-title">MUA 2 TẶNG 1 - Mừng quốc tế thiếu nhi 1/6</h3>
                            </a>

                            <p class="blog-meta">
                                By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                            </p>

                        </div>

                    </div>
                    <div class="blog-card">

                        <a href="#">
                            <img src={require("../../assets/images/blog/blog01.webp")} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                        </a>

                        <div class="blog-content">


                            <a href="#">
                                <h3 class="blog-title">Back to School - Super Sale giảm đến 50%</h3>
                            </a>

                            <p class="blog-meta">
                                By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                            </p>

                        </div>

                    </div>
                    <div class="blog-card">

                        <a href="#">
                            <img src={require("../../assets/images/blog/blog03.webp")} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                        </a>

                        <div class="blog-content">


                            <a href="#">
                                <h3 class="blog-title">Papercraft là gì & cách làm mô hình Gundam bằng giấy</h3>
                            </a>

                            <p class="blog-meta">
                                By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                            </p>

                        </div>

                    </div>
                    <div class="blog-card">

                        <a href="#">
                            <img src={require("../../assets/images/blog/blog04.webp")} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                        </a>

                        <div class="blog-content">


                            <a href="#">
                                <h3 class="blog-title">Dân chơi mô hình sống “flex” thế nào?</h3>
                            </a>

                            <p class="blog-meta">
                                By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                            </p>

                        </div>

                    </div> */}



                </div>

            </div>

            {/* <!-- ========================= SECTION CONTENT END// ========================= -->*/}
        </div>
    )
}

export default ProductDetail;