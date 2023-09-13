import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/bootstrap.css'; 
function Register(props) {
    return (
        <div className="container">
            <div class="card mx-auto" style={{maxWidth:"620px", margintop:"40px"}}>
                <article class="card-body">
                    <header class="mb-4"><h4 class="card-title ">Đăng ký tài khoản</h4></header>
                    <form>
                        <div class="form-row">
                            <div class="col form-group">
                                <label>Họ</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div> {/*<!-- form-group end.// -->*/}
                            <div class="col form-group">
                                <label>Tên</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div> {/*<!-- form-group end.// -->*/}
                        </div> {/*<!-- form-row end.// -->*/}
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" placeholder="" />
                            <small class="form-text text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</small>
                        </div> {/*<!-- form-group end.// -->*/}
                        <div class="form-group">
                            <label class="custom-control custom-radio custom-control-inline">
                                <input class="custom-control-input"  type="radio" name="gender" value="option1" />
                                <span class="custom-control-label"> Nữ </span>
                            </label>
                            <label class="custom-control custom-radio custom-control-inline">
                                <input class="custom-control-input" type="radio" name="gender" value="option2" />
                                <span class="custom-control-label"> Nam </span>
                            </label>
                        </div> {/*<!-- form-group end.// -->*/}
                        
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Mật khẩu</label>
                                <input class="form-control" type="password" />
                            </div> {/*<!-- form-group end.// -->*/}
                            <div class="form-group col-md-6">
                                <label>Nhập lại mật khẩu</label>
                                <input class="form-control" type="password" />
                            </div> {/*<!-- form-group end.// -->*/}
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block"> Đăng ký  </button>
                        </div> {/*<!-- form-group// -->*/}
                        <div class="form-group">
                            <label class="custom-control custom-checkbox">
                                 <input type="checkbox" class="custom-control-input"  /> 
                                 <div class="custom-control-label"> Tôi đồng ý với các điều khoản và chính sách bảo mật  </div> </label>
                        </div> {/*<!-- form-group end.// -->*/}
                    </form>
                </article>{/*<!-- card-body.// -->*/}
            </div> {/*<!-- card .// -->*/}
            <p class="text-center mt-4">Bạn đã có tài khoản <a href="">Đăng nhập</a></p>
        </div>
    )
}
export default Register