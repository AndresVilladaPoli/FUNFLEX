import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, deleteProduct as deleteProductAction } from "../redux/features/product-slice";

const useProducts = () => {
  const [products, setProducts] = useState(useSelector(selectProducts));
  const dispatch = useDispatch();

  const deleteProduct = (productId) => {
    dispatch(deleteProductAction(productId));

    setProducts(products.filter(product => product.id !== productId));
  };

  return {
    products,
    deleteProduct
  };
};

export default useProducts;