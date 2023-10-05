import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../services/CategoryService";

function CategoryItem(props) {
    const rowmenu = props.category;
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getCategoryByParentId(rowmenu.id).then(function (result) {
                setCategorys(result.data.categorys);
            })
        })();
    }, []);

    if (categorys == null) {
        return (
            <h7 class="title">
                <a href="#" class="dropdown-toggle" data-toggle="collapse" > {rowmenu.name}</a>
            </h7>
        );
    }
    else {
        return (
            <article class="filter-group">

                <h7 class="title">
                    <a href="#" class="dropdown-toggle" data-toggle="collapse"> {rowmenu.name}</a>
                </h7>
                <div class="filter-content collapse show" >
                    <div class="inner">
                        <ul class="list-menu">
                            {categorys.map(function (cat1, index) {
                                return <li><a href="#">{cat1.name}</a></li>
                            })}

                            {/* <li><a href="#">Gundam Bandai</a></li>
                        <li><a href="#">HG Gundam ( High Grade )  </a></li> */}
                        </ul>
                    </div>{/* <!-- inner.// -->*/}
                </div>

                </article>
        );
    }

}

export default CategoryItem;




