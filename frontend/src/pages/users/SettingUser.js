import { Link } from "react-router-dom";

const SettingUser = () => (
    <div classNameName="container">
            <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li class="breadcrumb-item">Thông tin tài khoản</li>
                    </ol>
                </div>
            </section>
        {/*-- ========================= SECTION PAGETOP END// ========================= -*/}

        {/*-- ========================= SECTION CONTENT ========================= -*/}
        <section className="section-content padding-y">
            <div className="container">

                <div className="row">
                    <main className="col-md-12">

                        <div className="card">
                            <div className="card-body">
                                <form className="row">
                                    <div className="col-md-9">
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <label>Họ và tên</label>
                                                <input type="text" className="form-control" />
                                            </div> {/*-- form-group end.// -*/}
                                            <div className="col form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control"/>
                                            </div> {/*-- form-group end.// -*/}
                                        </div> {/*-- form-row.// -*/}

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Mật khẩu</label>
                                                <input type="password" className="form-control"/>

                                            </div> {/*-- form-group end.// -*/}
                                            <div className="form-group col-md-6">
                                                <label>Nhập lại mật khẩu</label>
                                                <input type="password" className="form-control" />
                                            </div> {/*-- form-group end.// -*/}
                                        </div> {/*-- form-row.// -*/}

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Địa chỉ</label>
                                                <textarea type="text" className="form-control"  />
                                            </div> {/*-- form-group end.// -*/}
                                            <div className="form-group col-md-6">
                                                <label>Phone</label>
                                                <input type="text" className="form-control" />
                                            </div> {/*-- form-group end.// -*/}
                                        </div> {/*-- form-row.// -*/}
                                        <button className="btn btn-light">Lưu</button>
                                        <br /><br /><br /><br /><br /><br />

                                    </div> {/*-- col.// -*/}
                                    <div className="col-md">
                                        <img src={require("../../assets/images/products/product02.webp")} className="img-md rounded-circle border" />
                                    </div>  {/*-- col.// -*/}
                                </form>
                            </div> {/*-- card-body.// -*/}
                        </div> {/*-- card .// -*/}



                    </main> {/*-- col.// -*/}
                </div>

            </div> {/*-- container .//  -*/}
        </section>
        {/*-- ========================= SECTION CONTENT END// ========================= -*/}
    </div>
);
export default SettingUser;