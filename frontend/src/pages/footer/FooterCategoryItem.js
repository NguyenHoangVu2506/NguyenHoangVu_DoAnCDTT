import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../services/CategoryService";

function FooterCategoryItem(props) {
    const rowcategory = props.category;
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getCategoryByParentId(rowcategory.id).then(function (result) {
                setCategorys(result.data.categorys);
            })
        })();
    }, []);
    // alert (categorys.length)
    if (categorys == null) {
        return (
            <div>
                <li className="footer-nav-item">
                    <Link className="footer-nav-link" to={rowcategory.link}>{rowcategory.name}</Link>
                </li>
            </div>
        );
    }
    else {
        return (
            <li className="menu-category">
                    <Link className="footer-nav-link" to={rowcategory.link}>{rowcategory.name}</Link>
                <ul class="dropdown-list">
                    {categorys.map(function (menu1, index) {
                        return (
                            <li class="dropdown-item" key={index}>
                                <Link to={menu1.link}>{menu1.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </li>

        );
    }

}

export default FooterCategoryItem;




