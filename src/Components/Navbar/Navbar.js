import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Login/useAuth";


const Navbar = (props) => {

  const auth = useAuth();

  return (
    <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
      <div className="container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584737489/logo2_ikwqnv.png"
            alt=""
            height="50px"
          />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item active">
           { auth.user && props.cart.length> 0 ? <Link to="/checkout" className="nav-link">
              <FontAwesomeIcon className="cart-icon" icon={faCartPlus} /> 
              <span className="badge bg-light">{props.cart.length}</span> 
            </Link>
            :
            <div className="nav-link">
              <FontAwesomeIcon className="cart-icon" icon={faCartPlus} /> 
              <span className="badge bg-light">{props.cart.length}</span> 
            </div>}
          </li>

          <li className="nav-item">

            {
              auth.user ? <span style ={{color:'orange', fontWeight:"700"}}>Welcome {auth.user.name}</span> :
              <Link to="/login" className="nav-link">Login</Link>
            }
            
          </li>

          <li className="nav-item">
           
              {    

                    auth.user ? <button onClick={auth.signOut} className="btn btn-danger rounded-pill">Sign Out</button> :
                    
                    <Link to="/signup"> <button className="btn btn-danger rounded-pill">Sign up</button></Link>
              }
              
        
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
