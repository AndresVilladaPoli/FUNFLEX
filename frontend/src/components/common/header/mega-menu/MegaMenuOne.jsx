import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo/funflexnegro.png";


const MegaMenuOne = () => {
  return (
    <ul className="navbar-nav">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="brand identity" width="127" />
          </Link>
        </div>
      </li>

      <li className="nav-item  ">
        <button
          className="nav-link "
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
        <Link to={"/"}>Home</Link> 
        </button>
        
      </li>
      

      <li className="nav-item ">
        <button
          className="nav-link "
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          <Link to={"/products"}>Products</Link>
          
        </button>
        
      </li>
      
    </ul>
  );
};

export default MegaMenuOne;
