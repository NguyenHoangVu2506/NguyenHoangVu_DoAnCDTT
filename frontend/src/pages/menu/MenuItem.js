import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuservice from "../../services/MenuService";

function MenuItem(props) {
    const rowmenu = props.menu;
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getByParentId('mainmenu', rowmenu.id).then(function (result) {
                setMenus(result.data.menus);
            })
        })();
    }, []);

    // alert(menus.length)
    if (menus ==null) {
        return (
            <div>
                <li className="menu-category">
                    <Link href="/" className="menu-title" to={rowmenu.link}>{rowmenu.name}</Link>
                </li>
            </div>
        );
    }
    else {
        return (
            <li className="menu-category">
                <Link className="menu-title" to={rowmenu.link}>{rowmenu.name}</Link>
                <ul class="dropdown-list">
                    {menus.map(function (menu1, index) {
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

export default MenuItem;




