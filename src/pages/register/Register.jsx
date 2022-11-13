import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Passowrd</label>
        <input
          type="passowrd"
          className="registerInput"
          placeholder="Enter password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link classname="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}

export default Register