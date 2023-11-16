import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";
import userservice from "../../../services/UserService";

function User_Trash() {
    const [trash, setTrash] = useState([]);
    const [count_trash, setCount] = useState(0);
    const [tamp, setTamp] = useState(0);

    useEffect(() => {
        (async () => {
            await userservice.getTrash('admin').then((res) => {
                setTrash(res.data.trash);
                setCount(res.data.count_trash);
            })
        })()
    }, [tamp])

    function RescoverTrash(id) {
        userservice.RescoverTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    function deleted(id) {
        userservice.remove(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }

    if (trash.length === 0) {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <h1 className="d-inline">Thùng rác<sup style={{ fontSize: "14px" }}>({count_trash})</sup></h1>
                                    </div>
                                    <div className="col-sm-3  ">
                                        <div className="text-right ms-5">
                                            <Link to="/admin/user" className="btn btn-sm btn-info me-3 ">
                                                <i className="fa fa-reply me-1" aria-hidden="true"></i>
                                                Quay lại
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="card">
                        <div className="card-header">

                            <h6>Hiện không có thành viên  nào !</h6>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
    else {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <h1 className="d-inline">Thùng rác</h1>
                                    </div>
                                    <div className="col-sm-3  ">
                                        <div className="text-right ms-5">
                                            <Link to="/admin/user" className="btn btn-sm btn-info me-3 ">
                                                <i className="fa fa-reply me-1" aria-hidden="true"></i>
                                                Quay lại
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-9 d-flex">
                                    <select name="" id="" className="form-control d-inline" style={{ width: "100px" }}>
                                        <option value="">Xoá</option>
                                    </select>
                                    <button className="btn btn-sm btn-success ms-2">Áp dụng</button>
                                </div>
                                <div className="col-3 ">
                                    <div className="d-flex float-right">
                                        <input type="text" className="form-control" style={{ width: "100%", height: "70%" }} />
                                        <button className="btn"><i className="fa fa-search "></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered" id="mytable">
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{ width: "30px" }}>
                                            <input type="checkbox" />
                                        </th>
                                        <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                        <th style={{ width: "150px" }}>Họ tên</th>
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>Ngày xóa</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trash.map((tra, index) => {
                                        return (
                                            <tr className="datarow" key={index} >
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>                                                        
                                                    <img src={urlImage + 'User/' + tra.image} alt="user.jpg" style={{ width: "100%" }} />
                                                </td>
                                                <td>
                                                    <div className="name">
                                                        {tra.name}
                                                    </div>
                                                    <div className="function_style d-flex" style={{ fontSize: "14px" }}>
                                                        <Link to={`/admin/User/show/${tra.id}`}><i className="fa fa-eye me-1"></i>Chi tiết</Link>
                                                    </div>
                                                </td>
                                                <td>{tra.email}</td>
                                                <td>{tra.phone}</td>
                                                <td>{tra.updated_at}</td>
                                                <td className="text-center">
                                                    <button onClick={() => RescoverTrash(tra.id)} className="btn btn-outline-success me-2">
                                                        <i className="fa fa-history" aria-hidden="true"></i>
                                                    </button>
                                                    <button onClick={() => deleted(tra.id)} className="btn btn-outline-danger">
                                                        <i className="fa fa-times" aria-hidden="true"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination justify-content-center">
                            {/* <Pagination page={page} count={end_page} onChange={handleChange} /> */}

                        </div>

                    </div>
                </section>
            </div>

        );

    }
}

export default User_Trash;