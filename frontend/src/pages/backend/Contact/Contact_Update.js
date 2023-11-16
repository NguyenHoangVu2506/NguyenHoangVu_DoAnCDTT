import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import contactservice from "../../../services/ContactService";

function Contact_Update() {

    const navigate = useNavigate(); // chuyen trang
    const [user_id, setUserId] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(1);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState('');
    const [replay_id, setReplay_id] = useState(0);
    // lay id
    const { id } = useParams("id");
    //lay du lieu
    useEffect(function () {
        (async function () {
            await contactservice.getById(id).then(function (result) {
                const data = result.data.contacts;
                setName(data.name);
                setUserId(data.user_id);
                setPhone(data.phone);
                setStatus(data.status);
                setEmail(data.status);
                setTitle(data.title);
                setContent(data.content);
                setReplay_id(data.replay_id);

            });
        })();
    }, [])
    //lay danh sach
    const [contact, setContact] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll().then(function (result) {
                setContact(result.data.contacts)
            });
        })();
    }, [])

    // ham cap nhat
    async function ContactEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var contact = new FormData();
        contact.append("user_id", user_id);
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("status", status);
        contact.append("content", content);
        contact.append("replay_id", replay_id);


        await contactservice.update(id,contact).then(function (res) {
            alert(res.data.message);
            navigate('/admin/contact', { replace: true });
        })

    }

    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1 class="d-inline">Chỉnh sửa liên hệ</h1>
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
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <form onSubmit={ContactEdit}>

                                    <div class="mb-3">
                                        <label>Userid(*)</label>
                                        <input type="number" name="user_id" value={user_id} onChange={(e) => setUserId(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Tên liên hệ (*)</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Phone</label>
                                        <input type="number" name="image" value={phone} onChange={(e) => setPhone(e.target.value)} class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>title</label>
                                        <input name="text" class="form-control" onChange={(e) => setTitle(e.target.value)} value={title}>

                                        </input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name">Nội dung</label>
                                        <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name">Replay_id</label>
                                        <select
                                            name="replay_id" value={replay_id} onChange={(e) => setReplay_id(e.target.value)}
                                            className="form-control">
                                            <option value="0">None</option>
                                            {contact.map(function (contact, index) {
                                                return (
                                                    <option key={index} value={contact.id}>{contact.name}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label>Trạng thái</label>
                                        <select name="status" class="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                    <div class="card-header text-center">
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-save me-1" aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>

                                </form>
                            </div>
                            <div class="col-md-3">
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Contact_Update;