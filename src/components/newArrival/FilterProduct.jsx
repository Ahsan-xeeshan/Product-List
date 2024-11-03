import { useEffect, useRef, useState } from "react";
import DownArrowIcon from "../svgIcon/DownArrowIcon";
import FilterModal from "./FilterModal";

const FilterProduct = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const filterModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        filterModalRef.current &&
        !filterModalRef.current.contains(e.target)
      ) {
        setShowFilterModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={filterModalRef}>
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
        id="filter-button"
        aria-expanded={showFilterModal}
        aria-haspopup="true"
        aria-controls="filter-modal"
        onClick={() => setShowFilterModal(!showFilterModal)}
      >
        Filter
        <DownArrowIcon />
      </button>

      {showFilterModal && <FilterModal id="filter-modal" />}
    </div>
  );
};

export default FilterProduct;
