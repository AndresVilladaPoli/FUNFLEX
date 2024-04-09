import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/images/icon/add.svg";
import Add from "../../../../components/common/form/AddProduct";
import Seo from "../../../../components/common/seo/Seo";
import HeaderAdmin from "../../../../components/shop-standard/HeaderAdmin";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    technicalinfo: "",
    availability: "",
    quantity: 0,
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    setSelectedFile(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    console.log("Selected file:", selectedFile);
  };

  return (
    <>
      <Seo title="Add Product" />
      <HeaderAdmin />

      <div className="user-data-page clearfix d-md-flex">
        <div className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column">
          <div className="illustration-holderadd">
            <img src={img1} alt="icon" className="add" />
              <div className="edit-and-upload">
                {/* <img
                  src={require("../../../../assets/images/icon/edit.svg").default}
                  alt="icon"
                /> */}
              
                <div className="upload-photo">
            <input
              type="file"
              name="photo"
              onChange={handleChange} 
              required
            />
          </div>
              </div>
           
            
          </div>
        </div>

        <div className="form-wrapper">
          

          <div className="user-data-form mt-80 lg-mt-50">
            <h2 className="font-recoleta">Add product</h2>
            <Add
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
