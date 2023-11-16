import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import topicservice from "../../../services/TopicService";
import ListTopic from "../../../layouts/LayoutSite/ListTopic";
import BlogHome from "./BlogHome";
import { Pagination, Stack } from "@mui/material";

function PostTopic() {
    const { slug } = useParams();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    const [end_page, setEndPage] = React.useState(1);
    const [title, setTitle] = useState("");
    useEffect(function () {
        (async function () {
            const infobrand = await topicservice.getBySlug(slug);
            const catId = infobrand.data.topics.id;
            setTitle(infobrand.data.topics.name);
            const infoproduct = await postservice.getPostByTopicId(8, page, catId);
            setPosts(infoproduct.data.posts);
            postservice.getPostByTopicId(8, page, catId).then(function (result) {
                // setPosts(result.data.posts);
                setEndPage(result.data.end_page);
            });

        })();
    }, [slug, page])
    return (
        <div class="product-container">

            <div class="container">
                <div class="sidebar  has-scrollbar" >
                    <div class="sidebar-category">
                        <ListTopic />
                    </div>
                </div>
                <div class="product-box">
                    <div class="product-main">
                        <div class="product-grid">
                            {posts.map(function (post, index) {
                                return <BlogHome post={post} key={index} />;
                            })}
                        </div>

                    </div>
                    <div className="row">
                        <Stack spacing={3}>
                            <Pagination count={end_page} page={page} onChange={ChangePage} />
                        </Stack>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default PostTopic;
