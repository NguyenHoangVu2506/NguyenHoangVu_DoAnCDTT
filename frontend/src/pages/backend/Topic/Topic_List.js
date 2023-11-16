import React from 'react';
import { useEffect, useState } from "react";
import "./style.css";
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import topicservice from "../../../services/TopicService";
import { urlImage } from "../../../config";
function Topic_List() {
    const navigate = useNavigate();
    const [countTopic, setCountTopic] = useState(0);
    const [count_trash, setCountTrash] = useState(0);

    // const [post, setPost] = useState([]);
    const [topic, setTopic] = useState([]);

    const [statusdel, setStatusDel] = useState(0);
    useEffect(() => {
        (async function () {
            await topicservice.getAll().then((res) => {
                setTopic(res.data.topics);
                setCountTopic(res.data.count_topic);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [statusdel])
    function topicTrash(id) {
        topicservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setStatusDel(id);
        })
    }
    return (
        <div className=" admin content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Danh sách Chủ đề</h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link className="action-btn" to="/admin/topic/trash" style={{ color: "red" }}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <sup className="count ms-1">{count_trash}</sup>
                            </Link>
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
                                    <a className="nav-link" href="/admin/topic/create" role="button">
                                        < FaRegPlusSquare /> Thêm
                                    </a>
                                </li>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>

                                            <th className="text-center" style={{ width: "30px" }}>
                                                {/* <input type="checkbox" /> */}
                                            </th>
                                            <th className="text-center" style={{ width: "30px" }}>Id</th>
                                            <th style={{ width: "120px" }}>Tên chủ đề</th>
                                            <th className="text-center" style={{ width: "130px" }}>Mô tả</th>
                                            <th style={{ width: "80px" }}>Từ khóa</th>
                                            <th className="text-center" style={{ width: "130px" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topic.map(function (topic, index) {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{topic.id}</td>
                                                    
                                                    <td>{topic.name}</td>
                                                    <td>{topic.description}</td>

                                                    <td>{topic.metakey}</td>
                                                    <td>
                                                        <Link to={`/admin/topic/update/${topic.id}`} className="">
                                                            <FaEdit /> Update
                                                        </Link>
                                                        <Link to={`/admin/topic/show/${topic.id}`} className="">
                                                            <FaEye /> Detail
                                                        </Link>
                                                        <button
                                                            onClick={() => {
                                                                if (window.confirm("Xác nhận xóa bài viết này?")) {
                                                                    topicTrash(topic.id);
                                                                }
                                                            }}
                                                        >
                                                            <FaTrash /> Xoá
                                                        </button>
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

export default Topic_List;