import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import AddToCartIcon from "../svgIcon/AddToCartIcon";

const ProductCard = ({ image, title, category, price, id }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [isAdded, toggleAdded] = useState(false);

  useEffect(() => {
    const found = cartItems.find((item) => item.id === id);
    toggleAdded(found);
  }, []);

  const handleCart = () => {
    const found = cartItems.find((item) => item.id === id);
    if (!found) {
      addToCart(id);
    } else {
      removeFromCart(id);
    }
    toggleAdded(!isAdded);
  };

  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4 h-[120px]">
        <div className="mt-2">
          <h3 className="text-sm text-gray-700">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <div className="mt-2">
          <p className="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </div>
      <div
        onClick={handleCart}
        className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1"
      >
        <div className="flex px-3 py-2 justify-center">
          <AddToCartIcon />
          {isAdded ? "Remove From Cart" : "Add To Cart"}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
