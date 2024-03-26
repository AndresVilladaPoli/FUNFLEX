import React from "react";
import { Link } from "react-router-dom";

const CopyrightFooter = () => {
  const footerList = [
    { id: 1, name: "Privacy & Terms." },
    { id: 2, name: "Contact Us" },
  ];
  return (
    <div className="row">
      <div className="col-lg-4 order-lg-0 mb-15">
        <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
          {footerList.map((list) => (
            <li key={list.id}>
              <Link >{list.name}</Link>
            </li>
          ))}
        </ul>
      </div>

  

      <div className="col-lg-4 order-lg-1 mb-15">
        <p className="copyright text-center">
          {" "}
          Copyright @{new Date().getFullYear()}{" "}
          
            
          {" "}
          
        </p>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
