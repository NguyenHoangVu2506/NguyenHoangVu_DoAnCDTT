import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import topicservice from '../../../services/TopicService';

function Topic_Create() {
    const navigate = useNavigate(); // chuyen trang
    const [name, setName] = useState('');
    const [status, setStatus] = useState(2);
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [description, setDescription] = useState("");
    const [sort_order, setSortOrder] = useState(0);
    const [parent_id, setParentId] = useState(0);

    const [topic, setTopic] = useState([]);
    useEffect(function () {
        (async function () {
            await topicservice.getAll().then(function (result) {
                setTopic(result.data.topics)
            });
        })();
    }, [])

    // ham cap nhat
    async function TopicStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var topic = new FormData();
        topic.append("name", name);
        topic.append("metakey", metakey);
        topic.append("metadesc", metadesc);
        topic.append("status", status);
        topic.append("sort_order", sort_order);
        topic.append("description", description);
        topic.append("parent_id", parent_id);
        await topicservice.create(topic).then(function (res) {
            alert(res.data.message);
            navigate('/admin/topic', { replace: true });
        })

    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Thêm chủ đề</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-header text-right">
                        <Link to="/admin/topic" className="btn btn-sm btn-info">
                            <i className="fa fa-reply me-1" aria-hidden="true"></i>
                            Quay lại
                        </Link>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={TopicStore}>
                                    <div className="mb-3">
                                        <label>Tên chủ đề</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />                                    </div>
                                    <div className="mb-3">
                                        <label>Mô tả</label>
                                        <textarea name="description" rows="5" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label>Từ khóa</label>
                                        <input name="metakey" rows="5" className="form-control" value={metakey} onChange={(e) => setMetakey(e.target.value)}></input>
                                    </div>
                                    <div className="mb-3">
                                        <label>Metadesc</label>
                                        <textarea name="metadesc" rows="5" className="form-control" value={metadesc} onChange={(e) => setMetadesc(e.target.value)}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label>Sắp xếp</label>
                                        <select name="status" className="form-control" onChange={(e) => setSortOrder(e.target.value)} value={sort_order}>
                                            {topic.map((br, index) => {
                                                return (
                                                    <option key={index} value={br.sort_order + 1}>Sau: {br.name}</option>

                                                );
                                            })}
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

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
export default Topic_Create;