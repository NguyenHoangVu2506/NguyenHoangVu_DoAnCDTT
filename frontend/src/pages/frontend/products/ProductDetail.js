
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import accounting from "accounting";
import { useCart } from "react-use-cart";
import Comentsproduct from "./Comentsproduct";
import StoreProductsService from "../../../services/StoreProductsService";
import { Rating } from "@mui/material";
import CommentItem from "../../components/frontend/CommentItem";
// import Rating from "react-rating";
function getFirstImage(image) {
    if (image) {
        var img = image.split(",");
        return img[0];
    }
    return "";
}

function getFirstImage2(image) {
    if (image) {
        var img = image.split(",");
        return img[1];
    }
    return "";
}
function ProductDetail(props) {
    const { slug } = useParams();
    const [Product_Detail, setProduct_Detail] = useState([]);
    const { addItem } = useCart();

    const firstImage = getFirstImage(Product_Detail.product_image);
    const firstImage1 = getFirstImage2(Product_Detail.product_image);

    const [Product_Other, setProduct_Other] = useState([]);
    const [Product_Comment, setProduct_Comment] = useState([]);
    const [sold_qty, set_sold_qty] = useState(0);
    const [qty, setQty] = useState(1);
    const [comment_limit, set_comment_limit] = useState(5);

    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };
    try {
        useEffect(function () {
            (async function () {
                const product_data = await StoreProductsService.product_detail(slug, 8, comment_limit);
                setProduct_Detail(product_data.data.product_detail);
                setProduct_Other(product_data.data.other_products);
                set_sold_qty(product_data.data.sold_qty);
                setProduct_Comment(product_data.data.product_comment);
            })();
        }, [slug]);
    } catch (e) {
        console.error(e);
    }
    const addToCart = async () => {
        if (Product_Detail.price_sale) {
            const cart_product_data = await { 'id': Product_Detail.product_id, 'price': Product_Detail.price_sale, 'listed_price': Product_Detail.listed_price, 'price_sale': Product_Detail.price_sale, 'product_name': Product_Detail.product_name, 'product_image': Product_Detail.product_image, 'brand_name': Product_Detail.brand_name };
            addItem(cart_product_data, qty);
        } else {
            const cart_product_data = await { 'id': Product_Detail.product_id, 'price': Product_Detail.listed_price, 'listed_price': Product_Detail.listed_price, 'price_sale': Product_Detail.price_sale, 'product_name': Product_Detail.product_name, 'product_image': Product_Detail.product_image, 'brand_name': Product_Detail.brand_name };
            addItem(cart_product_data, qty);
        }
    }
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
            <section class="section-content bg-white padding-y">
                <div class="container">
                    <div class="row">
                        <aside class="col-md-6">
                            <div class="card">
                                <article class="gallery-wrap">
                                    <div class="img-big-wrap">
                                        <div> <Link href="#"><img src={urlImage + "product/" + firstImage} height={450} width={500} /></Link></div>
                                    </div>
                                    <div class="thumbs-wrap">
                                        <a href="#" class="item-thumb"> <img src={urlImage + "product/" + firstImage1} width={50} height={50} /></a>
                                        <a href="#" class="item-thumb"> <img src={urlImage + "product/" + firstImage1} width={50} height={50} /></a>
                                        <a href="#" class="item-thumb"> <img src={urlImage + "product/" + firstImage1} width={50} height={50} /></a>
                                        <a href="#" class="item-thumb"> <img src={urlImage + "product/" + firstImage1} width={50} height={50} /></a>
                                    </div>
                                </article>
                            </div>
                        </aside>
                        <main class="col-md-6">
                            <article class="product-info-aside">

                                <h2 class="title mt-3 h4">{Product_Detail.product_name}</h2>
                                <div class="mb-3">
                                    {/* <p class="price text-danger h4">{accounting.formatNumber(product.price, 0, ".", ",")}₫ </p>
                                    <del>{accounting.formatNumber(product.price_sale, 0, ".", ",")}₫</del> */}
                                </div>
                                <dl class="row">
                                    <dt class="col-sm-3">
                                        <Rating size="large" readOnly value={Product_Detail.rating_score || null} />
                                    </dt>
                                    <dd class="col-sm-9"> </dd>
                                    <dt class="col-sm-3">Giá:</dt>
                                    <dd class="col-sm-2">
                                        {Product_Detail.price_sale ? <p class="price">{accounting.formatNumber(Product_Detail.price_sale, 0, ".", ",")}đ</p>
                                            :<p class="price">{accounting.formatNumber(Product_Detail.listed_price, 0, ".", ",")} <span class="text-muted">đ</span></p>
                                        }
                                    </dd>
                                    <dd class="col-sm-7 text-danger">
                                        {Product_Detail.price_sale ? <del>{accounting.formatNumber(Product_Detail.listed_price, 0, ".", ",")}<span class="text-muted ">đ</span></del>
                                            :<del></del>}
                                    </dd>

                                    <dt class="col-sm-3">Series:</dt>
                                    <dd class="col-sm-9">Real Grade</dd>

                                    <dt class="col-sm-3">Tỉ lệ:</dt>
                                    <dd class="col-sm-9">1/144</dd>

                                    <dt class="col-sm-3">Chiều cao:</dt>
                                    <dd class="col-sm-9">~ 13cm</dd>

                                    <dt class="col-sm-3">Thương hiệu</dt>
                                    <dd class="col-sm-9">{Product_Detail.brand_name}
                                    </dd>

                                    <dt class="col-sm-3">Tình trạng:</dt>
                                    {/* <dd class="col-sm-9">{Product_Detail.store_qty}-{Product_Detail.qty_sold_product_store}</dd> */}
                                    <dd className="col-sm-9">
                                        {Product_Detail.store_qty - Product_Detail.qty_sold_product_store > 0 ? "còn hàng" : "hết hàng"}
                                    </dd>
                                </dl>

                                <div class="form-row  mt-4">
                                    <div class="form-group col-md">
                                        <a onClick={() => addToCart()} class="btn  btn-primary">
                                            <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                        </a>
                                    </div> {/*<!-- col.// -->*/}
                                </div>{/* <!-- row.// -->*/}

                            </article> {/*<!-- product-info-aside .// -->*/}
                        </main>

                    </div>
                </div>
            </section>
            <section class="section-name padding-y bg">
                <div class="container">

                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="title-description">Mô tả</h5>
                            <ul class="list-check">
                                {Product_Detail.product_detail}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-name padding-y bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="title-description">Bài đánh giá</h5>
                            <form>
                                <label for="subject">Xếp hạng và đánh giá</label>
                                <dt class="col-sm-3">
                                    {/* <Rating size="large" readOnly value={0 || null} /> */}
                                    <Rating
                                        size="large"
                                        initialRating={rating}
                                        onChange={handleRatingChange}
                                    />
                                </dt>
                                <textarea id="subject" name="subject" placeholder="Write something.." style={{ width: 757, height: 100 }}></textarea>
                                <input type="submit" value="Gửi" style={{ width: 50 }} />
                            </form>

                           
                                {/* <img src={require("./../../../assets/images/user/bandmember.jpg")} alt="Avatar" style={{ width: 90 }} />
                                <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                                <p>John Doe saved us from a web disaster.</p> */}
                                 {Product_Comment.length === 0 && <p>Chưa có đánh giá nào !</p>}
                                    {Product_Comment.length > 0 && Product_Comment.map((comment, index) => {
                                        return <CommentItem comment={comment} key={index} />;
                                    })}
                           
                        </div>
                    </div>
                </div>
            </section>
            {/* <Comentsproduct/> */}
            <h4 className="text-center"> </h4>
            <h4 className="text-center">Sản phẩm liên quan</h4>

            <div class="container">

                <div class="blog-container has-scrollbar">
                    {Product_Other.map(function (pro, index) {
                        const firstImage2 = getFirstImage2(pro.product_image);

                        return <div class="blog-card">

                            <a href="#">
                                <img src={urlImage + "product/" + firstImage2} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width={250} height={250} class="blog-banner" />
                            </a>

                            <div class="blog-content">


                                <a href="#">
                                    <h3 class="blog-title">{pro.product_name}</h3>
                                </a>
                                <div className="showcase-rating">
                                    <Rating size="large" readOnly value={pro.rating_score || null} />
                                </div>
                                <p class="blog-meta">
                                    {pro.listed_price}₫
                                </p>

                            </div>


                        </div>

                    })}
                </div>

            </div>

            {/* <!-- ========================= SECTION CONTENT END// ========================= -->*/}
        </div>
    )
}

export default ProductDetail;