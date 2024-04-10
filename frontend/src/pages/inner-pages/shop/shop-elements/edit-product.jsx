import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProducts from "../../../../hooks/use-products";
import Seo from "../../../../components/common/seo/Seo";
import HeaderAdmin from "../../../../components/shop-standard/HeaderAdmin";
import ProductsData from "../shop-elements/components/single-product/ProductsData";

const EditProduct = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const [editedProduct, setEditedProduct] = useState(null);

    useEffect(() => {
      const foundProduct = ProductsData.find((p) => p.id === parseInt(id));
      if (foundProduct) {
        setEditedProduct(foundProduct);
      }
    }, [id]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedProduct({ ...editedProduct, [name]: value });
    };

  
    const handleUpdate = () => {

      alert("¡Updated product!");
    };
  
    if (!editedProduct) {
      return <p>Charging..</p>;
    }
  
    return (
        <>
            <Seo title="Edit Product" />
            <HeaderAdmin />
            <div className="user-data-page clearfix d-md-flex">
                <div className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column">

                    <div className="user-data-form mt-80 lg-mt-50">
                        <div className="container">
                            <div className="input-group-meta mb-25">
                                <label className="mt-20">
                                    Tittle: <br />
                                    <input
                                        type="text"
                                        name="title"
                                        value={editedProduct.title}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className="input-group-meta mb-25">
                                <label>
                                    <br /> Price: <br />
                                    <input
                                        name="price"
                                        value={editedProduct.price}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className="input-group-meta mb-25">
                                <label>
                                    <br /> Quantity available: <br />
                                    <input
                                        name="availability"
                                        value={editedProduct.availability}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                        <div className="description-wrapper">
                            <div className="input-group-meta">
                                <label>
                                    Description: <br />
                                    <textarea
                                        rows={14}
                                        cols={60}
                                        type="text"
                                        name="description"
                                        value={editedProduct.description}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="technical-wrapper">
                            <div className="input-group-meta">
                                <label>
                                    Technical Info: <br />
                                    <textarea
                                        rows={16}
                                        cols={70}
                                        type="text"
                                        name="technicalInfo"
                                        value={editedProduct.technicalInfo}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="button-wrapper">
                    <button className="theme-btn-one w-100 mt-50 mb-50" onClick={handleUpdate}>Save changes</button>
                    <Link to="/admin" className="theme-btn-one w-100 mb-50">Cancel</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProduct;