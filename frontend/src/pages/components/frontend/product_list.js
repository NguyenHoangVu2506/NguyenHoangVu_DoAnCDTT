import React from "react";
import { Link } from "react-router-dom";
import accounting from "accounting";
import { useCart } from "react-use-cart";
import { urlImage } from "../../../config";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";

function Product_list(props) {
  let { product_image, product_name, price_sale, product_slug, rating_score, listed_price, brand_name, product_id, product_detail, qty, sale_id } = props.product;
  const firstImage = getFirstImage(product_image);
  const firstImage1 = getFirstImage2(product_image);

  const { addItem } = useCart();
  const addToCart = async () => {
    if (price_sale) {
      product_id
      const cart_product_data = await { 'id': product_id, 'price': price_sale, 'listed_price': listed_price, 'price_sale': price_sale, 'product_name': product_name, 'product_image': product_image };
      addItem(cart_product_data, qty);
    } else {
      const cart_product_data = await { 'id': product_id, 'price': listed_price, 'listed_price': listed_price, 'price_sale': price_sale, 'product_name': product_name, 'product_image': product_image };
      addItem(cart_product_data, qty);
    }
  }
  return (

    <div>
      {/* <header class="mb-3">
          <div class="form-inline">
            <strong class="mr-md-auto">{product_qty} sản phẩm </strong> 
            <strong class="mr-md-auto text-center">Tất cả sản phẩm </strong>
            <select class="mr-2 form-control">
              <option>Latest items</option>
              <option>Trending</option>
              <option>Most Popular</option>
              <option>Cheapest</option>
            </select>
            <div class="btn-group">
              <a href="/listing-grid" class="btn btn-light" data-toggle="tooltip" title="List view">
                <i class="fa fa-bars"></i></a>
              <a href="/listing-large" class="btn btn-light active" data-toggle="tooltip" title="Grid view">
                <i class="fa fa-th"></i></a>
            </div>
          </div>
        </header> */}
      <div class="card card-product-list">
        {sale_id ? (
          <p className="showcase-badge angle pink">sale</p>
        ) : (
          <p className="showcase-badge angle black">mới</p>
        )}
        {/* <div className="showcase-banner" id="img"> */}
        <div class="row no-gutters">
          <aside class="col-md-3">
            <div className="showcase">
              <img
                src={urlImage + "product/" + firstImage}
                alt=""
                width="300"
                className="product-img default"
              />
              <img
                src={urlImage + "product/" + firstImage1}
                alt=""
                width="300"
                className="product-img hover"
              />
            </div>
          </aside>
          <div class="col-md-6">
            <div class="info-main">
              <a href="#" class="h5 title">{product_name}</a>
              <div class="rating-wrap mb-2">
                <ul class="rating-stars">
                  <Rating size="large" readOnly value={rating_score || null} />
                </ul>

              </div> {/*<!-- rating-wrap.// -->*/}

              <p>{product_detail}</p>

            </div>{/* <!-- info-main.// -->*/}
          </div>
          <aside class="col-sm-3">
            <div class="info-aside">
              <div class="price-wrap">
                <span class="h5 price">
                  {price_sale ? <p class="price">{accounting.formatNumber(price_sale, 0, ".", ",")}<span >đ</span></p>
                    : <p class="price">{accounting.formatNumber(listed_price, 0, ".", ",")} <span class="">đ</span></p>
                  }
                  {price_sale ? <del class="text-muted" >{accounting.formatNumber(listed_price, 0, ".", ",")} <span class="text-muted">đ</span></del>
                    : <del></del>}

                </span>

              </div> {/*<!-- price-wrap.// -->*/}
              <small class="text-warning">Free shipping</small>

              <p class="text-muted mt-3">{brand_name}</p>
              <p class="mt-3">
                <a href="#" class="btn btn-outline-primary" onClick={() => addToCart()}> <i class="fa fa-cart-plus"></i> Add Cart</a>
                <a href={"/chi-tiet/" + product_slug} class="btn btn-light"><i class="fa fa-eye"></i> Detail</a>
              </p>

            </div>
          </aside>


        </div>
      </div>
      {/* </div> */}


    </div >
  );
}

function getFirstImage(product_image) {
  if (product_image && typeof product_image === "string") {
    var img = product_image.split(",");
    return img[0];
  }
  return "";
}

function getFirstImage2(product_image) {
  if (product_image && typeof product_image === "string") {
    var img = product_image.split(",");
    return img[1];
  }
  return "";
}
export default Product_list;