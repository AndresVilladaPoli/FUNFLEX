import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditAdminForm = () => {
  const [password, setPassword] = useState(false);
  const passwordHandler = () => setPassword(!password);

  const [confirmPassword, setConfirmPassword] = useState(false);
  const confirmPasswordHandler = () => setConfirmPassword(!confirmPassword);

  const handleClick = () => {
    alert("¡Edited admin data!");
  };

 
  return (
    <form>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Name*</label>
            <input type="text" placeholder="Juan" required />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>User*</label>
            <input type="text" placeholder="Juan123" required />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email*</label>
            <input type="email" placeholder="Juan@gmail.com" required />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Telephone*</label>
            <input type="tel" placeholder="+1 2532012458" required />
          </div>
        </div>

        <div className="col-12">
  <div className="input-group-meta mb-30">
    <label>Document Type*</label>
    <div className="dropdown">
      <div class="custom-dropdown">
        <select className="form-control" required>
          <option value="">Select a document type</option>
          <option value="passport">Passport</option>
          <option value="id_card">ID Card</option>
          <option value="driver_license">Driver's License</option>
          <option value="other">Other</option>
        </select>
        <div class="arrow-down"></div>
      </div>
    </div>
  </div>
</div>
        

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Identification</label>
            <input
              type="text"
              pattern="[0-9]{10}"
              title="Enter a 10-digit identification number"
              placeholder="Enter your identification number"
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password*</label>
            <input
              type={password ? " text" : "password"}
              placeholder="Enter Password"
              className="pass_log_id"
              required
            />
            <span className="placeholder_icon">
              <span
                className={password ? " eye-slash" : "passVicon"}
                onClick={passwordHandler}
              >
                <img
                  src={
                    require("../../../assets/images/icon/icon_67.svg").default
                  }
                  alt="icon"
                />
              </span>
            </span>
          </div>
        </div>


    

        <div className="col-12">
          <button onClick={handleClick} className="theme-btn-one w-100 mt-50 mb-50">UPDATE</button>
        </div>
        <div className="col-12">
        <Link to="/admin" className="theme-btn-one w-100 mb-50">CANCEL</Link>
        </div>
      </div>
    </form>
  );
};

export default EditAdminForm;
