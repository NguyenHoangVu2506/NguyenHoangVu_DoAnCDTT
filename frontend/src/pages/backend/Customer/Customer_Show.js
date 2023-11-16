import React from 'react';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import userservice from '../../../services/UserService';
function Customer_Show() {
    const { id } = useParams();
    const [user,setUser] = useState([]);
    let status = "Chưa xuất bản";
    useEffect(() => {
        (async () => {
            await userservice.getById(id).then((res) => {
                setUser(res.data.user);
            })
        })()
    }, [])
    if (user.status === 1) {
        status = "Xuất bản"
    }
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Chi tiết khách hàng</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="card">
                    <div className="card-header text-right">
                        <Link to="/admin/user" className="btn btn-sm btn-info">
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
                                    <th>ID</th>
                                    <td>{user.id}</td>
                                </tr>
                                <tr>
                                    <th>Hình ảnh </th>
                                    <td>
                                        <img src={urlImage + "User/" + user.image} className="img-fluid" style={{ maxWidth: 200 }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Họ tên</th>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <th>Giới tính</th>
                                    <td>{user.gender}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{user.email}</td>
                                </tr>

                                <tr>
                                    <th>Số điện thoại</th>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <th>Tên đăng nhập</th>
                                    <td>{user.username}</td>
                                </tr>
                                <tr>
                                    <th>Mật khẩu</th>
                                    <td>{user.password}</td>
                                </tr>
                                <tr>
                                    <th>Địa chỉ</th>
                                    <td>{user.address}</td>
                                </tr>
                                <tr>
                                    <th>Trạng thái</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{user.created_at}</td>
                                </tr>
                                <tr>
                                    <th>Ngày cập nhật</th>
                                    <td>{user.updated_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Customer_Show;