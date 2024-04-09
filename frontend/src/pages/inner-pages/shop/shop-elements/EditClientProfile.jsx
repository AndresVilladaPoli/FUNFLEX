import React from "react";
import img1 from "../../../../assets/images/icon/profile.svg";
import Seo from "../../../../components/common/seo/Seo";
import HeaderLogged from "../../../../components/shop-standard/HeaderLogged";
import EditClientForm from "../../../../components/common/form/EditClientProfile";

const EditClient = () => {
  
  return (
    <>
      <Seo title="Edit Profile" />
      <HeaderLogged />

      <div className="user-data-page clearfix d-md-flex">
        <div className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column">
          <div className="illustration-holderadd">
            <img src={img1} alt="icon" className="add" /> 
          </div>
        </div>

        <div className="form-wrapper">
          
          <div className="user-data-form mt-80 lg-mt-50">
            <h2 className="font-recoleta">Edit customer profile</h2>
            <EditClientForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditClient;
