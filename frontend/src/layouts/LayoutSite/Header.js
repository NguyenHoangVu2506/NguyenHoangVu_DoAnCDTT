import React, { Component, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import menuservice from "../../services/MenuService";
import MenuItem from "../../pages/frontend/menu/MenuItem";
import { useCart } from "react-use-cart";

function Header() {
    const [key, setKey] = useState("");
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getByParentId('mainmenu', 0).then(function (result) {
                setMenus(result.data.menus);
            })
        })();
    }, []);
    const {
        isEmpty,
        totalItems,
    } = useCart();
    return (

        <header>
            <div className="header-main">

                <div className="container">

                    <Link to="#" className="header-logo">

                        <img src={require("../../assets/images/logo/logo01.png")} alt="Anon's logo" width={200} height={50} />



                    </Link>

                    <div className="header-search-container">

                        {/* <input type="search" name="search" className="search-field" placeholder="Tìm kiếm" />

                        <button className="search-btn">
                            <ion-icon name="search-outline"></ion-icon>
                        </button> */}
                        <form action={"/pages/tim-kiem/" + key} method="">

                            <input onChange={(e) => setKey(e.target.value)} type="text" value={key} className="search-field" placeholder="Tìm kiếm sản phẩm..." />

                            <button className="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </form>

                    </div>

                    <div className="header-user-actions">
                        <div className="widget-header">
                            <a href="/gio-hang" className="widget-view">
                                <div className="icon-area">
                                    <i className="fa fa-shopping-cart"></i>
                                </div>
                                {!isEmpty && <span className="count">{totalItems}</span>}

                            </a>
                        </div>
                        {/* <button className="action-btn" >
                                <ion-icon name="bag-handle-outline" ></ion-icon>
                                <span className="count">0</span>
                            </button> */}

                        <div className="dropdown">
                            <div className="widget-header">
                                <a href="#" className="widget-view">
                                    <div className="icon-area">
                                        <i className="fa fa-user"></i>
                                    </div>
                                </a>
                            </div>

                            <div className="dropdown-content">
                                <a className="footer-nav-link" href="/dang-nhap">Đăng nhập</a>
                                <a className="footer-nav-link" href="/dang-ky">Tạo tài khoản</a>
                                <a className="footer-nav-link" href="/tai-khoan">Thông tin tài khoản</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <nav className="desktop-navigation-menu">
                <div className="container">
                    <ul className="desktop-menu-category-list">

                        {menus.map(function (menu, index) {
                            return (<MenuItem menu={menu} key={menu.id} />);
                        })}
                    </ul>

                </div>
            </nav>




        </header>

    );
}

export default Header;