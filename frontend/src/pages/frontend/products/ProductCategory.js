// import { useParams } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import categoryservice from "../../../services/CategoryService";
// // import productservice from "../../../services/ProductService";
// import ListBrand from "../../components/frontend/ListBrand";
// import Product_item from "../../components/frontend/product_item1";
// import StoreProductsService from "../../../services/StoreProductsService";
// import ListCategory from "../../components/frontend/ListCategory";
// import { Checkbox, FormControlLabel, Pagination, Stack } from "@mui/material";
// import Product_list from "../../components/frontend/product_list";

// function ProductCategory() {
//     const { slug } = useParams();
//     const [page, setPage] = React.useState(1);
//     const ChangePage = (event, value) => {
//         setPage(value);
//     };
//     const [end_page, setEndPage] = React.useState(1);
//     const [OneCategoryInfo, setOneCategoryInfo] = useState([]);
//     const [BrandAll, setBrandAll] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [productsbrand, setProductsBrand] = useState([]);

//     const [Filter, setFilter] = useState(-1);
//     const [FilterByBrand, setFilterByBrand] = useState([]);
//     const [FilterByPrice, setFilterByPrice] = useState([]);

//     const [viewMode, setViewMode] = useState("grid");

//     try {
//         useEffect(function () {
//             (async function () {
//                 const products_data = await StoreProductsService.ProductByCategory_filter(8, page, slug, Filter, { "brand_id": FilterByBrand, "min_max_price": FilterByPrice });
//                 if (products_data.data.success === true) {
//                     setProducts(products_data.data.ProductsByCategory);
//                     setProductsBrand(products_data.data.ProductsByBrand)
//                     setEndPage(products_data.data.end_page);
//                     setOneCategoryInfo(products_data.data.OneProductByCategory);
//                     setBrandAll(products_data.data.brand_all);
//                 } else {

//                 }

//             })();
//         }, [slug, page, Filter, FilterByBrand, FilterByPrice]);
//     } catch (e) {
//         console.error(e);
//     }
//     const [openAlert, setOpenAlert] = useState(false);
//     const [txtAlert, setTxtAlert] = useState('');
//     const [severity_value, setSeverity_value] = useState('');

//     const Dis_Alert = (input_txtAlert, input_severity) => {
//         setTxtAlert(input_txtAlert);
//         setSeverity_value(input_severity);
//         setOpenAlert(true);
//     };

//     const Dis_AlertClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpenAlert(false);
//     };
//     const handleChange = async (event) => {
//         if (event.target.checked === true) {

//             if (await FilterByBrand.filter((item) => item === event.target.value).length > 0) {

//             } else {
//                 setFilterByBrand([...FilterByBrand, event.target.value]);
//             }

//         } else if (event.target.checked === false) {
//             if (await FilterByBrand.filter((item) => item === event.target.value).length > 0) {
//                 const new_arr = await FilterByBrand.filter(item => item !== event.target.value);
//                 await setFilterByBrand(new_arr);
//             } else {

//             }
//         }

//     };

//     const handleListView = () => {
//         setViewMode("list");
//     };

//     const handleGridView = () => {
//         setViewMode("grid");
//     };

//     return (
//         <div class="product-container">

//             <div class="container">

//                 <div class="sidebar  has-scrollbar" >
//                     <ListCategory />
//                     <ListBrand />

//                 </div>
//                 <div class="product-box">

//                     <div class="product-main">
//                         <div id="btnContainer" className="mb-3">
//                             <button className={`btn${viewMode === "list" ? " active" : ""}`} onClick={handleListView}>
//                                 <i className="fa fa-bars"></i> List
//                             </button>
//                             <button className={`btn${viewMode === "grid" ? " active" : ""}`} onClick={handleGridView}>
//                                 <i className="fa fa-th-large"></i> Grid
//                             </button>

//                         </div>

//                         {viewMode === "grid" ? (
//                             <div className="product-grid">
//                                 {products.map((product, index) => (
//                                     <Product_item product={product} key={index} />
//                                 ))}
//                             </div>
//                         ) : (
//                             <div className="product-list">
//                                 {products.map((product, index) => (
//                                     <Product_list product={product} key={index} />
//                                 ))}
//                             </div>
//                         )}


//                     </div>
//                     <div className="row">
//                         <Stack spacing={3}>
//                             <Pagination count={end_page} page={page} onChange={ChangePage} />
//                         </Stack>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }
// export default ProductCategory;
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import categoryservice from "../../../services/CategoryService";
import ListBrand from "../../components/frontend/ListBrand";
import Product_item from "../../components/frontend/product_item1";
import StoreProductsService from "../../../services/StoreProductsService";
import ListCategory from "../../components/frontend/ListCategory";
// import { Checkbox, FormControlLabel, Pagination, Stack } from "@mui/material";
import Product_list from "../../components/frontend/product_list";
import { Alert, Backdrop, Box, Button, Card, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Menu, MenuItem, Pagination, Radio, RadioGroup, Snackbar, Stack } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

