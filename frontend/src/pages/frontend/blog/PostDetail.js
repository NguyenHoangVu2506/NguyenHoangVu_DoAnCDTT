import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import postservice from "../../../services/PostService";
function PostDetail(props) {
    const [post, setPost] = useState([]);
    const [post_other, setPostOther] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (function () {
            postservice.getPostBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setPost(result.data.post);
                    setPostOther(result.data.post_other)
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
                        <li class="breadcrumb-item">bài viết</li>
                        <li class="breadcrumb-item">Chi tiết bài viết</li>
                    </ol>
                </div>
            </section>
            <section class="section-content bg-white padding-y">
                <div class="container">
                    <div class="row">
                        <aside class="col-md-6">
                            <div class="card">
                                <article class="gallery-wrap">
                                    <div class="img-big-wrap">
                                        <div> <Link href="#"><img src={urlImage + "post/" + post.image} height={450} width={500} /></Link></div>
                                    </div> 
                                </article> 
                            </div>
                        </aside>
                        <main class="col-md-6">
                            <article class="product-info-aside">

                                <h2 class="title mt-3 h4">{post.title}</h2>
                                <dl class="row">
                                    <dt class="col-sm-3">Series:</dt>
                                    <dd class="col-sm-9">Real Grade</dd>

                                    <dt class="col-sm-3">Tỉ lệ:</dt>
                                    <dd class="col-sm-9">1/144</dd>

                                    <dt class="col-sm-3">Chiều cao:</dt>
                                    <dd class="col-sm-9">~ 13cm</dd>

                                    <dt class="col-sm-3">Xuat xu</dt>
                                    <dd class="col-sm-9">Hàng chính hãng Bandai (Nhật Bản)
                                    </dd>
                                </dl>


                            </article> 
                        </main> 
                        
                    </div> 
                </div> 
            </section>
            <section class="section-name padding-y bg">
                <div class="container">

                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="title-description">Mô tả</h5>
                            <ul class="list-check">
                                {post.detail}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Comentsproduct/> */}
            <h4 className="text-center"> </h4>            
            <h4 className="text-center">Bài viết liên quan</h4>
            <div class="container">

                <div class="blog-container has-scrollbar">
                {post_other.map(function(post,index)
                    {
                       

                        return                     <div class="blog-card">

                        <a href="#">
                            <img src={urlImage + "post/" + post.image} alt="" height={100} class="blog-banner" />
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

                    })}
                </div>

            </div>

            {/* <!-- ========================= SECTION CONTENT END// ========================= -->*/}
        </div>
    )
}

export default PostDetail;