import React, { useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import BlogHome from "./BlogHome";
import ListTopic from "../../../layouts/LayoutSite/ListTopic";
import { Pagination, Stack } from "@mui/material";
import Post_List from "./PostList";
function Post() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    const [end_page, setEndPage] = React.useState(1);
    const [viewMode, setViewMode] = useState("grid");

    useEffect(function () {
        (function () {
            postservice.getPostAll(8, page).then(function (result) {
                setPosts(result.data.posts);
                setEndPage(result.data.end_page);
            });
        })()
    }, [page]);
    const handleListView = () => {
        setViewMode("list");
    };

    const handleGridView = () => {
        setViewMode("grid");
    };

    return (
        <div>
            <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">Tin tức</li>
                    </ol>
                </div>
            </section>
            <div class="product-container">
                <h2 class="blog-titles">Tất cả bài viết</h2>
                <div class="container">
                    <div class="sidebar has-scrollbar" >
                        <div id="btnContainer" className="mb-3">
                            <button className={`btn${viewMode === "list" ? " active" : ""}`} onClick={handleListView}>
                                <i className="fa fa-bars"></i> List
                            </button>
                            <button className={`btn${viewMode === "grid" ? " active" : ""}`} onClick={handleGridView}>
                                <i className="fa fa-th-large"></i> Grid
                            </button>

                        </div>
                        <div class="sidebar-category">
                            <ListTopic />
                        </div>

                    </div>
                    <div class="product-box">
                        <div class="product-main">

                            {viewMode === "grid" ? (
                                <div className="product-grid">
                                    {posts.map((post, index) => (
                                        <BlogHome post={post} key={index} />
                                    ))}
                                </div>
                            ) : (
                                <div className="product-list">
                                    {posts.map((post, index) => (
                                        <Post_List post={post} key={index} />
                                    ))}
                                </div>
                            )}

                            <div className="row">
                                <Stack spacing={3}>
                                    <Pagination count={end_page} page={page} onChange={ChangePage} />
                                </Stack>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Post;