import React from "react";
import { Link } from "react-router-dom";
const Add = ({ formData, handleChange, handleSubmit }) => {


  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Play Station"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Price*</label>
            <input type="text" pattern="\$[0-9]*" name="price" value={formData.price} onChange={handleChange} placeholder="$0" required />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Description*</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Lorem ipsun" required />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Technical info*</label>
            <input type="text" name="technicalinfo" value={formData.technicalinfo} onChange={handleChange} placeholder="Lorem ipsun" required />
          </div>
        </div>

       < div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Product availability*</label>
            <div className="dropdown">
              <div className="custom-dropdown">
                <select
                  className="form-control"
                  name="availability" 
                  value={formData.availability} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select</option>
                  <option value="instock">In stock</option>
                  <option value="outofstock">Out of stock</option>
                </select>
                <div className="arrow-down"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Quantity available*</label>
            <input
              type="number"
              placeholder="0" name="quantity" value={formData.quantity} onChange={handleChange}
              required
            />
          </div>
        </div>

        
{/*          
          <div className="upload-photo">
            <input
              type="file"
              name="photo"
              onChange={handleChange} 
              required
            />
          </div> */}
        

        <div className="col-12">
          <button type="submit" className="theme-btn-one w-100 mt-50 mb-50">ADD PRODUCT</button>
        </div>
        <div className="col-12">
          <button className="theme-btn-one w-100 mt-5 mb-50"><Link to="/admin">CANCEL</Link></button>
        </div>
      </div>
    </form>
  );
};

export default Add;

   