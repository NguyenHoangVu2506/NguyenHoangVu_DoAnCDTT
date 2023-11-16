import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import contactservice from "../../../services/ContactService";
import userservice from "../../../services/UserService";
function Contact_List() {
    const navigate = useNavigate();
    const [count_trash, setCountTrash] = useState(0);

    const [contact, setContact] = useState([]);
    const [user, setUser] = useState([]);
    const [count_contact, setCountContact] = useState(0);
    const [tamp,setTamp] = useState(0);
    useEffect(() => {
        (async function () {
            await contactservice.getAll().then((res) => {
                setContact(res.data.contacts);
                setCountContact(res.data.count_contact);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [tamp])

    // delete
    function contactTrash(id) {
        contactservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setTamp(id);
        })
    }
    useEffect(function () {
        (async function () {
            await userservice.getAll('user').then(function (result) {
                setUser(result.data.users)
            });
        })();
    }, [])
    return (
        <div className=" admin content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Danh sách Liên hệ <sup>({count_contact})</sup></h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/contact/create" role="button">
                                    < FaRegPlusSquare/> Thêm
                                    </a>
                                    <div className="d-flex ms-5">
                                        <Link to="/admin/contact/trash" className="action-btn" style={{ color: "red" }}>
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                            <sup className="count ms-1">{(count_trash)}</sup>
                                        </Link>
                                    </div>
                                </li>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>

                                            <th className="text-center" style={{ width: "30px" }}>
                                                {/* <input type="checkbox" /> */}
                                            </th>
                                            <th className="text-center" style={{ width: "30px" }}>Id</th>
                                            <th className="text-center" style={{ width: "130px" }}>Tên khách hàng</th>
                                            <th style={{ width: "120px" }}>Tên</th>
                                            <th style={{ width: "80px" }}>Email</th>
                                            <th style={{ width: "80px" }}>Phone</th>
                                            <th style={{ width: "160px" }}>Tiêu đề</th>
                                            <th>Replay_id</th>
                                            <th className="text-center" style={{ width: "130px" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contact.map(function (contact, index) {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{contact.id}</td>
                                                    <td >{user.map(function (pro) {
                                                        if(contact.user_id==pro.id){
                                                        return (
                                                            <option key={pro.id} value={pro.id}>{pro.name}
                                                            </option>
                                                        );
                                                    }
                                                })}
                                                    </td>
                                                    <td>
                                                        <div className="name">
                                                            {contact.name}
                                                        </div>

                                                    </td>
                                                    <td>{contact.email}</td>
                                                    <td >{contact.phone}</td>
                                                    <td>{contact.title}</td>
                                                    <td>{contact.replay_id}</td>

                                                    <td>
                                                        <Link to={`/admin/contact/update/${contact.id}`} className=""><FaEdit /> Update</Link>
                                                        <Link to={`/admin/contact/show/${contact.id}`} className=""><FaEye /> Detail</Link>
                                                        <button onClick={() => { if (window.confirm("Xác nhận xóa danh mục này?")) { contactTrash(contact.id) } }}>
                                                            <FaTrash /> Xoá</button>

                                                    </td>
                                                </tr>

                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Contact_List;