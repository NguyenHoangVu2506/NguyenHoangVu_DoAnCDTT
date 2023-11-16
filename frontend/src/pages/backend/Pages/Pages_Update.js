import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import postservice from "../../../services/PostService";
import topicservice from "../../../services/TopicService";

function Pages_Update() {

    const navigate = useNavigate(); // chuyen trang
    const [title, setTitle] = useState('');
    const [topicId, setTopicId] = useState();
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState(2);
    const [type, setType] = useState(2);
    const [description, setDescription] = useState(2);

    const [topics, setTopics] = useState([]);
    // lay id
    const { id } = useParams("id");
    //lay du lieu
    useEffect(function () {
        (async function () {
            await postservice.getById(id).then(function (result) {
                const data = result.data.posts;
                setTitle(data.title);
                setTopicId(data.topic_id);
                setDetail(data.detail);
                setStatus(data.status);
                setType(data.type);
                setDescription(data.content);

            });
        })();
    }, [])
    //lay danh sach
    const [post, setPost] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll().then(function (result) {
                setTopics(result.data.topics)
            });
        })();
    }, [])

    // ham cap nhat
    async function PostEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var post = new FormData();
        post.append("topic_id", topicId);
        post.append("title", title);
        post.append("detail", detail);
        post.append("status", status);
        post.append("type", type);
        post.append("description", description);

        post.append("type", "post");
        if (image.files.length === 0) {
            post.append("image", "")
        }
        else {
            post.append("image", image.files[0]);
        }
        await postservice.update(id,post).then(function (res) {
            alert(res.data.message);
            navigate('/admin/post', { replace: true });
        })

    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Chỉnh sửa bài viết</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-header text-right">
                        <Link to="/admin/pages" className="btn btn-sm btn-info">
                            <i className="fa fa-reply me-1" aria-hidden="true"></i>
                            Quay lại
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <form onSubmit={PostEdit}>

                                    <div className="mb-3">
                                        <label>Tiêu đề</label>
                                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>mô tả</label>
                                        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Chi tiết</label>
                                        <input type="text" name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label>Type</label>
                                        <input type="text" name="type" value={type} onChange={(e) => setType(e.target.value)} className="form-control" />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label>Hình ảnh</label>
                                        <input type="file" id="image" name="image" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name">Chủ đề</label>
                                        <select
                                            name="topic_id" value={topicId} onChange={(e) => setTopicId(e.target.value)}
                                            className="form-control">
                                            <option value="0">None</option>
                                            {/* {post.map(function (post, index) {
                                                return (
                                                    <option key={index} value={post.id}>{post.name}</option>
                                                )
                                            })} */}
                                            {topics && topics.map((top) => (
                                                <option key={top.id} value={top.id}>{top.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label>Trạng thái</label>
                                        <select name="status" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                    <div className="card-header text-center">
                                        <button className="btn btn-sm btn-success">
                                            <i className="fa fa-save me-1" aria-hidden="true"></i>
                                            Lưu
                                        </button>
                                    </div>

                                </form>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Pages_Update;