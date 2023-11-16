import React from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";

function Post_List(props) {
  let { image, title, detail,type,slug } = props.post;
  return (
    <div>
      <div class="card card-product-list">
        <div class="row no-gutters">
          <aside class="col-md-3">
            <div className="showcase">
              <img
                src={urlImage + "post/" + image}
                alt=""
                width="300"
              />
            </div>
          </aside>
          <div class="col-md-6">
            <div class="info-main">
              <a href="#" class="h5 title">{title}</a>
              <p>{detail}</p>
            </div>{/* <!-- info-main.// -->*/}
          </div>
          <aside class="col-sm-3">
            <div class="info-aside">
              {/* <div class="price-wrap">
                <span class="h5 price">
                  {price_sale ? <p class="price">{accounting.formatNumber(price_sale, 0, ".", ",")}<span >đ</span></p>
                    : <p class="price">{accounting.formatNumber(listed_price, 0, ".", ",")} <span class="">đ</span></p>
                  }
                  {price_sale ? <del class="text-muted" >{accounting.formatNumber(listed_price, 0, ".", ",")} <span class="text-muted">đ</span></del>
                    : <del></del>}

                </span>

              </div> */}
              <small class="text-warning">{type}</small>
              <p class="mt-3">
                <a href={"/chi-tiet-bai-viet/" + slug} class="btn btn-light"><i class="fa fa-eye"></i> Detail</a>
              </p>
            </div>
          </aside>


        </div>
      </div>
      {/* </div> */}


    </div >
  );
}
export default Post_List;