import React from "react";
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

import { BsCartCheck, BsCartX } from 'react-icons/bs';
import { urlImage } from '../../../config';
import { useNavigate } from 'react-router-dom';
import accounting from "accounting";
import OrderService from "../../../services/OrderService";
function ShoppingCart() {
    const Navigate = useNavigate()
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    async function Checkout() {
        emptyCart();
        alert('Xác nhận đơn hàng thành công');
        Navigate('thanh-toan', { replace: true });

    }
    return (


        <section className="section-content padding-y">
             <section className="py-3 bg-light">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item">Sản phẩm</li>
                        <li className="breadcrumb-item">Giỏ hàng</li>
                    </ol>
                </div>
            </section>
            <div className="container">

                <div className="row">
                    <main className="col-md-9">
                        <div className="card">

                            <table className="table table-borderless table-shopping-cart">
                                <thead className="text-muted">
                                    <tr className="small text-uppercase">
                                        <th scope="col" width="220">Hình ảnh</th>
                                        <th scope="col" width="250">Tên sản phẩm</th>
                                        <th scope="col" width="160">Số lượng</th>
                                        <th scope="col" width="120">Đơn giá</th>
                                        <th scope="col" className="text-right" width="120"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => {
                                        const firstImage = getFirstImage(item.product_image);
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <figure className="itemside">
                                                        <div className="aside"><img src={urlImage + 'product/' + firstImage} height={100} width={100} className="img-sm" /></div>

                                                    </figure>
                                                </td>
                                                <td>
                                                    <figcaption className="info">
                                                        <a href="#" className="title text-dark">{item.product_name}</a>
                                                    </figcaption>
                                                </td>
                                                <td>
                                                    <div className="form-group">
                                                    ({item.quantity})

                                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-light">-</Button>
                                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-light">+</Button>

                                                    </div>

                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <var className="price">{accounting.formatNumber(item.price, 0, ".", ",")}đ</var>
                                                        <br />
                                                        <del class="text-muted">{accounting.formatNumber(item.listed_price, 0, ".", ",")}</del>đ<del></del>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    {/* <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></a> */}
                                                    <Button variant="danger" onClick={() => removeItem(item.id)} className="btn btn-light">Xóa</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <div className="card-body border-top">
                                <a href="/" className="btn btn-light"> <i className="fa fa-chevron-left"></i>Tiếp tục mua hàng</a>
                            </div>
                        </div>

                        <div className="alert alert-success mt-3">
                            <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                        </div>

                    </main>
                    <aside className="col-md-3">
                        {!isEmpty &&
                            <div className="card">
                                <div className="card-body">
                                    {/* <dl className="dlist-align">
                                        <dt>Total price:</dt>
                                        <dd className="text-right">{cartTotal}.VNĐ</dd>
                                    </dl> */}
                                    {/* <dl className="dlist-align">
                                        <dt>Discount:</dt>
                                        <dd className="text-right">USD 658</dd>
                                    </dl> */}
                                    <dl className="dlist-align">
                                        <dt>Tổng tiền thanh toán</dt>
                                        <dd className="text-right  h5"><strong>{accounting.formatNumber(cartTotal, 0, ".", ",")}đ</strong></dd>
                                    </dl>
                                    <hr />
                                    <a href="#" className="btn btn-primary float-md-right"  onClick={() => Checkout()}> Thanh toán  </a>

                                </div>
                            </div>
                        }
                    </aside>
                </div>

            </div>
        </section>
    );
}
function getFirstImage(image) {
    var img = image.split(",");
    return img[0];
}
export default ShoppingCart;