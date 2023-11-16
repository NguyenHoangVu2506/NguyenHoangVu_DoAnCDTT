import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import productservice from "../../../services/ProductService";
import accounting from "accounting";
function getFirstImage(image) {
    if (image) {
        var img = image.split(",");
        return img[0];
    }
    return "";
}
function Product_Show() {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const firstImage = getFirstImage(product.image);
    useEffect(()=>{
        (async ()=>{
            await productservice.getById(id).then((res)=>{
                setProduct(res.data.products);
            })
        })()
    },[]);
    let status = "Chưa xuất bản"
    if(product.status === 1){
        status = "Xuất bản"
    }
    return (
        <div class="content-wrapper">
            {console.log(product)}
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết sản phẩm</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/product" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Về danh sách
                        </Link>
                    </div>
                    <div class="card-body p-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{width:"30%"}}>Tên trường</th>
                                    <th>Giá trị</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{product.id}</td>
                                </tr>
                                <tr>
                                    <th>Hình ảnh </th>
                                    <td>
                                        <img src={urlImage + "Product/" + firstImage} className="img-fluid" style={{ maxWidth: 200 ,maxHeight:150}} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <td>{product.name}</td>
                                </tr>
                                <tr>
                                    <th>Slug</th>
                                    <td>{product.slug}</td>
                                </tr>

                                <tr>
                                    <th>Tên thương hiệu</th>
                                    <td>{product.brandname}</td>
                                </tr>
                                <tr>
                                    <th>Tên danh mục</th>
                                    <td>{product.categoryname}</td>
                                </tr>
                                <tr>
                                    <th>Chi tiết sản phẩm</th>
                                    <td>{product.detail}</td>
                                </tr>
                                <tr>
                                    <th>Giá</th>
                                    <td>{accounting.formatNumber(product.price, 0, ".", ",")}đ</td>
                                </tr>
                                <tr>
                                    <th>Trạng thái</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{product.created_at}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Product_Show;