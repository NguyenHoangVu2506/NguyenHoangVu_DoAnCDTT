import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import "./style.css";
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import brandservice from "../../../services/BrandService";
function Brand_List() {
    const navigate = useNavigate();

    const [brands, setBrands] = useState([]);
    const [statusdel, setStatusDel] = useState(0);
    const [count_trash,setCountTrash] = useState(0);

    useEffect(() => {
        (async function () {
            await brandservice.getAll().then((res) => {
                setBrands(res.data.brands);
                setCountTrash(res.data.count_trash);

            })
        })()
    }, [statusdel])

    // delete
    // function brandDelete(id) {
    //     brandservice.remove(id).then(function (result) {
    //         alert(result.data.message);
    //         setStatusDel(result.data.id);
    //     })
    // }
    function brandTrash(id) {
        brandservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setStatusDel(id);
        })
    }
    return (
        <div class=" admin content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Tất cả thương hiệu</h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link class="action-btn" to="/admin/brand/trash" style={{ color: "red" }}>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <sup class="count ms-1">{count_trash}</sup>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            {/* <div class="col-md-4">
                                <form onSubmit={brandStore}>

                                    <div class="mb-3">
                                        <label>Tên thương hiệu (*)</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Mô tả</label>
                                        <input type="text" name="slug" value={description} onChange={(e) => setDescription(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Hình đại diện</label>
                                        <input type="file" id="image" name="image" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Sắp xếp</label>
                                        <select name="status" class="form-control" onChange={(e) => setSortOrder(e.target.value)} value={sort_order}>
                                            {brands.map((br, index) => {
                                                return (
                                                    <option key={index} value={br.sort_order + 1}>Sau: {br.name}</option>

                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label>Trạng thái</label>
                                        <select name="status" class="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                    <div class="card-header text-right">
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-save me-1" aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>

                                </form>
                            </div> */}
                            <div class="col-md-12">
                                <li class="nav-item">
                                    <a class="nav-link" href="/admin/brand/create" role="button">
                                    < FaRegPlusSquare/> Thêm
                                    </a>
                                </li>

                                <table class="table table-bordered">
                                    <thead>
                                        <tr>

                                            <th class="text-center" style={{ width: "30px" }}>
                                                {/* <input type="checkbox" /> */}
                                            </th>
                                            <th className="text-center" style={{ width: "30px" }}>Id</th>
                                            <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                            <th style={{ width: "220px" }}>Tên thương hiệu</th>
                                            <th>Mô tả</th>
                                            <th class="text-center" style={{ width: "130px" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {brands.map(function (brand, index) {
                                            return (
                                                <tr class="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{brand.id}</td>
                                                    <td >
                                                        <img src={urlImage + 'Brand/' + brand.image} alt="brand.jpg" style={{ width: "100%" }} />
                                                    </td>
                                                    <td>
                                                        <div class="name">
                                                            {brand.name}
                                                        </div>

                                                    </td>
                                                    <td>{brand.description}</td>
                                                    <td>
                                                        <Link to={`/admin/brand/update/${brand.id}`} className=""><FaEdit /> Update</Link>
                                                        <Link to={`/admin/brand/show/${brand.id}`} className=""><FaEye /> Detail</Link>
                                                        <button onClick={() => brandTrash(brand.id)} style={{margin:"0px 3px"}}><i className="fa fa-trash me-1"></i>Xoá</button>
 
                                                        {/* <button onClick={() => { if (window.confirm("Xác nhận xóa danh mục này?")) { brandTrash(brand.id)} } }>
                                                            <FaTrash /> Xoá</button> */}

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

export default Brand_List;