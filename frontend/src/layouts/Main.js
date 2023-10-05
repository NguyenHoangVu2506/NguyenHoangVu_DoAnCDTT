import React from "react";
import {Routes,Route} from 'react-router-dom';

import Home from "./Home";
import Register from "../pages/users/Register";
import Login from "../pages/users/Login";
import Contact from "../pages/page/Contact";
import ShoppingCart from "../pages/users/ShoppingCart";
import ProductDetail from "../pages/products/ProductDetail";
import Post from "../pages/blog/Post";
import PageContent from "../pages/page/PageContent";
import ProductHome from "../pages/products/ProductHome";
import SettingUser from "../pages/users/SettingUser";
const Main =()=>(
    <main>
       
        <Routes>
        
            <Route path="/" element={<Home/>}/>
            <Route path="/lien-he" element={<Contact/>}/>

            <Route path="/gio-hang" element={<ShoppingCart/>}/>
            <Route path="/dang-ky" element={<Register/>}/>
            <Route path="/dang-nhap" element={<Login/>}/>
            <Route path="/tai-khoan" element={<SettingUser/>}/>


            <Route path="/chi-tiet/:slug" element={<ProductDetail/>}/>
            <Route path="/tin-tuc" element={<Post/>}/>
            <Route path="/gioi-thieu" element={<PageContent/>}/>
            <Route path="/tat-ca-san-pham" element={<ProductHome/>}/>





        </Routes>
    </main>
)
export default Main;