import React from "react";
import { Link } from "react-router-dom";
import accounting from "accounting";
import { useCart } from "react-use-cart";
import { urlImage } from "../../../config";
import PropTypes from "prop-types";
import { Rating } from "@mui/material";

function ProductItem(props) {
  let { product_image, product_name, price_sale, product_slug, rating_score, listed_price,product_id,qty } = props.product;
  const firstImage = getFirstImage(product_image);
  const firstImage1 = getFirstImage2(product_image);

  const { addItem } = useCart(); 
  const addToCart = async () => {
    if (price_sale) {product_id
        const cart_product_data = await { 'id': product_id, 'price': price_sale, 'listed_price': listed_price, 'price_sale':  price_sale, 'product_name':  product_name, 'product_image':  product_image };
        addItem(cart_product_data, qty);
    } else {
        const cart_product_data = await { 'id':  product_id, 'price':  listed_price, 'listed_price':  listed_price, 'price_sale':  price_sale, 'product_name':  product_name, 'product_image':  product_image };
        addItem(cart_product_data, qty);
    }
}
  return (
    <div>
      <div className="showcase">
        <div className="showcase-banner" id="img">
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
          {props.product.sale_id ? (
            <p className="showcase-badge angle pink">sale</p>
          ) : (
            <p className="showcase-badge angle black">mới</p>
          )}


          <div className="showcase-actions">
            <button className="btn-action">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <Link to={"/chi-tiet/" + product_slug} className="btn-action">
              <ion-icon name="eye-outline"></ion-icon>
            </Link>
            <button className="btn-action">
              <ion-icon name="repeat-outline"></ion-icon>
            </button>

            <button type="button" className="btn-action" onClick={() => addToCart()}>
              <ion-icon name="bag-add-outline"></ion-icon>
            </button>
          </div>
        </div>

        <div className="info-main">
          <a href="#" className="showcase-category"></a>

          <a href={"/chi-tiet/" + product_slug}>
            <h3 className="showcase-title">{product_name}</h3>
          </a>
          <div className="price-box">
            {/* <p className="price text-danger">{accounting.formatNumber(import_price, 0, ".", ",")}₫</p>
            <del>{accounting.formatNumber(price_sale, 0, ".", ",")}₫</del> */}
            {props.product.price_sale ? <p class="price">{accounting.formatNumber(price_sale, 0, ".", ",")}<span class="text-muted">đ</span></p>
              : <p class="price">{accounting.formatNumber(listed_price, 0, ".", ",")} <span class="text-muted">đ</span></p>
            }
            {price_sale ? <del>{accounting.formatNumber(listed_price, 0, ".", ",")} <span class="text-muted">đ</span></del>
              : <del></del>}

          </div>
          <div className="showcase-rating">
            <Rating size="large" readOnly value={rating_score || null} />
          </div>
        </div>
      </div>
    </div>
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
export default ProductItem;