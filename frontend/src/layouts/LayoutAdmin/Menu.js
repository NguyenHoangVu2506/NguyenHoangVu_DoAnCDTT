import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import urlImage from "../../config.js";

function Menu() {
   
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="../backend/index.html" className="brand-link">
           {/* <img src="" alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3" style={{opacity:" .8"}}/> */}
           <span className="brand-text font-weight-light">QUẢN TRỊ</span>
        </a>
        <div className="">
           <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                 <img src="" className="img-circle elevation-2" alt="User Image"/>
              </div>
              <div className="brand-link">
                 <a href="#" className="brand-link">Admin</a>
              </div>
           </div>
           <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                 data-accordion="false">
                 <li className="nav-item">
                    <Link href="#" className="nav-link">
                       <i className="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Sản phẩm
                          <i className="right fas fa-angle-left"></i>
                       </p>
                    </Link>
                    <ul className="nav nav-treeview">
                       <li className="nav-item">
                          <Link to="/admin/product" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Sản phẩm</p>
                          </Link>
                          <Link to="/admin/productsale" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Sản phẩm sale</p>
                          </Link>
                       </li>
                       <li className="nav-item">
                          <Link  to="/admin/category" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Danh mục</p>
                          </Link>
                       </li>
                       <li className="nav-item">
                          <Link to="/admin/brand" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Thương hiệu</p>
                          </Link>
                       </li>
                    </ul>
                 </li>
                 <li className="nav-item">
                    <a href="#" className="nav-link">
                       <i className="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Bài viết
                          <i className="right fas fa-angle-left"></i>
                       </p>
                    </a>
                    <ul className="nav nav-treeview">
                       <li className="nav-item">
                          <a href="/admin/post" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Tất cả bài viết</p>
                          </a>
                       </li>
                       <li className="nav-item">
                          <a href="/admin/topic" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Chủ đề</p>
                          </a>
                       </li>
                       <li className="nav-item">
                          <a href="/admin/pages" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Trang đơn</p>
                          </a>
                       </li>
                    </ul>
                 </li>
                 <li className="nav-item">
                    <a href="#" className="nav-link">
                       <i className="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Quản lý bán hàng
                          <i className="right fas fa-angle-left"></i>
                       </p>
                    </a>
                    <ul className="nav nav-treeview">
                       <li className="nav-item">
                          <a href="/admin/order" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Tất cả đơn hàng</p>
                          </a>
                       </li>
                       <li className="nav-item">
                          <a href="/admin/productstore" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Nhập hàng</p>
                          </a>
                       </li>
                       <li className="nav-item">
                          <a href="export_index.html" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Xuất hàng</p>
                          </a>
                       </li>
                    </ul>
                 </li>
                 <li className="nav-item">
                    <a href="/admin/customer" className="nav-link">
                       <i className="nav-icon far fa-circle text-danger"></i>
                       <p className="text">Khách hàng</p>
                    </a>
                 </li>
                 <li className="nav-item">
                    <a href="/admin/contact" className="nav-link">
                       <i className="nav-icon far fa-circle text-danger"></i>
                       <p className="text">Liên hệ</p>
                    </a>
                 </li>
                 <li className="nav-item">
                    <a href="#" className="nav-link">
                       <i className="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Giao diện
                          <i className="right fas fa-angle-left"></i>
                       </p>
                    </a>
                    <ul className="nav nav-treeview">
                       <li className="nav-item">
                          <a href="/admin/menu" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Menu</p>
                          </a>
                       </li>
                       <li className="nav-item">
                          <a href="/admin/slider" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Banner</p>
                          </a>
                       </li>
                    </ul>
                 </li>
                 <li className="nav-item">
                    <a href="#" className="nav-link">
                       <i className="nav-icon fas fa-tachometer-alt"></i>
                       <p>
                          Hệ thống
                          <i className="right fas fa-angle-left"></i>
                       </p>
                    </a>
                    <ul className="nav nav-treeview">
                       <li className="nav-item">
                          <a href="/admin/user" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Thành viên</p>
                          </a>
                       </li>
                       <li className="nav-item">
                          <a href="/admin/config" className="nav-link">
                             <i className="far fa-circle nav-icon"></i>
                             <p>Cấu hình</p>
                          </a>
                       </li>
                    </ul>
                 </li>
                 <li className="nav-header">LABELS</li>
                 <li className="nav-item">
                    <a href="#" className="nav-link">
                       <i className="nav-icon far fa-circle text-danger"></i>
                       <p className="text">Important</p>
                    </a>
                 </li>
                 <li className="nav-item">
                    <a href="#" className="nav-link">
                       <i className="nav-icon far fa-circle text-warning"></i>
                       <p>Warning</p>
                    </a>
                 </li>
                 <li className="nav-item">
                    <a href="#" className="nav-link">
                       <i className="nav-icon far fa-circle text-info"></i>
                       <p>Informational</p>
                    </a>
                 </li>
              </ul>
           </nav>
        </div>
     </aside>
    );
}

export default Menu;