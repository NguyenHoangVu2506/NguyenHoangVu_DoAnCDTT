import React, { useEffect, useState } from "react";
import postservice from "../../services/PostService";
import { urlImage } from "../../config";
function BlogHome(props) {
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

            <div class="container">

                <div class="blog-container has-scrollbar">

                    
                        {posts.map(function (post, index) {
                            return (
                                <div class="blog-card">
                                    <a href="#">
                                        <img src={urlImage + "post/" + post.image} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                                    </a>
                                    <div class="blog-content">


                                        <a href="#">
                                            <h3 class="blog-title">{post.title}</h3>
                                        </a>

                                        <p class="blog-meta">
                                            {post.type}
                                        </p>

                                    </div>
                                </div>
                            )
                        })}


                    </div>
                    {/* <div class="blog-card">

                        <a href="#">
                            <img src={require("../../assets/images/blog/blog01.webp")} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                        </a>

                        <div class="blog-content">


                            <a href="#">
                                <h3 class="blog-title">Back to School - Super Sale giảm đến 50%</h3>
                            </a>

                            <p class="blog-meta">
                                By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                            </p>

                        </div>

                    </div>
                    <div class="blog-card">

                        <a href="#">
                            <img src={require("../../assets/images/blog/blog03.webp")} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                        </a>

                        <div class="blog-content">


                            <a href="#">
                                <h3 class="blog-title">Papercraft là gì & cách làm mô hình Gundam bằng giấy</h3>
                            </a>

                            <p class="blog-meta">
                                By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                            </p>

                        </div>

                    </div>
                    <div class="blog-card">

                        <a href="#">
                            <img src={require("../../assets/images/blog/blog04.webp")} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                        </a>

                        <div class="blog-content">


                            <a href="#">
                                <h3 class="blog-title">Dân chơi mô hình sống “flex” thế nào?</h3>
                            </a>

                            <p class="blog-meta">
                                By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                            </p>

                        </div>

                    </div> */}



                </div>

            </div>

        
    );
}


export default BlogHome;