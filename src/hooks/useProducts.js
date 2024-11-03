import { useContext, useEffect, useState } from "react";
import {
  SearchContext,
  SelectedCategoryContext,
  SelectedSortContext,
} from "../context";

const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  const { selectedCategory } = useContext(SelectedCategoryContext);
  const { selectedSort } = useContext(SelectedSortContext);
  const { searchTerm } = useContext(SearchContext);

  const applyFilters = (data) => {
    let filteredData = data;
    if (searchTerm) {
      filteredData = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredData.sort((a, b) =>
      selectedSort === "asc" ? a.price - b.price : b.price - a.price
    );
  };

  const fetchProductData = async () => {
    setLoading({ state: true, message: "Fetching product data..." });
    setError(null);

    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error(`Fetching product data failed: ${response.status}`);
      }
      const data = await response.json();
      setProductData(applyFilters(data));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  const fetchCategoryItem = async () => {
    setLoading({ state: true, message: "Fetching category data..." });
    setError(null);

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${selectedCategory}`
      );
      if (!response.ok) {
        throw new Error(`Fetching category data failed: ${response.status}`);
      }
      const data = await response.json();
      setProductData(applyFilters(data));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchCategoryItem();
    } else {
      fetchProductData();
    }
  }, [selectedCategory, selectedSort, searchTerm]);

  return { productData, loading, error };
};

export default useProduct;
