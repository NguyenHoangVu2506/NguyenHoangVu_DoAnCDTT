
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import brandservice from "../../../services/BrandService";

function ListBrand() {
    const [brands, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setBrand(result.data.brands)
            });
        })();
    }, [])
    return (
        <div class="sidebar-category">
            <div class="sidebar-top">
                <h2 class="sidebar-title">Thương hiệu</h2>
            </div>
            <ul class="sidebar-menu-category-list">
                {brands.map(function (brand, index) {
                    return <Link key={index} className="text-category" to={'../thuong-hieu-san-pham/' + brand.slug}>{brand.name}</Link>;
                })}
           </ul>
        </div>
    );
}

export default ListBrand;