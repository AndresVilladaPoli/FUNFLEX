
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Add from "../../../../components/common/form/AddProduct";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../redux/features/product-slice";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    technicalinfo: "",
    quantity: 0,
    category: "",
    img:null
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    setSelectedFile(file);
  
    setFormData({
      ...formData,
      img: URL.createObjectURL(file)
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const addNewProduct = (event) => {
    event.preventDefault();
    const newProductData = {
      ...formData,
      img: URL.createObjectURL(selectedFile) 
    };
    dispatch(addProduct(newProductData));
    navigate("/admin");
  };
  return (
    <>
      <div className="user-data-page clearfix d-md-flex">
        <div className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column">
          <div className="illustration-holderadd">
            <div className="edit-and-upload">
              <div className="upload-photo">
                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange} 
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
              handleSubmit={addNewProduct}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
