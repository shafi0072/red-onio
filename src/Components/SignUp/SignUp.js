import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignUp.css";
import "firebase/auth";
import GoogleButton from "react-google-button";
import Auth from "../Login/useAuth";



// Initialize Firebase



const SignUp = () => {

   const auth = Auth();

  // const [user, setUser] = useState({
  //   isSignedIn: false,
  //   name: "",
  //   email: "",
  //   photoURL: ""
  // });

  

  //email input validation
  // const is_valid_email = email => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
  // const hasNumber = input => /\d/.test(input);

  // const handleChange = event => {
  //   const newUserInfo = {
      
  //   };
  

    //perform validation

  //   let isValid = true;

  //   if (event.target.email === "email") {
  //     isValid = is_valid_email(event.target.value);
  //   }
  //   if (event.target.name === "password") {
  //     isValid = event.target.value.length >= 8 && hasNumber(event.target.value);
  //   } else {
  //   }

  //   newUserInfo[event.target.name] = event.target.value;

  //   newUserInfo.isValid = isValid;
  //   setUser(newUserInfo);
  //  };



  return (
    <div className="sign-Up">
      <div className="container">
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584915160/logo2_tmrf40.png"
            alt=""
          />
        </div>

        <form onSubmit={()=> {alert("SignUp is currently unavailable. You can login with Google Account instead.")}} className="text-center">
          

          <input
            required
            type="text"
            // onBlur={handleChange}
            name="name"
            id="email"
            placeholder="Name"
            className="input"
          />
          
          <br />
          <input
            // onBlur={handleChange}
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input"
          />
          <br />
          <input
            // onBlur={handleChange}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
            required
          />
          <br />

          <input
            // onBlur={handleChange}
            type="password"
            name="password"
            id="confirm_password"
            placeholder="Confirm Password"
            className="input"
            required
          />
          <br />
          
          <button type="submit" className="btn btn-danger myButton">
            Sign Up
          </button>
        </form>

        <div>
          <Link to="/login">
            <p style={{color:"black"}}>Already have an account? <span style={{color:"blue"}}>Log In</span></p>
          </Link>
        </div>

        <div className="d-flex justify-content-center">

          {
                auth.user ? <Redirect to="/"></Redirect> :
                <span>Or  <GoogleButton onClick={auth.signInWithGoogle} /></span>
          }

        </div>
      
      </div>
    </div>
  );
};

export default SignUp;
