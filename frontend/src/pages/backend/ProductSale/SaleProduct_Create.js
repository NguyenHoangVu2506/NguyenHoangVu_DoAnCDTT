import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import categoryservice from "../../../services/CategoryService";
// import brandservice from "../../../services/BrandService";
// import productservice from "../../../services/ProductService";
import { Box, Button } from "@mui/material";
import store_products_service from "../../../services/store_products_service";
import SaleProductsService from "../../../services/SaleProductsService";

function SaleProduct_Create() {
    const navigate = useNavigate();
    const [sale_id, setSale_id] = useState('');
    const [product_id, setProduct_id] = useState('');
    const [qty, setQty] = useState('');
    const [pricesale, setpricesale] = useState(10000);
    const [date_begin, setDate_begin] = useState();
    const [price_sale, setPrice_sale] = useState();
    const [date_end, setDate_end] = useState();

    const [status, setStatus] = useState(2);
    async function productsalestore(event) {
        event.preventDefault();
        var productsale = new FormData();
        productsale.append("sale_id", sale_id);
        productsale.append("product_id", product_id);
        productsale.append("qty", qty);
        productsale.append("pricesale", pricesale);
        productsale.append("date_begin", date_begin);
        productsale.append("date_end", date_end);
        productsale.append("price_sale", price_sale);
        productsale.append("status", status);
        await SaleProductsService.create(productsale).then(function (res) {
            alert(res.data.message);
            navigate('/admin/customer', { replace: true });
        })
    }
    return (
        <>
            <form action="" method="post" onSubmit={productsalestore}>
                <div class="content-wrapper">
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-12">
                                    <h1 class="d-inline">Thêm sản phẩm giảm giá</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="content">
                        <div class="card">
                            <div class="card-header text-right">
                                <Link to="/admin/productstore" class="btn btn-sm btn-info">
                                    <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                    Quay lại
                                </Link>

                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-9">
                                        <div class="mb-3">
                                            <label>Mã sale (*)</label>
                                            <input value={sale_id} onChange={(e) => setSale_id(e.target.value)} type="text" placeholder="Mã sản phẩm" name="name" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Ngày bắt đầu sale(*)</label>
                                            <input value={date_begin} onChange={(e) => setDate_begin(e.target.value)} type="date" placeholder="Nhập tên sản phẩm" name="name" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Ngày kết thúc sale(*)</label>
                                            <input value={date_end} onChange={(e) => setDate_end(e.target.value)} type="date" placeholder="Nhập tên sản phẩm" name="name" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label>Số lượng</label>
                                            <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" class="form-control" />
                                        </div>
                                        <div class="mb-3">
                                            <label>Giá Sale (*)</label>
                                            <input value={price_sale} onChange={(e) => setPrice_sale(e.target.value)} type="number" min="10000" name="price" class="form-control" />
                                        </div>

                                        <div class="mb-3">
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-sm btn-success" name="CHANGEADD">
                                
                                Thêm
                            </button>
                            </div>
                        </div>
                    </section>
                </div>
            </form>
        </>
    );
}

export default SaleProduct_Create;