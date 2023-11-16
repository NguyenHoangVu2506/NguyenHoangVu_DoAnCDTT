import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postservice from "../../../services/PostService";
function Single_item(props) {

    const [post, setPost] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (function () {
            postservice.getPostBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setPost(result.data.post);
                }
            });
        })()
    }, []);
    return (
        <div className="container">
            <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">{post.title}</li>
                    </ol>
                </div>
            </section>


            {/*<!-- ========================= SECTION CONTENT ========================= -->*/}
            <section class="section-content bg-white padding-y">
                <div class="container">

                    <h5 class="card-title">{post.title}</h5>
                    {post.detail}
                    
                </div> {/*<!-- container .//  -->*/}
            </section>
        </div>
    )
}

export default Single_item;