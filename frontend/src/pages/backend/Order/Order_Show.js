import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import OrderService from "../../../services/OrderService";
import orderDetailService from "../../../services/OrderDetailService";

function Order_Show() {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [orderdetail, setOrderDetail] = useState([]);

    useEffect(() => {
        (async () => {
            await OrderService.getById(id).then((res) => {
                setOrder(res.data.orders);
            })
        })()
    }, [])
    useEffect(() => {
        (async () => {
            await orderDetailService.getById(id).then((res) => {
                setOrderDetail(res.data.orderdetail);
            })
        })()
    }, [])
    // useEffect(() => {
    //     (async () => {
    //         await prod.getById(id).then((res) => {
    //             setOrderDetail(res.data.orderdetail);
    //         })
    //     })()
    // }, [])
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Chi tiết Đơn hàng</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="card">
                    <div className="card-header text-right">
                        <Link to="/admin/order" className="btn btn-sm btn-info">
                            <i className="fa fa-reply me-1" aria-hidden="true"></i>
                            Quay lại
                        </Link>
                    </div>
                    <div className="card-body p-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: "30%" }}>Tên trường</th>
                                    <th>Giá trị</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Mã đơn hàng</th>
                                    <th>{orderdetail.order_id}</th>
                                </tr>
                                <tr>
                                    <th> Mã sản phẩm</th>
                                    <td>{orderdetail.product_id}</td>
                                </tr>
                                <tr>
                                    <th>Giá</th>
                                    <td>{orderdetail.price}</td>
                                </tr>
                                <tr>
                                    <th>Giá sale</th>
                                    <td>{orderdetail.discount}</td>
                                </tr>

                                <tr>
                                    <th>số lượng</th>
                                    <td>{orderdetail.qty}</td>
                                </tr>
                                <tr>
                                    <th>Ngày tạo</th>
                                    <td>{orderdetail.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Order_Show;