import { useContext } from "react";
import { CartContext } from "../../context";
import CartIcon from "../svgIcon/CartIcon";

const CartItem = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 flex items-center p-2">
        <CartIcon />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cartItems.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
};

export default CartItem;
