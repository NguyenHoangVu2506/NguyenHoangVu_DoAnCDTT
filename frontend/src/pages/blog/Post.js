import React, { useEffect, useState } from "react";
import postservice from "../../services/PostService";
import { urlImage } from "../../config";
function Post() {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(8);
    useEffect(function () {
        (function () {
            postservice.getPostAll(limit, 1).then(function (result) {
                setPosts(result.data.posts);
            });
        })()
    }, [limit]);
    return (
        <div class="blog">

            <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">Blog</li>
                    </ol>
                </div>
            </section>

            <div class="product-featured">


            {posts.map(function (post, index) {
                            return (
                <div class="showcase-container">

                    <div class="showcase">

                        <div class="showcase-banner">
                            <img src={urlImage + "post/" + post.image} alt="shampoo, conditioner & facewash packs" class="showcase-img" />
                        </div>

                        <div class="showcase-content">



                            <a href="#">
                                <h3 class="showcase-title">{post.title}</h3>
                            </a>

                            <p class="showcase-desc">
                                Giảm giá đến 50% với tất cả sản phẩm mô hình kim loại 3D, mô hình ốc vít 3D,
                                mô hình gỗ 3D, mô hình nhựa 3D, mô hình giấy 3D tại Art Puzzle.
                                Giá sản phẩm tại website là giá đã giảm...
                            </p>
                            <p class="blog-meta">
                                By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                            </p>
                        </div>

                    </div>

                </div> )
                        })}



            </div>
        </div>

    );
}
export default Post;