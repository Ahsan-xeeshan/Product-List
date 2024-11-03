import { CartContext } from "../context";
import { useLocalStorage } from "../hooks";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("Cart", []);

  const addToCart = (id) => {
    setCartItems([
      ...cartItems,
      {
        id,
      },
    ]);
  };

  const removeFromCart = (id) => {
    const restItems = cartItems.filter((item) => item.id !== id);
    setCartItems(restItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
