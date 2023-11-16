import React from 'react';
import { useEffect, useState } from "react";
import "./style.css";
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { urlImage } from "../../../config";
import userservice from '../../../services/UserService';
function User_List() {
    const [users, setUsers] = useState([]);

    const [count_user, setCountUser] = useState(0);
    const [count_trash, setCountTrash] = useState(0);
    const [tamp, setTamp] = useState(0);


    useEffect(() => {
        (async function () {
            await userservice.getAll('admin').then((res) => {
                setUsers(res.data.users);
                setCountUser(res.data.count_user);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [tamp])
    function UserTrash(id) {
        userservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }
    return (
        <div className=" admin content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Danh sách Thành viên <sup style={{ fontSize: "14px" }}>({count_user})</sup></h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link className="action-btn" to="/admin/user/trash" style={{ color: "red" }}>
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
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/user/create" role="button">
                                        < FaRegPlusSquare /> Thêm
                                    </a>
                                </li>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>

                                            <th className="text-center" style={{ width: "30px" }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th className="text-center" style={{ width: "30px" }}>Id</th>
                                            <th style={{ width: "120px" }}>Hình ảnh</th>
                                            <th className="text-center" style={{ width: "130px" }}>Họ tên</th>
                                            <th style={{ width: "80px" }}>Email</th>
                                            <th style={{ width: "80px" }}>Phone</th>
                                            <th style={{ width: "80px" }}>Giới tính</th>

                                            <th className="text-center" style={{ width: "130px" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(function (user, index) {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{user.id}</td>
                                                    <td>                                                           
                                                        <img src={urlImage + 'User/' + user.image} alt="user.jpg" style={{ width: "100%" }} />
                                                    </td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>

                                                    <td>{user.phone}</td>                                                   
                                                    <td>{user.gender}</td>

                                                    <td>
                                                        <Link to={`/admin/user/update/${user.id}`} className="">
                                                            <FaEdit /> Update
                                                        </Link>
                                                        <Link to={`/admin/user/show/${user.id}`} className="">
                                                            <FaEye /> Detail
                                                        </Link>
                                                        <button
                                                            onClick={() => {
                                                                if (window.confirm("Xác nhận xóa tài khoản này?")) {
                                                                    UserTrash(user.id);
                                                                }
                                                            }}
                                                        >
                                                            <FaTrash /> Xoá
                                                        </button>
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

export default User_List;