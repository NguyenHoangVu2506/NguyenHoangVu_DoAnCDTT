import React from "react";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import "./style.css";
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import OrderService from "../../../services/OrderService";
function Order_List() {
    const navigate = useNavigate();

    const [order, setOrders] = useState([]);
    const [statusdel, setStatusDel] = useState(0);
    const [count_trash,setCountTrash] = useState(0);

    useEffect(() => {
        (async function () {
            await OrderService.getAll().then((res) => {
                setOrders(res.data.orders);
                setCountTrash(res.data.count_trash);

            })
        })()
    }, [statusdel])
    function orderTrash(id) {
        OrderService.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setStatusDel(id);
        })
    }
    return (
        <div className=" admin content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Danh sách đơn hàng</h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link className="action-btn" to="/admin/order/trash" style={{ color: "red" }}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <sup className="count ms-1">{count_trash}</sup>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ width: "30px" }}>
                                                {/* <input type="checkbox" /> */}
                                            </th>
                                            <th className="text-center" style={{ width: "30px" }}>Id</th>
                                            <th className="text-center" style={{ width: "130px" }}>Tên khách hàng</th>
                                            <th className="text-center" style={{ width: "120px" }}>Điện thoại</th>
                                            <th className="text-center" style={{ width: "120px" }}>Email</th>
                                            <th className="text-center" style={{ width: "120px" }}>Địa chỉ</th>
                                            <th className="text-center" style={{ width: "130px" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.map(function (or, index) {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{or.id}</td>
                                                    <td >
                                                        {or.delivery_name}
                                                    </td>
                                                    <td>
                                                        <div className="name">
                                                            {or.delivery_phone}
                                                        </div>

                                                    </td>
                                                    <td>{or.delivery_phone}</td>
                                                    <td>{or.delivery_address}</td>
                                                    <td>
                                                        <Link to={`/admin/orderdetail/show/${or.id}`} className=""><FaEye /> Detail</Link>
                                                        <button onClick={() => orderTrash(or.id)} style={{margin:"0px 3px"}}><i className="fa fa-trash me-1"></i>Xoá</button>
                                                    </td>
                                                </tr>

                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Order_List;