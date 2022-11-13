import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="Enter your email.." />
        <label>Passowrd</label>
        <input type="passowrd" className="loginInput" placeholder="Enter your password.." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link classname="link" to="/register">Register</Link>
      </button>
    </div>
  );
}

export default Login