import React from "react";
function Contact(props) {
    return (


        <section className="contact">
                   <div className="row">
                        <div className="col-md-7 col-lg-4 ">
                            <div className="product-item border">
                            <h2 className="text-center pt-4">Mọi nhu cầu xin quý khách liên hệ </h2>
                                <h4>Điện thoại 24/24</h4>
                                <p> + 1900.187.835
                                    <br></br>
                                    + 0912.345.678
                                </p>
                                <h4>Địa chỉ</h4>
                                <p>
                                    + Cơ sở 1: Đường 22 Phước Long B Q9
                                    <br></br>
                                    + Cơ sở 2: An Bình Dĩ An Bình Dương
                                </p>
                                <h4>Email</h4> <p>  + Vu@gmail.com
                                    <br></br>
                                    + abc@gmai.com
                                </p>
                                <div className="goolemap">
                                    <p>Địa chỉ cở sở 1</p>
                                    <iframe
                                        className="map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31351.447944597792!2d106.76370870910648!3d10.816592963324657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2sHo%20Chi%20Minh%20City%20College%20of%20Industry%20and%20Trade!5e0!3m2!1sen!2s!4v1684841846289!5m2!1sen!2s"
                                        width="450" height="250" allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <div className="goolemap">
                                    <p>Địa chỉ cở sở 2</p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0314854119665!2d106.74674215993448!3d10.885209757134383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d86d7aaa680b%3A0x9c00b5afc2e13c42!2zVHJpdW1waCBJbnRlcm5hdGlvbmFsLCBExKkgQW4sIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1685091750477!5m2!1svi!2s"
                                        width="450" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div> 
                        
                         <div className="col-md-4 col-lg-5 ">
                            <h4 >Điền đầy đủ thông tin để liên hệ với chúng tôi</h4>
                            <form>
                                <div className="mb-7">
                                    <label for="fullname" className="form-label">
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullname"
                                        aria-describedby="fullname"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="phonenumber" className="form-label">
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id=""
                                        aria-describedby="phone"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="address" className="form-label">
                                        Địa chỉ
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        aria-describedby="address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="Email1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="Email"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="Password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Gửi
                                </button>

                            </form>
                            <p className="text-center"> Chúng tôi sẽ phản hồi thông tin của bạn trong vòng 24h</p>
                        </div>   

                    </div>
                

            
            
        </section>
    );
}
export default Contact;