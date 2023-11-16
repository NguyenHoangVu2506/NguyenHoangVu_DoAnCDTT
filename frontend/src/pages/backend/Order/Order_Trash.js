import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../../../config";
import brandservice from "../../../services/BrandService";

function Order_Trash() {
    const [trash, setTrash] = useState([]);
    const [countTrash, setCountTrash] = useState(0);
    useEffect(() => {
        (async () => {
            await brandservice.getTrash().then((res) => {
                setTrash(res.data.trash);
            })
        })()
    }, [countTrash])

    function RescoverTrash(id) {
        brandservice.RescoverTrash(id).then(function (result) {
            alert(result.data.message);
            setCountTrash(result.data.id);
        })
    }

    function deleted(id) {
        brandservice.remove(id).then(function (result) {
            alert(result.data.message);
            setCountTrash(result.data.id);
        })
    }
    
    if (trash == null) {
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
                                            <Link to="/admin/brand" className="btn btn-sm btn-info me-3 ">
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

                            <h6>Hiện không có thương hiệu nào !</h6>
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
                                            <Link to="/admin/brand" className="btn btn-sm btn-info me-3 ">
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
                                        <th style={{ width: "300px" }}>Tên thương hiệu</th>
                                        <th>Mô tả</th>
                                        <th>Slug</th>
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
                                                    <img src={urlImage + 'Brand/' + tra.image} style={{ width: "100%" }} />
                                                </td>
                                                <td>
                                                    <div className="name">
                                                        {tra.name}
                                                    </div>
                                                    <div className="function_style d-flex">
                                                        <a href="#">Hiện</a> |
                                                        <Link to={`/admin/product/update/`}>Chỉnh sửa</Link> |
                                                        <Link to={`/admin/product/show/`}>Chi tiết</Link> |
                                                        <button>Xoá</button>
                                                    </div>
                                                </td>
                                                <td>{tra.description}</td>
                                                <td>{tra.slug}</td>
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
                        </div>
                    </div>
                </section>
            </div>
        );

    }
}

export default Order_Trash;