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
              name="title"
              placeholder="Play Station"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Price*</label>
            <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="$0" required />
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
            <label>Category*</label>
            <div className="dropdown">
              <div className="custom-dropdown">
                <select
                  className="form-control"
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  required
                >
                  <option value="">Select</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Consoles">Consoles</option>
                  <option value="Videogames">Videogames</option>
                  <option value="Music">Music</option>


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

   