import { useEffect, useState } from "react";

const useCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    setLoading({ state: true, message: "Fetching category list..." });
    setError(null);

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      if (!response.ok) {
        throw new Error(`Fetching product data failed: ${response.status}`);
      }
      const data = await response.json();
      setCategoryList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return { categoryList, loading, error };
};

export default useCategory;
