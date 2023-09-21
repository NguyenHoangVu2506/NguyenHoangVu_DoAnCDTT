import React from "react";
import { Link } from "react-router-dom";
function ProductDetail(props) {
    return (
        <div className="container">
            <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">Category name</li>
                        <li class="breadcrumb-item">category</li>
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
                                        <div> <Link href="#"><img src={require("../../assets/images/products/product01.webp")} /></Link></div>
                                    </div> {/*<!-- slider-product.// --> */}
                                    {/* <div class="thumbs-wrap">
                                        <a href="#" class="item-thumb"> <img src={require("../../assets/images/items/15.jpg")}/></a>
                                        <a href="#" class="item-thumb"> <img src={require("../../assets/images/items/15-1.jpg")}/></a>
                                        <a href="#" class="item-thumb"> <img src={require("../../assets/images/items/15-2.jpg")}/></a>
                                        <a href="#" class="item-thumb"> <img src={require("../../assets/images/items/15-1.jpg")}/></a>
                                    </div>  */}
                                    {/*<!-- slider-nav.// -->*/}
                                </article> {/*<!-- gallery-wrap .end// -->*/}
                            </div> {/*<!-- card.// -->*/}
                        </aside>
                        <main class="col-md-6">
                            <article class="product-info-aside">

                                <h2 class="title mt-3 h4">Mô Hình Kim Loại 3D Lắp Ráp Gumdam </h2>

                                {/* <div class="rating-wrap my-3">
                                    <ul class="rating-stars">
                                        <li style={{ width: "80%" }} class="stars-active">
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </li>
                                    </ul>
                                    <small class="label-rating text-muted">132 reviews</small>
                                    <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders </small>
                                </div>  */}

                                <div class="mb-3">
                                    <p class="price text-danger h4">1.248.00₫ </p><del>1.375.00₫</del>

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
                                <li>P-Bandai RG RX-93 Nu Gundam Clear Color</li>
                                <li>Sản phẩm không bao gồm giá đỡ mô hình (Action Base is not included).
                                </li>
                                <li>Sản phẩm nhựa cao cấp với độ sắc nét cao, an toàn cho người chơi
                                </li>
                                <li>Mô hình lắp ráp rèn luyện tính kiên nhẫn, khéo léo.
                                </li>
                                <li>Các khớp cử động linh hoạt theo ý muốn.
                                </li>
                            </ul>


                        </div>


                    </div>

                </div>
            </section>
            <h4 className="text-center">Sản phẩm liên quan</h4>

            <div class="container">

                <div class="blog-container has-scrollbar">
                    <div class="blog-card">

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

                    </div>



                </div>

            </div>

            {/* <!-- ========================= SECTION CONTENT END// ========================= -->*/}
        </div>
    )
}

export default ProductDetail;