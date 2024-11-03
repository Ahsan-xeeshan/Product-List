import CartItem from "./CartItem";
import FilterProduct from "./FilterProduct";
import SearchProduct from "./SearchProduct";
import SortProduct from "./SortProduct";

const CallToAction = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          <SortProduct />
          <FilterProduct />
        </div>
        <div className="flex gap-2 items-center">
          <SearchProduct />
          <CartItem />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
