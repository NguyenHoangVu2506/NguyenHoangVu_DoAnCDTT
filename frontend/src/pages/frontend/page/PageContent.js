import React from "react";
import { Link } from "react-router-dom";
function PageContent(props) {
    return (
        <div className="container">
            <section class="py-3 bg-light">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item">Giới thiệu</li>
                    </ol>
                </div>
            </section>


            {/*<!-- ========================= SECTION CONTENT ========================= -->*/}
            <section class="section-content bg-white padding-y">
                <div class="container">

                    <h5 class="card-title">Giới thiệu</h5>
                    <p>Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</p>

                    <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>

                        <a> - Bạn là ai</a>
                        <a> - Giá trị kinh doanh của bạn là gì</a>
                        <a> - Địa chỉ cửa hàng</a>
                        <a> - Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</a>
                        <a> - Bạn kinh doanh ngành hàng online được bao lâu</a>
                        <a> - Đội ngũ của bạn gồm những ai</a>
                        <a> - Thông tin liên hệ</a>
                        <a> - Liên kết đến các trang mạng xã hội (Twitter, Facebook)</a>
                        <p> Bạn có thể chỉnh sửa hoặc xoá bài viết này tại đây hoặc thêm những bài viết mới trong phần quản lý Trang nội dung.</p>
                    <a href="/" class="btn btn-light"> Quay lại</a>
                </div> {/*<!-- container .//  -->*/}
            </section>
        </div>
    )
}

export default PageContent;