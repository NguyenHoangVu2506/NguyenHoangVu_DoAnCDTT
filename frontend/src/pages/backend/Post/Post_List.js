import React from 'react';
import { useEffect, useState } from "react";

import "./style.css";
import { FaEdit, FaEye, FaRegPlusSquare, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import postservice from "../../../services/PostService";
import topicservice from "../../../services/TopicService";
import { urlImage } from "../../../config";
function Post_List() {
    const navigate = useNavigate();
    const [countPost, setCountPost] = useState(0);
    const [count_trash, setCountTrash] = useState(0);

    const [post, setPost] = useState([]);
    const [topic, setTopic] = useState([]);

    const [statusdel, setStatusDel] = useState(0);
    useEffect(() => {
        (async function () {
            await postservice.getAll().then((res) => {
                setPost(res.data.posts);
                setCountPost(res.data.count_post);
                setCountTrash(res.data.count_trash);
            })
        })()
    }, [statusdel])

    // delete
    
    function postTrash(id) {
        postservice.deleteTrash(id).then(function (result) {
            alert(result.data.message);
            setStatusDel(id);
        })
    }
    
    useEffect(function () {
        (async function () {
            await topicservice.getAll().then(function (result) {
                setTopic(result.data.topics)
            });
        })();
    }, [])
    return (
        <div className=" admin content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Danh sách Bài viết</h1>
                        </div>
                        <div className="col-sm-1 mt-2 text-right">
                            <Link className="action-btn" to="/admin/post/trash" style={{ color: "red" }}>
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
                                    <a className="nav-link" href="/admin/post/create" role="button">
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
                                            <th style={{ width: "120px" }}>Hình ảnh</th>
                                            <th className="text-center" style={{ width: "130px" }}>Chủ đề</th>
                                            <th style={{ width: "120px" }}>Tiêu đề</th>
                                            <th style={{ width: "80px" }}>Từ khóa</th>
                                            <th className="text-center" style={{ width: "130px" }}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {post.map(function (post, index) {
                                            return (
                                                <tr className="datarow" key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{post.id}</td>
                                                    <td>
                                                        <img src={urlImage + 'Post/' + post.image} alt="post.jpg" style={{ width: "100%" }} />
                                                    </td>
                                                    <td>
                                                        {topic.map(function (pro) {
                                                            if (post.topic_id === pro.id) {
                                                                return (
                                                                    <option key={pro.id} value={pro.id}>
                                                                        {pro.name}
                                                                    </option>
                                                                );
                                                            }
                                                        })}
                                                    </td>
                                                    <td>{post.title}</td>
                                                    <td>{post.metakey}</td>
                                                    <td>
                                                        <Link to={`/admin/post/update/${post.id}`} className="">
                                                            <FaEdit /> Update
                                                        </Link>
                                                        <Link to={`/admin/post/show/${post.id}`} className="">
                                                            <FaEye /> Detail
                                                        </Link>
                                                        <button
                                                            onClick={() => {
                                                                if (window.confirm("Xác nhận xóa bài viết này?")) {
                                                                    postTrash(post.id);
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

export default Post_List;