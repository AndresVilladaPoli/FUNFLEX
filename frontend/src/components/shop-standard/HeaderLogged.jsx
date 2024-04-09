import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenuOne from "../common/header/mega-menu/MegaMenuOneClient";
const HeaderLogged = ({ className = "" }) => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
 
  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-one ${
        navbar ? "fixed " : ""
      } ${className}`}
    >
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/client">
              <img
                src={require("../../assets/images/logo/funflexnegro.png")}
                alt="brand"
                style={{ height: "40px" }}
              />
            </Link>
          </div>

          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler d-block d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <MegaMenuOne />
           
             
            </div>
          </nav>

          <div className="right-widget d-flex align-items-center">
          <div className="cart">
              
              <Link
                to="/cart-client"
                className="d-flex "
              >
                <img
                  src={require("../../assets/images/icon/icon_02.svg").default}
                  alt="icon"
                />
              </Link>
            </div>
            <img
                  src={require("../../assets/images/icon/icon_01.svg").default}
                  alt="icon"
                />
            <div className="d-none d-sm-block">
           
            <div className="login-btn">
            
            <button
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             
      <span>Profile </span>    
        </button>
            <div className="dropdown-menu dropdown-menu-end">
              <Link to="/edit-client" className="dropdown-item">Edit profile</Link>
              <Link to="/history" className="dropdown-item">Shopping history</Link>
            </div>
          </div>
      
            </div>

            <div className="login-btn">
              
              <Link
                to="/"
                className="d-flex "
              >
                <img
                  src={require("../../assets/images/icon/icon_04.svg").default}
                  alt="icon"
                />
                <span>Logout</span>

              </Link>
            </div>

            

          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLogged;