function ProductCategory() {
    const { slug } = useParams();
    const [page, setPage] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    const [end_page, setEndPage] = React.useState(1);
    const [OneCategoryInfo, setOneCategoryInfo] = useState([]);
    const [BrandAll, setBrandAll] = useState([]);
    const [products, setProducts] = useState([]);
    const [productsbrand, setProductsBrand] = useState([]);

    const [Filter, setFilter] = useState(-1);
    const [FilterByBrand, setFilterByBrand] = useState([]);
    const [FilterByPrice, setFilterByPrice] = useState([]);

    const [viewMode, setViewMode] = useState("grid");

    try {
        useEffect(function () {
            (async function () {
                const products_data = await StoreProductsService.ProductByCategory_filter(8, page, slug, Filter, { "brand_id": FilterByBrand, "min_max_price": FilterByPrice });
                if (products_data.data.success === true) {
                    setProducts(products_data.data.ProductsByCategory);
                    setProductsBrand(products_data.data.ProductsByBrand)
                    setEndPage(products_data.data.end_page);
                    setOneCategoryInfo(products_data.data.OneProductByCategory);
                    setBrandAll(products_data.data.brand_all);
                } else {

                }

            })();
        }, [slug, page, Filter, FilterByBrand, FilterByPrice]);
    } catch (e) {
        console.error(e);
    }
    const [Filter_value, setFilter_value] = React.useState('new');

    const FilterChange = (event) => {
        setFilter_value(event.target.value);
        setFilter(event.target.value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChange = async (event) => {
        if (event.target.checked === true) {

            if (await FilterByBrand.filter((item) => item === event.target.value).length > 0) {

            } else {
                setFilterByBrand([...FilterByBrand, event.target.value]);
            }

        } else if (event.target.checked === false) {
            if (await FilterByBrand.filter((item) => item === event.target.value).length > 0) {
                const new_arr = await FilterByBrand.filter(item => item !== event.target.value);
                await setFilterByBrand(new_arr);
            } else {

            }
        }

    };
    const [min_price, set_min_price] = useState(0);
    const [max_price, set_max_price] = useState(0);

    const FilterByPriceChange = () => {

        setFilterByPrice([min_price, max_price]);
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [openAlert, setOpenAlert] = useState(false);
    const [txtAlert, setTxtAlert] = useState('');
    const [severity_value, setSeverity_value] = useState('');

    const Dis_Alert = (input_txtAlert, input_severity) => {
        setTxtAlert(input_txtAlert);
        setSeverity_value(input_severity);
        setOpenAlert(true);
    };

    const Dis_AlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };


    const handleListView = () => {
        setViewMode("list");
    };

    const handleGridView = () => {
        setViewMode("grid");
    };

    return (
        <div class="product-container">

            <div class="container">

                <div class="sidebar  has-scrollbar" >
                    <ListCategory />
                    <ListBrand />

                </div>
                <div class="product-box">
                <Stack direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}
                        boxShadow={10}
                        borderRadius={3}
                        sx={{ backgroundColor: 'Window' }}>

                        <FormControl>
                            <FormLabel id="demo-controlled-radio-buttons-group">Filter by</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={Filter_value}
                                onChange={FilterChange}

                            >
                                <FormControlLabel value="new" control={<Radio />} label="Mới nhất" />
                                {/* <FormControlLabel value="sale" control={<Radio />} label="Giảm giá" />
                                <FormControlLabel value="bestsaller" control={<Radio />} label="Bán chạy" /> */}
                            </RadioGroup>
                        </FormControl>


                        <Button
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Thương Hiệu
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >

                            <Box sx={{ display: 'flex' }}>
                                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                                    <FormLabel component="legend">Assign responsibility</FormLabel>
                                    <FormGroup>
                                        {BrandAll.map((brand, index) => {
                                            return (
                                                <FormControlLabel
                                                    key={index}
                                                    control={
                                                        <Checkbox onChange={handleChange} name={brand.brand_name} value={brand.brand_id} />
                                                    }
                                                    label={brand.brand_name}
                                                />
                                            );
                                        })}
                                    </FormGroup>
                                    <FormHelperText>Be careful</FormHelperText>
                                </FormControl>

                            </Box>

                        </Menu>

                        <li class="list-inline-item ">
                            <div class="form-inline d-flex  justify-content-center align-items-center">
                                <label class="me-2">Giá bán</label>
                                <input class="form-control form-control-sm" placeholder="Min" type="number" value={min_price} onChange={(e) => set_min_price(e.target.value)} />
                                <span class="px-2"> - </span>
                                <input class="form-control form-control-sm" placeholder="Max" type="number" value={max_price} onChange={(e) => set_max_price(e.target.value)} />
                                <button type="submit" class="btn btn-sm btn-light ms-2" onClick={() => FilterByPriceChange()}>Ok</button>
                            </div>
                        </li>

                    </Stack>
                    <div class="product-main">
                        <div id="btnContainer" className="mb-3">
                            <button className={`btn${viewMode === "list" ? " active" : ""}`} onClick={handleListView}>
                                <i className="fa fa-bars"></i> List
                            </button>
                            <button className={`btn${viewMode === "grid" ? " active" : ""}`} onClick={handleGridView}>
                                <i className="fa fa-th-large"></i> Grid
                            </button>

                        </div>

                        {viewMode === "grid" ? (
                            <div className="product-grid">
                                {products.map((product, index) => (
                                    <Product_item product={product} key={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="product-list">
                                {products.map((product, index) => (
                                    <Product_list product={product} key={index} />
                                ))}
                            </div>
                        )}


                    </div>
                    <div className="row">
                        <Stack spacing={3}>
                            <Pagination count={end_page} page={page} onChange={ChangePage} />
                        </Stack>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ProductCategory;


