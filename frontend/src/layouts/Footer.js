import React, { Component } from "react"
import { Link } from "react-router-dom"
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>

            

            <div className="footer-nav">

                <div className="container">

                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">Danh mục sản phẩm</h2>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Mô hình one-pice</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Mô hình xe</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Mô hình lắp ghép</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Mô hình trang trí</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Mô hình giới hạn</a>
                        </li>

                    </ul>

                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">CHÍNH SÁCH BÁN HÀNG</h2>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Chính sách bảo mật</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Chính sách giao hàng</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Hướng dẫn mua hàng</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Chính sách mua hàng</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Chính sách đổi trả</a>
                        </li>

                    </ul>

                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">VỀ CHÚNG TÔI</h2>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Giới thiệu</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Liên hệ</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Tuyển dụng</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">About us</a>
                        </li>

                        <li className="footer-nav-item">
                            <a href="#" className="footer-nav-link">Đối tác</a>
                        </li>

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

                            <a href="tel:+607936-8058" className="footer-nav-link">0912315349</a>
                        </li>

                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>

                            <a href="mailto:example@gmail.com" className="footer-nav-link">mohinhvip@gmail.com</a>
                        </li>

                    </ul>

                    <ul className="footer-nav-list">

                        <li className="footer-nav-item">
                            <h2 className="nav-title">Follow Us</h2>
                        </li>

                        <li>
                            <ul className="social-link">

                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>

                                <li className="footer-nav-item">
                                    <a href="#" className="footer-nav-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
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
}
export default Footer;