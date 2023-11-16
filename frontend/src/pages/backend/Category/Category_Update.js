import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";

function Category_Update() {

    const navigate = useNavigate(); // chuyen trang
    const [name, setName] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(1);
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState('');
    const [parent_id, setParentId] = useState(0);
    // lay id
    const { id } = useParams("id");
    //lay du lieu
    useEffect(function () {
        (async function () {
            await categoryservice.getById(id).then(function (result) {
                const data = result.data.categorys;
                setName(data.name);
                setDescription(data.description);
                setSortOrder(data.sort_order);
                setStatus(data.status);
                setParentId(data.parent_id);
                setMetakey(data.metakey);
                setMetadesc(data.metakey);
            });
        })();
    }, [])
    //lay danh sach
    const [categorys, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategory(result.data.categorys)
            });
        })();
    }, [])

    // ham cap nhat
    async function CategoryEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var category = new FormData();
        category.append("name", name);
        category.append("description", description);
        category.append("metakey", name);
        category.append("sort_order", sort_order);
        category.append("status", status);
        category.append("metakey", metakey);
        category.append("metadesc", metadesc);
        category.append("parent_id", parent_id);
        if (image.files.length === 0) {
            category.append("image", "")
        }
        else {
            category.append("image", image.files[0]);
        }
        await categoryservice.update(id,category).then(function (res) {
            alert(res.data.message);
            navigate('/admin/category', { replace: true });
        })

    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chỉnh sửa Danh mục</h1>
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
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <form onSubmit={CategoryEdit}>

                                    <div class="mb-3">
                                        <label>Tên Danh mục (*)</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Mô tả</label>
                                        <input type="text" name="slug" value={description} onChange={(e) => setDescription(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Hình ảnh</label>
                                        <input type="file" id="image" name="image" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Sắp xếp</label>
                                        <select name="status" class="form-control" onChange={(e) => setSortOrder(e.target.value)} value={sort_order}>
                                            {categorys.map((br, index) => {
                                                return (
                                                    <option key={index} value={br.sort_order + 1}>Sau: {br.name}</option>

                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name">Từ khóa</label>
                                        <textarea name="metakey" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name">mô tả</label>
                                        <textarea name="metadesc" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>
                                    </div>
                                    <div className="md-3">
                                        <label >Danh mục cha</label>
                                        <select
                                            name="parent_id"
                                            value={parent_id}
                                            onChange={(e) => setParentId(e.target.value)}
                                            className="form-control">
                                            <option value="0">None</option>
                                            {categorys.map(function (category, index) {
                                                return (
                                                    <option key={index} value={category.id}>{category.name}</option>
                                                )
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
                                    <div class="card-header text-center">
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-save me-1" aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>

                                </form>
                            </div>
                            <div class="col-md-3">
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Category_Update;