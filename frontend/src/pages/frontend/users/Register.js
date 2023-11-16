import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../../assets/css/bootstrap.css';
import userservice from "../../../services/UserService";
function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function AddUser(event) {
        event.preventDefault();
        const user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("username", "user");
        user.append("gender", "nam");
        user.append("address", "nam");

        user.append("password", password);
        user.append("roles", "user");
        user.append("image", "avt.jpg");
        user.append("status", 1);
        await userservice.AddUser(user).then(function (result) {
            if (result.data.success === true) {
                alert(result.data.message);
                navigate('/dang-nhap', { replace: true });
            }
            else {
                alert(result.data.message);
                navigate('/pages/register', { replace: true });
            }

        })
    }
    return (
        <div className="container">
            <div class="card mx-auto" style={{ maxWidth: "620px", margintop: "40px" }}>
                <article class="card-body">
                    <header class="mb-4"><h4 class="card-title ">Đăng ký tài khoản</h4></header>
                    <form onSubmit={AddUser}>
                        <div class="form-group">

                            <label>Họ tên</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="username" id="username" class="form-control" placeholder="username" />

                        </div> {/*<!-- form-row end.// -->*/}
                        <div class="form-group">
                            <label>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" class="form-control" placeholder="email" />
                            <small class="form-text text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</small>
                        </div> 
                        <div class="form-group">

                            <label>Số điện thoại</label>
                            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" name="phone" id="phone"class="form-control" placeholder="Nhập số điện thoại..." />

                        </div> 
                        <div class="form-group">
                            <label class="custom-control custom-radio custom-control-inline">
                                <input class="custom-control-input" type="radio" name="gender" value="option1" />
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
                                <input class="form-control"  onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="Mật khẩu..."/>
                            </div> {/*<!-- form-group end.// -->*/}
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block"> Đăng ký  </button>
                        </div> {/*<!-- form-group// -->*/}
                        <div class="form-group">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" />
                                <div class="custom-control-label"> Tôi đồng ý với các điều khoản và chính sách bảo mật  </div> </label>
                        </div> {/*<!-- form-group end.// -->*/}
                    </form>
                </article>{/*<!-- card-body.// -->*/}
            </div> {/*<!-- card .// -->*/}
            <p class="text-center mt-4">Bạn đã có tài khoản <a href="/dang-nhap">Đăng nhập</a></p>
        </div>
    )
}
export default Register