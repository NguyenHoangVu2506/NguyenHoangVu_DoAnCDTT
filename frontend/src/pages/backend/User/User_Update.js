import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import userservice from "../../../services/UserService";

function User_Update() {

    const navigate = useNavigate(); // chuyen trang
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState();
    const [set_password, setSetPassword] = useState();
    const [username, setUserName] = useState('');
    const [gender, setGender] = useState('');

    const [status, setStatus] = useState(2);


    
    // lay id
    const { id } = useParams("id");
    //lay du lieu
    useEffect(function () {
        (async function () {
            await userservice.getById(id).then(function (result) {
                const data = result.data.user;
                setName(data.name);
                setEmail(data.email);
                setStatus(data.status);
                setPhone(data.phone);
                setAddress(data.address);
                setPassword(data.password);
                setSetPassword(data.password);
                setUserName(data.username);
                setGender(data.gender);


            });
        })();
    }, [])
    // ham cap nhat
    async function userEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("address", address);
        user.append("username", username);
        user.append("roles", 'admin');
        user.append("password", password);
        user.append("gender", gender);

        user.append("status", status);
        if (image.files.length === 0) {
            user.append("image", "")
        }
        else {
            user.append("image", image.files[0]);
        }
        await userservice.update(id,user).then(function (res) {
            alert(res.data.message);
            navigate('/admin/user', { replace: true });
        })

    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Cập nhật thành viên</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
            <form onSubmit={userEdit}>
                    <div className="card">
                        <div className="card-header text-right">
                            <Link to="/admin/user" className="btn btn-sm btn-info me-2">
                                <i className="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
                            </Link>
                            <button className="btn btn-sm btn-success" name="CHANGEADD">
                                <i className="fa fa-save me-1" aria-hidden="true"></i>
                                Lưu
                            </button>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Họ tên (*)</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Giới tính</label>
                                        <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" name="slug" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Điện thoại</label>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="slug" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="slug" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Tên đăng nhập</label>
                                        <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" name="slug" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Mật khẩu</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Xác nhận mật khẩu</label>
                                        <input value={set_password} onChange={(e) => setSetPassword(e.target.value)} type="password" name="password_re" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label>Địa chỉ (*)</label>
                                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="name" className="form-control" />
                                    </div>

                                    <div className="mb-3">
                                        <label>Hình đại diện</label>
                                        <input type="file" name="image" id="image" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Trạng thái</label>
                                        <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" className="form-control">
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

            </section>
        </div>
    );
}

export default User_Update;