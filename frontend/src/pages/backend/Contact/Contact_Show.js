import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import contactservice from "../../../services/ContactService";
import userservice from "../../../services/UserService";
function Contact_Show() {
    const [user, setUser] = useState([]);

    const { id } = useParams();
    const [contact, setContact] = useState([]);
    let status = "Chưa xuất bản";
    useEffect(() => {
        (async () => {
            await contactservice.getById(id).then((res) => {
                setContact(res.data.contacts);
            })
        })()
    }, [])
    useEffect(function () {
        (async function () {
            await userservice.getById(id).then(function (result) {
                setUser(result.data.users)
            });
        })();
    }, [])
    if (contact.status == 1) {
        status = "Xuất bản"
    }
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chi tiết liên hệ</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card">
                    <div class="card-header text-right">
                        <Link to="/admin/contact" class="btn btn-sm btn-info">
                            <i class="fa fa-reply me-1" aria-hidden="true"></i>
                            Quay lại
                        </Link>
                    </div>
                    <div class="card-body p-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: "30%" }}>Tên trường</th>
                                    <th>Giá trị</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Tên KH</th>
                                    <td >{contact.user_id}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Tên liên hệ</th>
                                    <td>{contact.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{contact.email}</td>
                                </tr>

                                <tr>
                                    <th>Phone</th>
                                    <td>{contact.phone}</td>
                                </tr>
                                <tr>
                                    <th>Tiêu đề</th>
                                    <td >{contact.title}</td>
                                </tr>
                                <tr>
                                    <th>Nội dung</th>
                                    <td>{contact.content}</td>
                                </tr>
                                <tr>
                                    <th>Replay_id</th>
                                    <td>{contact.replay_id}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{contact.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact_Show;