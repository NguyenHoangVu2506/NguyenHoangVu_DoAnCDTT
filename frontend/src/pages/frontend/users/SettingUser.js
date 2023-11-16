
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";

function SettingUser() {
    const [username, Setusername] = useState(localStorage.getItem('username_customer') || false);
    const [alert_exit, set_alert_exit] = useState(false);
    const navigate = useNavigate    ();

    useEffect(() => {
            if (!username) {
                navigate("/");
            }
        }, []);
    
    const Out = async () => {
        await set_alert_exit(true);
        setTimeout(() => {
            localStorage.removeItem('username_customer');
            Setusername(username);
            window.location.reload();
            set_alert_exit(false);
        }, 1500);
    
    }
    return(
        <div classNameName="container">
                <section class="py-3 bg-light">
                    <div class="container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                            <li class="breadcrumb-item">Thông tin tài khoản</li>
                        </ol>
                    </div>
                </section>
            {/*-- ========================= SECTION PAGETOP END// ========================= -*/}
    
            {/*-- ========================= SECTION CONTENT ========================= -*/}
            <section className="section-content padding-y">
                <div className="container">
    
                    <div className="row">
                    <aside class="col-md-3">
                                <nav class="list-group">
                                    <Link class="list-group-item" to="">Đơn hàng</Link>
                                    <Link class="list-group-item" to="/gio-hang"> Giỏ hàng </Link>
                                    <Link class="list-group-item" to=""> Settings </Link>
                                    <Link class="list-group-item" onClick={Out}>Đăng xuất</Link>
                                </nav>
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
                            </aside> {/* <!-- col.// -->*/}
    
                        <main className="col-md-9">
    
                            <div className="card">
                                <div className="card-body">
                                    <form className="row">
                                        <div className="col-md-9">
                                            <div className="form-row">
                                                <div className="col form-group">
                                                    <label>Tài khoản</label>
                                                    <input type="text" className="form-control" />
                                                </div> {/*-- form-group end.// -*/}
                                                <div className="col form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control"/>
                                                </div> {/*-- form-group end.// -*/}
                                            </div> {/*-- form-row.// -*/}
    
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Tên họ</label>
                                                    <input type="text" className="form-control"/>
    
                                                </div> {/*-- form-group end.// -*/}
                                                <div className="form-group col-md-6">
                                                    <label>Giới tính</label>
                                                    <select id="inputState" className="form-control">
                                                        <option></option>
                                                        <option>Nam</option>
                                                        <option>Nữ</option>
                                                       
                                                    </select>
                                                </div> 
                                            </div> 
    
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label>Địa chỉ</label>
                                                    <textarea type="text" className="form-control"  />
                                                </div> 
                                                <div className="form-group col-md-6">
                                                    <label>Phone</label>
                                                    <input type="text" className="form-control" />
                                                </div> 
                                            </div> 
                                            <button className="btn btn-primary">Lưu</button>
                                            <button className="btn btn-light">Thay đổi mật khẩu</button>
                                            <br /><br /><br /><br /><br /><br />
    
                                        </div> 
                                        <div className="col-md">
                                            <img src={require("../../../assets/images/products/product02.webp")} className="img-md rounded-circle border" />
                                        </div>  
                                    </form>
                                </div> 
                            </div>
    
    
    
                        </main> 
                    </div>
    
                </div> 
            </section>
        </div>
    );
} 
export default SettingUser;