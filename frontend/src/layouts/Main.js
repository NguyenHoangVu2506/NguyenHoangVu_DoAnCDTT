import React from "react";
import {Routes,Route} from 'react-router-dom';

import Home from "./Home";
import Register from "../pages/users/Register";
import Login from "../pages/users/Login";
import Contact from "../pages/products/Contact";
import ShoppingCart from "../pages/users/ShoppingCart";
import ProductDetail from "../pages/products/ProductDetail";
const Main =()=>(
    <main>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/lien-he" element={<Contact/>}/>
            <Route path="/gio-hang" element={<ShoppingCart/>}/>

            <Route path="/dang-ky" element={<Register/>}/>
            <Route path="/dang-nhap" element={<Login/>}/>
            <Route path="/chi-tiet" element={<ProductDetail/>}/>


        </Routes>
    </main>
)
export default Main;