import { useContext } from "react";
import { SearchContext } from "../../context";
import { useDebounce } from "../../hooks";
import SearchIcon from "../svgIcon/SearchIcon";

const SearchProduct = () => {
  const { setSearchTerm } = useContext(SearchContext);

  const doSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
      <SearchIcon />
      <input
        className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
        placeholder="Find anything..."
        aria-label="Search products"
        type="text"
        onChange={handleChange}
        style={{ caretColor: "rgb(107, 114, 128)" }}
      />
    </div>
  );
};

export default SearchProduct;
