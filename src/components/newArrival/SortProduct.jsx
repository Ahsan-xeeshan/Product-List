import { useEffect, useRef, useState } from "react";
import DownArrowIcon from "../svgIcon/DownArrowIcon";
import SortModal from "./SortModal";

const SortProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={modalRef}>
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
        id="menu-button"
        aria-expanded={showModal}
        aria-haspopup="true"
        aria-controls="sort-modal"
        onClick={() => setShowModal(!showModal)}
      >
        Sort
        <DownArrowIcon />
      </button>

      {showModal && <SortModal id="sort-modal" />}
    </div>
  );
};

export default SortProduct;
