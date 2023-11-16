{/* <div className="product-container">
    <section className="py-3 bg-light">
        <div className="container">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">Sản phẩm</li>
                <li className="breadcrumb-item">Tất cả sản phẩm</li>
            </ol>
        </div>
    </section>
    <div class="row">
        <main class="col-md-10">
            <div className="card card-product-list">
                {AllProducts.map((product, index) => (
                    <Product_list product={product} key={index} />
                ))}
            </div>
            <div className="row">
                <Stack spacing={3}>
                    <Pagination count={end_page} page={page} onChange={PageChange} />
                </Stack>
            </div>
        </main>
    </div>
</div> */}
        <div className="product-container">
            <section className="py-3 bg-light">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">Sản phẩm</li>
                        <li className="breadcrumb-item">Tất cả sản phẩm</li>
                    </ol>
                </div>
            </section>

            <div class="row">
                <aside class="col-md-2">

                    <article class="filter-group">
                        <h6 class="title">
                            <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_1">	 Product type </a>
                        </h6>
                        <div class="filter-content collapse show" id="collapse_1">
                            <div class="inner">
                                <ul class="list-menu">
                                    <li><a href="#">Shorts  </a></li>
                                    <li><a href="#">Trousers </a></li>
                                    <li><a href="#">Sweaters  </a></li>
                                    <li><a href="#">Clothes  </a></li>
                                    <li><a href="#">Home items </a></li>
                                    <li><a href="#">Jackats</a></li>
                                    <li><a href="#">Somethings </a></li>
                                </ul>
                            </div>{/* <!-- inner.// -->*/}
                        </div>
                    </article> {/*<!-- filter-group  .// -->*/}
                    <article class="filter-group">
                        <h6 class="title">
                            <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_2"> Brands </a>
                        </h6>
                        <div class="filter-content collapse show" id="collapse_2">
                            <div class="inner">
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" checked="" class="custom-control-input" />
                                    <div class="custom-control-label">Adidas
                                        <b class="badge badge-pill badge-light float-right">120</b>  </div>
                                </label>
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" checked="" class="custom-control-input" />
                                    <div class="custom-control-label">Nike
                                        <b class="badge badge-pill badge-light float-right">15</b>  </div>
                                </label>
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" checked="" class="custom-control-input" />
                                    <div class="custom-control-label">The Noth Face
                                        <b class="badge badge-pill badge-light float-right">35</b> </div>
                                </label>
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" checked="" class="custom-control-input" />
                                    <div class="custom-control-label">The cat
                                        <b class="badge badge-pill badge-light float-right">89</b> </div>
                                </label>
                                <label class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" />
                                    <div class="custom-control-label">Honda
                                        <b class="badge badge-pill badge-light float-right">30</b>  </div>
                                </label>
                            </div> {/*<!-- inner.// -->*/}
                        </div>
                    </article>{/* <!-- filter-group .// -->*/}
                    <article class="filter-group">
                        <h6 class=" ">
                            <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_3"> Price range </a>
                        </h6>
                        <div class="filter-content collapse show" id="collapse_3">
                            <div class="inner">
                                <input type="range" class="custom-range" min="0" max="100" name="" />
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Min</label>
                                        <input class="form-control" placeholder="$0" type="number" />
                                    </div>
                                    <div class="form-group text-right col-md-6">
                                        <label>Max</label>
                                        <input class="form-control" placeholder="$1,0000" type="number" />
                                    </div>
                                </div>{/* <!-- form-row.// -->*/}
                                <button class="btn btn-block btn-primary">Apply</button>
                            </div> {/*<!-- inner.// -->*/}
                        </div>
                    </article> {/*<!-- filter-group .// -->*/}
                    <article class="filter-group">
                        <h6 class="title">
                            <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_4"> Sizes </a>
                        </h6>
                        <div class="filter-content collapse show" id="collapse_4">
                            <div class="inner">
                                <label class="checkbox-btn">
                                    <input type="checkbox" />
                                    <span class="btn btn-light"> XS </span>
                                </label>

                                <label class="checkbox-btn">
                                    <input type="checkbox" />
                                    <span class="btn btn-light"> SM </span>
                                </label>

                                <label class="checkbox-btn">
                                    <input type="checkbox" />
                                    <span class="btn btn-light"> LG </span>
                                </label>

                                <label class="checkbox-btn">
                                    <input type="checkbox" />
                                    <span class="btn btn-light"> XXL </span>
                                </label>
                            </div> {/*<!-- inner.// -->*/}
                        </div>
                    </article> {/*<!-- filter-group .// -->*/}
                    <article class="filter-group">
                        <h6 class="title">
                            <a href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#collapse_5"> Condition </a>
                        </h6>
                        <div class="filter-content collapse show" id="collapse_5">
                            <div class="inner">
                                <label class="custom-control custom-radio">
                                    <input type="radio" name="myfilter_radio" checked="" class="custom-control-input" />
                                    <div class="custom-control-label">Any condition</div>
                                </label>

                                <label class="custom-control custom-radio">
                                    <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                    <div class="custom-control-label">Brand new </div>
                                </label>

                                <label class="custom-control custom-radio">
                                    <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                    <div class="custom-control-label">Used items</div>
                                </label>

                                <label class="custom-control custom-radio">
                                    <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                    <div class="custom-control-label">Very old</div>
                                </label>
                            </div>{/* <!-- inner.// -->*/}
                        </div>
                    </article>{/* <!-- filter-group .// -->*/}

                </aside> {/*<!-- col.// -->*/}

                <main class="col-md-10">


                    <header class="mb-3">
                        <div class="form-inline">
                            <strong class="mr-md-auto">{product_qty} sản phẩm </strong>
                            <strong class="mr-md-auto text-center">Tất cả sản phẩm </strong>
                            <select class="mr-2 form-control">
                                <option>Latest items</option>
                                <option>Trending</option>
                                <option>Most Popular</option>
                                <option>Cheapest</option>
                            </select>
                            <div class="btn-group">
                                <a href="/listing-grid" class="btn btn-light" data-toggle="tooltip" title="List view">
                                    <i class="fa fa-bars"></i></a>
                                <a href="/listing-large" class="btn btn-light active" data-toggle="tooltip" title="Grid view">
                                    <i class="fa fa-th"></i></a>
                            </div>
                        </div>
                    </header>{/*<!-- sect-heading -->*/}

                    {AllProducts.map((product, index) => (

                        <div class="card card-product-list">
                            {product.sale_id ? (
                                <p className="showcase-badge angle pink">sale</p>
                            ) : (
                                <p className="showcase-badge angle black">mới</p>
                            )}
                            <div class="row no-gutters">
                                <aside class="col-md-3">
                                    <a href="#" class="img-wrap">

                                        <img src={require("../../../assets/images/products/product01.webp")} height={200} />
                                    </a>
                                </aside> {/*<!-- col.// -->*/}
                                <div class="col-md-6">
                                    <div class="info-main">
                                        <a href="#" class="h5 title">{product.product_name}</a>
                                        <div class="rating-wrap mb-2">
                                            <ul class="rating-stars">
                                                <Rating size="large" readOnly value={product.rating_score || null} />
                                            </ul>

                                        </div> {/*<!-- rating-wrap.// -->*/}

                                        <p>{product.product_detail}</p>

                                    </div>{/* <!-- info-main.// -->*/}
                                </div>{/* <!-- col.// -->*/}
                                <aside class="col-sm-3">
                                    <div class="info-aside">
                                        <div class="price-wrap">
                                            <span class="h5 price">
                                                {product.price_sale ? <p class="price">{accounting.formatNumber(product.price_sale, 0, ".", ",")}<span >đ</span></p>
                                                    : <p class="price">{accounting.formatNumber(product.listed_price, 0, ".", ",")} <span class="">đ</span></p>
                                                }
                                                {product.price_sale ? <del class="text-muted" >{accounting.formatNumber(product.listed_price, 0, ".", ",")} <span class="text-muted">đ</span></del>
                                                    : <del></del>}

                                            </span>

                                        </div> {/*<!-- price-wrap.// -->*/}
                                        <small class="text-warning">Free shipping</small>

                                        <p class="text-muted mt-3">{product.brand_name}</p>
                                        <p class="mt-3">
                                            <a href="#" class="btn btn-outline-primary"> <i class="fa fa-cart-plus"></i> Add Cart</a>
                                            <a href="#" class="btn btn-light"><i class="fa fa-eye"></i> Detail</a>
                                        </p>
                                    </div>
                                </aside>
                            </div>
                        </div>


                    ))}
                    <div className="row text-center">
                        <Stack spacing={3}>
                            <Pagination count={end_page} page={page} onChange={PageChange} />
                        </Stack>
                    </div>
                </main>


            </div>
        </div>

