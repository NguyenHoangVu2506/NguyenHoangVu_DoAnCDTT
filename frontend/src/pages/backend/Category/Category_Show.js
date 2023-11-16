import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import categoryservice from "../../../services/CategoryService";
function Category_Show() {
    const { id } = useParams();
    const [category, setCategory] = useState([]);
    let status = "Chưa xuất bản";
    useEffect(() => {
        (async () => {
            await categoryservice.getById(id).then((res) => {
                setCategory(res.data.categorys);
            })
        })()
    }, [])
    if (category.status == 1) {
        status = "Xuất bản"
    }
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết danh mục</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/category" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Quay lại
                        </Link>
                    </div>
                    <div class="card-body p-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: "30%" }}>Tên trường</th>
                                    <th>Giá trị</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <img src={urlImage + "category/" + category.image} alt="hình" className="img-fluid" style={{ maxWidth: 200 }} />
                                </tr>
                                <tr>
                                    <th>Tên Danh mục</th>
                                    <td>{category.name}</td>
                                </tr>
                                <tr>
                                    <th>Slug</th>
                                    <td>{category.slug}</td>
                                </tr>
                                <tr>
                                    <th>Mô tả</th>
                                    <td>{category.description}</td>
                                </tr>

                                <tr>
                                    <th>Thứ tự</th>
                                    <td>{category.sort_order}</td>
                                </tr>
                                <tr>
                                    <th>Danh mục cha</th>
                                    <td value={category.parent_id}>{category.name}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{category.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Category_Show;