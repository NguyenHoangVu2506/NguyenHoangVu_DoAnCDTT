import React from "react";
import {Routes,Route} from 'react-router-dom';
import Contact from "./Contact";

import Home from "./Home";
import Register from "../pages/users/Register";
import Login from "../pages/users/Login";
const Main =()=>(
    <main>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/lien-he" element={<Contact/>}/>
            <Route path="/dang-ky" element={<Register/>}/>
            <Route path="/dang-nhap" element={<Login/>}/>

        </Routes>
    </main>
)
export default Main;