import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import categoryservice from "../../../services/CategoryService";
// import brandservice from "../../../services/BrandService";
// import productservice from "../../../services/ProductService";
import { Box, Button } from "@mui/material";
import store_products_service from "../../../services/store_products_service";

function StoreProduct_Create() {
    const navigate = useNavigate();
    const [Products, setProducts] = useState([]);
    const [Store_Products, setStore_Products] = useState([]);
    const [UpdateStore_Products, setUpdateStore_Products] = useState(true || false);
    try {
        useEffect(function () {
            (async function () {
                const products_data = await store_products_service.getProductAndStoreProduct();
                if (products_data.data.success === true) {
                    setProducts(products_data.data.products);
                    setStore_Products(products_data.data.store_products)

                } else {

                }

            })();
        }, [UpdateStore_Products]);
    } catch (e) {
        console.error(e);
    }
    const [Input_product_id, setInput_product_id] = useState();
    const [Input_product_name, setInput_product_name] = useState('');
    const [Input_product_qty, setInput_product_qty] = useState();
    const [Input_product_price, setInput_product_price] = useState();


    const SubmitAddProduct = async () => {
        const addProduct = await {
            "product_id": Input_product_id,
            "product_name": Input_product_name,
            "product_price": Input_product_price,
            "product_qty": Input_product_qty
        }
        try {
            const exeAddProduct = await store_products_service.add_store_product(addProduct);
            if (exeAddProduct.data.success === true) {
                setUpdateStore_Products(!UpdateStore_Products);
                alert(exeAddProduct.data.message);
                navigate('/admin/productstore', { replace: true });
            } else {
                alert(exeAddProduct.data.message);
            }

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
        <form action="" method="post" >
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <h1 class="d-inline">Thêm sản phẩm</h1>
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
                                        <label>Mã sản phẩm (*)</label>
                                        <input  value={Input_product_id} onChange={(e) => setInput_product_id(e.target.value)} type="text" placeholder="Mã sản phẩm" name="name" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Tên sản phẩm (*)</label>
                                        <input value={Input_product_name} onChange={(e) => setInput_product_name(e.target.value)} type="text" placeholder="Nhập tên sản phẩm" name="name" class="form-control" />
                                    </div>


                                    <div class="">
                                       
                                    </div>


                                   
                                </div>
                                <div class="col-md-3">
                                <div class="mb-3">
                                        <label>Số lượng</label>
                                        <input value={Input_product_qty} onChange={(e) => setInput_product_qty(e.target.value)} type="number" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Giá bán (*)</label>
                                        <input value={Input_product_price} onChange={(e) => setInput_product_price(e.target.value)} type="number" min="10000" name="price" class="form-control" />
                                    </div>
                                    
                                    <div class="mb-3">
                                    </div>
                                </div>
                            </div>
                            <Button onClick={() => SubmitAddProduct()} >Thêm</Button>
                        </div>
                    </div>
                </section>
            </div>
        </form>
        </>
    );
}

export default StoreProduct_Create;