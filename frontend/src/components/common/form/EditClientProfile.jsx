import React, { useState } from "react";

const EditAdminForm = () => {
  const [password, setPassword] = useState(false);
  const passwordHandler = () => setPassword(!password);

  const [confirmPassword, setConfirmPassword] = useState(false);
  const confirmPasswordHandler = () => setConfirmPassword(!confirmPassword);



 
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
          <div className="input-group-meta mb-25">
            <label>Address</label>
            <input type="text" placeholder="Street Avenue"/>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Telephone*</label>
            <input type="tel" placeholder="+1 22457545" required />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password*</label>
            <input
              type={password ? " text" : "password"}
              placeholder="******"
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
          <button className="theme-btn-one w-100 mt-50 mb-50">UPDATE</button>
        </div>
        <div className="col-12">
          <button className="theme-btn-one w-100 mt-5 mb-50">CANCEL</button>
        </div>
      </div>
    </form>
  );
};

export default EditAdminForm;
