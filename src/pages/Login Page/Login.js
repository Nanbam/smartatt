import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className="container">
                <div className="side-image">
                    <div className="logo">
                        
                    </div>
                
                </div>

                    <div className="form-container">
                        <div className="Login">
                            <div className="form">
                                <div className='div002'>
                                  <h1>Login</h1>
                                  <h3>Sign your attendance </h3>
                                </div>
                                    <div className='div001'>
                                        <div className="name label">
                                            <div>
                                                <label className="input-label">Email or phone number</label>
                                                <input type="text" name="mail/phone" />
                                            </div>
                                        </div>
                                
                                            <div className="pass label">
                                                <div>
                                                <label className="input-label">Password</label>
                                                    <input type="text" name="password" />
                                                </div>
                                                
                                            </div>
                                      
                                        <div className='div003'>
                                            <Link to="/login_success">
                                                <button type="login">Login</button>

                                            </Link>
                                        </div>
                                        <div className="account">
                                            <p className="enter">Don't have an account?
                                                <Link to="/signup"> <span>Sign Up</span> </Link>
                                            </p>
                                        </div>
                                    
                                        </div>
                            </div>
                            </div>
                        </div>
        </div>
    );
}

export default Login;