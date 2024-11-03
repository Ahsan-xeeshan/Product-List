/* eslint-disable react/prop-types */
import { ProductContext } from "../context";
import { useProduct } from "../hooks";

const ProductProvider = ({ children }) => {
  const { productData, loading, error } = useProduct();

  return (
    <ProductContext.Provider value={{ productData, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
