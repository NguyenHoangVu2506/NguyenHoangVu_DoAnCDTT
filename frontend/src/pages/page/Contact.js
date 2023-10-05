import React from "react";
function Contact(props) {
    return (


        <div className="fvc" >
                        <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">Liên hệ</li>
                    </ol>
                </div>
            </section>

            <style>.form-control</style>
            <div className="container">
                <div className="goolemap"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21535.982636425073!2d106.8367997454911!3d10.840726571926536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1694969376340!5m2!1svi!2s"
                    width="100%" height="500px"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="form_blog_comment">
                            <form method="post" action="/postcontact" id="contact" accept-charset="UTF-8">
                                <input name="FormType" type="hidden" value="contact" />
                                <input name="utf8" type="hidden" value="true" />
                                <input type="hidden" id="Token-35eaa41e683345e287314eddf5250739" name="Token" value="03AFcWeA4ZRlkLs80LiF6WazcYfFlfyzrsYgn8tk_60G137WebkKgCqPse2oqWJLtuNt-EgirNvGPwi1TEbWHwZH9BZwRx0mzc3NXYWnZM4YrPza0zO5VasI2e8stcjmEHlCfNuHTKdKgAibFNqi4d87LN6jzeyjxz1Z_M6HAZ38ZdGnoLIe9QQ7GK3EEOhWFWxFqwifmhFDFbhlgtocq5YF__GgC6qjY15jgpTfYPkjhDPTu8Bt-HL3tm-xKXzblCtzz5JneqG9-MhAlZ3RwQRl0ess1uWmhQD0f4PLty0S72uo59DU54If9iFUX3o0HtDL08n1wWUzCnuoAfU-KAL8V0p447T7xq4gBpIyVtjMwTbUPOOgQ-O5H12_XVbwLi-iLkJCZ7BSKF0DKFgoTjCdRvrgiZq9Mfs7i0ezFv4A9tej6Mnsg6OyHd3Ww83MElT54-iNd1I3IPro_DXzPxFm_2hLvOBHxH5g0-1-6eEncRZKWftZct0Sk9pseTktFR244AZeF_61X3AqjEG6fqVFQNjNr3SbNEPopzBqgTsJylNFJvbeeEP7E" />
                                <script src="https://www.google.com/recaptcha/api.js?render=6Ldtu4IUAAAAAMQzG1gCw3wFlx_GytlZyLrXcsuK"></script>
                                {/* <script>grecaptcha.ready(function() {grecaptcha.execute("6Ldtu4IUAAAAAMQzG1gCw3wFlx_GytlZyLrXcsuK", { action: "contact" }).then(function (token) { document.getElementById("Token-35eaa41e683345e287314eddf5250739").value = token });});</script> */}
                                <h4>Liên hệ với chúng tôi</h4>


                                <div className="form-group">
                                    <label for="name">Họ và tên <span className="required">*</span></label>
                                    <input id="name" name="contact[Name]" type="text" required="" value="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ Email <span className="required">*</span></label>
                                    <input id="email" name="contact[email]" className="form-control" required="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" type="email" value="" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Viết bình luận <span className="required">*</span></label>
                                    <textarea id="message" name="contact[Body]" required="" className="form-control" rows="7"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="banner-btn">Gửi liên hệ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h4 className="title_h4"></h4>
                        <a className="logo" href="">

                            <img alt="Mendover" src={require("../../assets/images/logo/logo03.png")} />

                        </a>
                        <p className="name_commpany">Chúng tôi cam đoan sẽ mang đến trải nghiệm tốt nhất cho khách hàng.</p>
                        <ul className="cnt_contact">

                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="location-outline"></ion-icon>
                            </div>

                            <address >
                                200/12/9 Dương Đình Hội Phước Long B Q9 TP.HCM
                            </address>
                        </li>
                            
                            <li className="footer-nav-item flex">
                                <div className="icon-box">
                                    <ion-icon name="call-outline"></ion-icon>
                                </div>
                                <a href="">19001999</a>
                            </li>
                            
                            <li className="footer-nav-item flex">
                                <div className="icon-box">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </div>
                                <a href="">support@model.vn</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <style>
                .google-map
                .google-map .map
            </style>
        </div>
    );
}
export default Contact;