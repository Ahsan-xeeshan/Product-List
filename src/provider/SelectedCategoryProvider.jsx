import { useState } from "react";
import { SelectedCategoryContext } from "../context";

const SelectedCategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export default SelectedCategoryProvider;
