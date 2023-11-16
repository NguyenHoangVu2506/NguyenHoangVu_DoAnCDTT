import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";
import productservice from "../../../services/ProductService";
import accounting from "accounting";
function getFirstImage(image) {
    if (image) {
        var img = image.split(",");
        return img[0];
    }
    return "";
}
function Product_List() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [end_page, setEnd] = useState(1);
    const [page, setPage] = useState(1);
    const [countTrash, setTrash] = useState(0);
    const [countAll, setCountAll] = useState(0);
    const [statusdel, setStatusDel] = useState(0);

    useEffect(() => {
        (async () => {
            await productservice.getAll(limit, page).then((res) => {
                setProducts(res.data.products);
                setEnd(res.data.end_page);
                setTrash(res.data.count_trash);
                setCountAll(res.data.count_all);
            })
        })()
    }, [page,statusdel]);
    function productTrash(id) {
        productservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setStatusDel(id);
        })
    }
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <form action="" method="post">
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-10">
                                        <h1 class="d-inline">Tất cả sản phẩm <sup>({countAll})</sup></h1>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-9 d-flex">
                              
                                            <Link to="/admin/product/create" class="btn btn-sm btn-success ms-2 ">
                                                <i class="fa fa-plus " ></i>
                                                Thêm
                                            </Link>
                                            <Link class="btn btn-sm" to="/admin/product/trash" style={{ color: "red" }}>
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                                <sup class="count ms-1">{countTrash}</sup>
                                            </Link>
                                </div>
                                <div class="col-3 ">
                                    <div className="d-flex float-right">
                                        <input type="text" class="form-control" style={{ width: "100%", height: "70%" }} />
                                        <button className="btn"><i class="fa fa-search "></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered" id="mytable">
                                <thead>
                                    <tr>
                                        <th class="text-center" style={{ width: "30px" }}>
                                            {/* <input type="checkbox" /> */}
                                        </th>
                                        <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                        <th style={{ width: "300px" }}>Tên sản phẩm</th>
                                        <th>Tên danh mục</th>
                                        <th>Tên thương hiệu</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((pro, index) => {
                                            const firstImage = getFirstImage(pro.image);

                                        return (
                                            <tr class="datarow" key={index}>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>
                                                    <img src={urlImage + "Product/" + firstImage} alt="product.jpg" style={{ width: "100%" }} />
                                                </td>
                                                <td>
                                                    <div class="name">
                                                        {pro.name}
                                                    </div>
                                                    <div class="function_style d-flex">
                                                        <a href="#">Hiện</a> |
                                                        <Link to={`/admin/product/update/${pro.id}`}>Chỉnh sửa</Link> |
                                                        <Link to={`/admin/product/show/${pro.id}`}>Chi tiết</Link> |
                                                        <Link  onClick={() => {
                                                                if (window.confirm("Xác nhận xóa sản phẩm  này?")) {
                                                                    productTrash(pro.id);
                                                                }
                                                            }}>Xoá</Link>
                                                    </div>
                                                </td>
                                                <td>{pro.categoryname}</td>
                                                <td>{pro.brandname}</td>
                                                <td>{accounting.formatNumber(pro.price, 0, ".", ",")}đ</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination justify-content-center">
                            <Pagination page={page} count={end_page} onChange={handleChange} />

                        </div>

                    </div>
                </section>
            </div>
        </form>

    );
}

export default Product_List; 