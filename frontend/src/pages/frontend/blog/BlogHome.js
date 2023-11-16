import React, { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function BlogHome(props) {
    let { image, title, type,slug} = props.post;

    return (
        <div class="blog">
            <div class="container">
                <div class="blog-container has-scrollbar">
                                <div class="blog-card">
                                    <a href="#">
                                        <img src={urlImage + "post/" + image} alt="" width="300" height={120} class="blog-banner" />
                                    </a>
                                    <div class="blog-content">


                                        <a href={"/chi-tiet-bai-viet/" + slug}>
                                            <h3 class="blog-title">{title}</h3>
                                        </a>

                                        <p class="blog-meta">
                                            {type}
                                        </p>

                                    </div>
                                </div>
                    </div>
                </div>

            </div>

        
    );
}


export default BlogHome;