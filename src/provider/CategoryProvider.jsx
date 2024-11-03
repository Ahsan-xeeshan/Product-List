import { CategoryContext } from "../context";
import { useCategory } from "../hooks";

const ProductProvider = ({ children }) => {
  const { categoryList, loading, error } = useCategory();

  return (
    <CategoryContext.Provider value={{ categoryList, loading, error }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default ProductProvider;
