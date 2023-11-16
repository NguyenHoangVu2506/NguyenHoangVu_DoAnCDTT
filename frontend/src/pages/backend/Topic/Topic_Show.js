import React from 'react';

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import topicservice from '../../../services/TopicService';
function Topic_Show() {
    const { id } = useParams();
    const [topic, setTopic] = useState([]);
    let status = "Chưa xuất bản";
    useEffect(() => {
        (async () => {
            await topicservice.getById(id).then((res) => {
                setTopic(res.data.topics);
            })
        })()
    }, [])
    if (topic.status == 1) {
        status = "Xuất bản"
    }
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <h1 className="d-inline">Chi tiết chủ đề</h1>
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
                    <div className="card-body p-2">
                        <table className="table table-bordered">
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
                                    <th>Tên chủ đề</th>
                                    <td >{topic.name}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Mô tả</th>
                                    <td>{topic.description}</td>
                                </tr>
                                <tr>
                                    <th>từ khóa</th>
                                    <td>{topic.metakey}</td>
                                </tr>
                                <tr>
                                    <th>Sort_order</th>
                                    <td >{topic.sort_order}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <th>Ngày thêm</th>
                                    <td>{topic.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Topic_Show;