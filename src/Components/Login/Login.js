import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Auth from "./useAuth";




const Login = () => {

  const auth = Auth();
  return (
    <div className="login">
      <div className="container">
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584915160/logo2_tmrf40.png"
            alt=""
          />
        </div>

        <form onSubmit={auth.signIn} className="text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
          />
          <br />
          <button type="submit" className="btn btn-danger myButton">Log in</button>
        </form>

        <div >
         
            <Link id="textSignUp" className="d-flex justify-content-center" to="/signup">Create an account</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
