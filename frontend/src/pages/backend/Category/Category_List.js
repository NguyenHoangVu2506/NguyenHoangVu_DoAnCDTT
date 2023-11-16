import React from 'react';
import { useEffect, useState } from 'react';
import { urlImage } from "../../../config";
import "./style.css";
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";
function Category_List() {
    const navigate = useNavigate();
    const [countTrash, setCountTrash] = useState(0);
    const [countCat, setCountCat] = useState(0);

    const [categorys, setCategorys] = useState([]);
    const [statusdel, setStatusDel] = useState(0);
    useEffect(() => {
        (async function () {
            await categoryservice.getAll().then((res) => {
                setCategorys(res.data.categorys);
                setCountCat(res.data.count_cat);
                setCountTrash(res.data.count_trash);

            })
        })()
    }, [statusdel])
    function catTrash(id) {
        categoryservice.deleteTrash(id).then(function (result) {
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
                            <h1 className="d-inline">Danh sách Danh mục</h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link className="action-btn" to="/admin/category/trash" style={{ color: "red" }}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <sup className="count ms-1">{countTrash}</sup>
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
                                    <a className="nav-link" href="/admin/category/create" role="button">
                                    < FaRegPlusSquare/> Thêm
                                    </a>
                                </li>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>

                                            <th className="text-center" style={{ width: "30px" }}>
                                                {/* <input type="checkbox" /> */}
                                            </th>
                                            <th className="text-center" style={{ width: "30px" }}>Id</th>
                                            <th className="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                            <th style={{ width: "220px" }}>Tên danh mục</th>
                                            <th>Mô tả</th>
                                            <th className="text-center" style={{ width: "130px" }}>Danh mục cha</th>
                                            <th className="text-center" style={{ width: "130px" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categorys.map(function (category, index) {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{category.id}</td>
                                                    <td >
                                                        <img src={urlImage + 'category/' + category.image} alt="brand.jpg" style={{ width: "100%" }} />
                                                    </td>
                                                    <td>
                                                        <div className="name">
                                                            {category.name}
                                                        </div>

                                                    </td>
                                                    <td>{category.description}</td>
                                                    <td value={category.parent_id}>{category.name}</td>
                                                    <td>
                                                        <Link to={`/admin/category/update/${category.id}`} className=""><FaEdit /> Update</Link>
                                                        <Link to={`/admin/category/show/${category.id}`} className=""><FaEye /> Detail</Link>
                                                        <button onClick={() => { if (window.confirm("Xác nhận xóa danh mục này?")) { catTrash(category.id) } }}>
                                                            <FaTrash /> Xoá</button>

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

export default Category_List;