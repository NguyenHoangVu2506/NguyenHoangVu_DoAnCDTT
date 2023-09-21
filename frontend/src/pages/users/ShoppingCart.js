import React from "react";
const ShoppingCart = ({ CartItem, addToCart, decreaseQty }) => (
    <section class="section-content padding-y">
        <div class="container">

            <div class="row">
                <main class="col-md-9">
                    <div class="card">

                        <table class="table table-borderless table-shopping-cart">
                            <thead class="text-muted">
                                <tr class="small text-uppercase">
                                    <th scope="col" width="220">Hình ảnh</th>
                                    <th scope="col" width="250">Tên sản phẩm</th>

                                    <th scope="col" width="160">Số lượng</th>
                                    <th scope="col" width="120">Đơn giá</th>
                                    <th scope="col" class="text-right" width="120"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <figure class="itemside">
                                            <div class="aside"><img src={require("../../assets/images/products/product01.webp")} height={100} width={100} class="img-sm" /></div>

                                        </figure>
                                    </td>
                                    <td>
                                        <figcaption class="info">
                                            <a href="#" class="title text-dark">Some name of item goes here nice</a>
                                        </figcaption>
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-append">
                                                    <button class="btn btn-light">-</button>
                                                </span>
                                                <input type="text" class="form-control" name="Lines" size="2" value="1" />
                                                <span class="input-group-append">
                                                    <button class="btn btn-light">+</button>
                                                </span>
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        <div class="price-wrap">
                                            <var class="price">500.000đ</var>
                                        </div>
                                    </td>
                                    <td class="text-right">
                                        {/* <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a> */}
                                        <a href="" class="btn btn-light">Xóa</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="card-body border-top">
                            <a href="/" class="btn btn-light"> <i class="fa fa-chevron-left"></i>Tiếp tục mua hàng</a>
                        </div>
                    </div>

                    <div class="alert alert-success mt-3">
                        <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                    </div>

                </main>
                <aside class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <dl class="dlist-align">
                                <dt>Total price:</dt>
                                <dd class="text-right">USD 568</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Discount:</dt>
                                <dd class="text-right">USD 658</dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Tổng tiền thanh toán</dt>
                                <dd class="text-right  h5"><strong>$1,650</strong></dd>
                            </dl>
                            <hr />
                            <a href="#" class="btn btn-primary float-md-right"> Thanh toán  </a>

                        </div>
                    </div>
                </aside>
            </div>

        </div>
    </section>)
export default ShoppingCart;