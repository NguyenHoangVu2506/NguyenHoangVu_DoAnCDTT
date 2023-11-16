import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const [username, Setusername] = useState(localStorage.getItem('username_customer') || false);
const navigate = useNavigate();
const [alert_exit, set_alert_exit] = useState(false);



const Out = async () => {
    await set_alert_exit(true);
    setTimeout(() => {
        localStorage.removeItem('username_customer');
        Setusername(username);
        window.location.reload();
        set_alert_exit(false);
    }, 1500);

}
    return (
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <Link to="/admin" class="nav-link">Home</Link>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="/admin/login_admin" class="nav-link">Contact</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i class="fas fa-search"></i>
                    </a>
                    <div class="navbar-search-block">
                        <form class="form-inline">
                            <div class="input-group input-group-sm">
                                <input class="form-control form-control-navbar" type="search" placeholder="Search"
                                    aria-label="Search" />
                                <div class="input-group-append">
                                    <button class="btn btn-navbar" type="submit">
                                        <i class="fas fa-search"></i>
                                    </button>
                                    <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/admin/login_admin" role="button" >
                        <i class="fas fa-power-off"></i> Đăng nhap
                    </Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="" role="button" onClick={Out}>
                        <i class="fas fa-power-off"></i> Đăng xuất
                    </Link>
                </li>
                {alert_exit && <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} />
            </Backdrop>}
            {alert_exit &&
                <Snackbar open={true} autoHideDuration={1000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity='info' sx={{ width: '100%' }}>
                        Đang đăng xuất !
                    </Alert>
                </Snackbar>}
            </ul>
        </nav>
    );
}

export default Header;