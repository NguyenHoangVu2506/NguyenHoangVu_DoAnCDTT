import React from "react";
const BlogHome = () => (
    <div class="blog">

        <div class="container">

            <div class="blog-container has-scrollbar">

                <div class="blog-card">

                    <a href="#">
                        <img src={require("../../assets/images/blog/blog02.webp")} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner" />
                    </a>

                    <div class="blog-content">


                        <a href="#">
                            <h3 class="blog-title">MUA 2 TẶNG 1 - Mừng quốc tế thiếu nhi 1/6</h3>
                        </a>

                        <p class="blog-meta">
                            By <cite>Toto News</cite> / <time datetime="2022-04-06">19 Tháng 9, 2023</time>
                        </p>

                    </div>

                </div>
                <div class="blog-card">

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

                </div>



            </div>

        </div>

    </div>

);

export default BlogHome;