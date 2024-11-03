import { useContext } from "react";
import { CategoryContext, SelectedCategoryContext } from "../../context";

const FilterModal = () => {
  const { categoryList } = useContext(CategoryContext);
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  );

  console.log(selectedCategory);

  return (
    <div
      className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="filter-button"
      tabIndex="-1"
      id="filter-dropdown"
    >
      <div className="py-1" role="none">
        {categoryList.map((category) => (
          <label
            key={category}
            className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4"
              id={`filter-option-${category}`}
              checked={selectedCategory === category}
              onChange={() =>
                setSelectedCategory((prev) =>
                  prev === category ? null : category
                )
              }
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterModal;
