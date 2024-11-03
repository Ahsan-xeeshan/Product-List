import { useState } from "react";
import { SelectedSortContext } from "../context";

const SelectedSortProvider = ({ children }) => {
  const [selectedSort, setSelectedSort] = useState(null);
  return (
    <SelectedSortContext.Provider value={{ selectedSort, setSelectedSort }}>
      {children}
    </SelectedSortContext.Provider>
  );
};

export default SelectedSortProvider;
