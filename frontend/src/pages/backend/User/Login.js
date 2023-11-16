import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userservice from "../../../services/UserService";
function Login()  
{
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function Login(event) {
        event.preventDefault();
        const user = new FormData();
        user.append("email", email);
        user.append("password", password);

        await userservice.Login_admin(user).then(function (result) {
            if (result.data.success === true) {
                alert(result.data.message);
                navigate('/admin', { replace: true });
            }
            else {
                alert(result.data.message);
                navigate('/admin/login', { replace: true });
            }
        })
    }
    return(
    <section className="section-conten padding-y" style={{ minHeight: '84vh' }}>
        <div className="card mx-auto" style={{ maxWidth: '380px', marginTop: '100px' }}>
            <div className="card-body">
                <h4 className="card-title mb-4">Đăng nhập</h4>
                <form onSubmit={Login}>
                    <div className="form-group">
                        <input onChange={(e) => setEmail(e.target.value)} value={email}  name="email" id="email" className="form-control" placeholder="Email" type="email" />
                    </div>
                    <div className="form-group">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" className="form-control" placeholder="Password"  />
                    </div>

                    <div className="form-group">
                        <a href="#" className="float-right">Forgot password?</a>
                        <label className="float-left custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" checked="" /> <div className="custom-control-label"> Remember </div> </label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                    </div>
                </form>
            </div>
        </div>

        <br />


    </section>
    );
}
export default Login