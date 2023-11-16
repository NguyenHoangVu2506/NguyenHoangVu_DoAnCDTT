import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import "./style.css";
import "../../assets/backend/dist/js/adminlte.js";
import { Outlet } from "react-router-dom";


function LayoutAdmin() {
    
    return (
  
        <div class="admin hold-transition sidebar-mini">
            <div class="wrapper">
                <Header />
                <Menu/>
                <Outlet/>
                <Footer />
            </div>
        </div>
    );
}

export default LayoutAdmin;