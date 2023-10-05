import React, { Component, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import menuservice from "../services/MenuService";
import FooterItem from "../pages/footer/FooterItem";
import categoryservice from "../services/CategoryService";
import FooterCategoryItem from "../pages/footer/FooterCategoryItem";
function Footer() {
    // const [menus, setMenus] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await menuservice.getByParentId('mainmenu', 0).then(function (result) {
    //             setMenus(result.data.menus);
    //         })
    //     })();
    // }, []);
    // const [categorys, setCategorys] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await categoryservice.getCategoryByParentId(0).then(function (result) {
    //             setCategorys(result.data.categorys);
    //         })
    //     })();
    // }, []);
        return (
            <footer>

            

            <div className="footer-nav">

                <div className="container">

                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">Danh mục sản phẩm</h2>
                        </li>
                        {/* {categorys.map(function (category, index) {
                                            return (
                                            <FooterCategoryItem category={category} key={index} />
                                            );
                                        })} */}
                        <li className="footer-nav-item">
                            <Link to={"/mo-hinh-gundam"} className="footer-nav-link">Mô hình Gundam</Link>
                        </li>

                        <li className="footer-nav-item">
                            <Link to={"/mo-hinh-anime"} className="footer-nav-link">Mô hình Anime</Link>
                        </li>

                        <li className="footer-nav-item">
                            <Link to={"/mo-hinh-lap-rap"} className="footer-nav-link">Mô hình lắp ráp</Link>
                        </li>

                        <li className="footer-nav-item">
                            <Link to={"/mo-hinh-trang-tri"} className="footer-nav-link">Mô hình trang trí</Link>
                        </li>

                        {/* <li className="footer-nav-item">
                            <Link to={""} className="footer-nav-link">Mô hình giới hạn</Link>
                        </li> */}

                    </ul>

                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">CHÍNH SÁCH BÁN HÀNG</h2>
                        </li>

                        <li className="footer-nav-item">
                            <Link to={"/chinh-sach-bao-mat"} className="footer-nav-link">Chính sách bảo mật</Link>
                        </li>

                        <li className="footer-nav-item">
                            <Link to={"/chinh-sach-giao-hang"} className="footer-nav-link">Chính sách giao hàng</Link>
                        </li>

                        <li className="footer-nav-item">
                            <Link to={"/huong-dan-mua-hang"} className="footer-nav-link">Hướng dẫn mua hàng</Link>
                        </li>

                        <li className="footer-nav-item">
                            <Link to={"/chinh-sach-mua-hang"} className="footer-nav-link">Chính sách mua hàng</Link>
                        </li>

                        <li className="footer-nav-item">
                            <Link to={"/chinh-sach-doi-tra"} className="footer-nav-link">Chính sách đổi trả</Link>
                        </li>

                    </ul>

                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">VỀ CHÚNG TÔI</h2>
                        </li>
                        <Link className="footer-nav-link" to={"/"}>Trang chủ</Link>
                        <Link className="footer-nav-link" to={"/tat-ca-san-pham"}>Tất cả sản phẩm</Link>
                        <Link className="footer-nav-link" to={"/thuong-hieu"}>Thương hiệu</Link>
                        <Link className="footer-nav-link" to={"/gioi-thieu"}>Giới thiệu</Link>
                        <Link className="footer-nav-link" to={"/tin-tuc"}>Tin tức</Link>
                        <Link className="footer-nav-link" to={"/lien-he"}>Liên hệ</Link>


                        {/* {menus.map(function (menu, index) {
                    return (<FooterItem menu={menu} key={index} />);
                })} */}
                    </ul>
                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">Contact</h2>
                        </li>

                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>

                            <address className="content">
                                200/12/9 Dương Đình Hội Phước Long B Q9 TP.HCM
                            </address>
                        </li>

                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="call-outline"></ion-icon>
                            </div>

                            <Link href="tel:+607936-8058" className="footer-nav-link">0912315349</Link>
                        </li>

                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>

                            <Link href="mailto:example@gmail.com" className="footer-nav-link">mohinhvip@gmail.com</Link>
                        </li>

                    </ul>

                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">Follow Us</h2>
                        </li>

                        <li>
                            <ul className="social-link">

                                <li className="footer-nav-item">
                                    <Link to={""} className="footer-nav-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </Link>
                                </li>

                                <li className="footer-nav-item">
                                    <Link to={""} className="footer-nav-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </Link>
                                </li>

                                <li className="footer-nav-item">
                                    <Link to={""} className="footer-nav-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </Link>
                                </li>

                                <li className="footer-nav-item">
                                    <Link to={""} className="footer-nav-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                    </ul>

                </div>

            </div>

            <div className="footer-bottom">

                <div className="container">
                
                
                    <img src={require("../assets/images/payment.png")} alt="payment method" className="payment-img"/>

                        

                </div>

            </div>

        </footer>
           
        );
    }

export default Footer;