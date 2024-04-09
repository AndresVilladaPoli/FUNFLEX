import React from "react";
import img1 from "../../../../assets/images/icon/profile.svg";
import Seo from "../../../../components/common/seo/Seo";
import HeaderAdmin from "../../../../components/shop-standard/HeaderAdmin";

const EditAdmin = () => {
  

  

  return (
    <>
      <Seo title="Edit Profile" />
      <HeaderAdmin />

      <div className="user-data-page clearfix d-md-flex">
        <div className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column">
          <div className="illustration-holderadd">
            <img src={img1} alt="icon" className="add" />
         
           
            
          </div>
        </div>

        <div className="form-wrapper">
          

          <div className="user-data-form mt-80 lg-mt-50">
            <h2 className="font-recoleta">Edit administrator profile</h2>
            {/* <EditAdminForm/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAdmin;
