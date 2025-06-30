import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const LS_KEY = 'jpaecommerce.items';

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState(() =>
    localStorage.getItem(LS_KEY) ? JSON.parse(localStorage.getItem(LS_KEY)) : []
  );

  const addItem = (item, qty = 1) => {
    const existingItem = items.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setItems(
        items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + qty }
            : cartItem
        )
      );
    } else {
      setItems([...items, { ...item, quantity: qty }]);
    }
    localStorage.setItem(
      LS_KEY,
      JSON.stringify([...items, { ...item, quantity: qty }])
    );
  };

  const increaseItem = (product) => {
    const updatedCart = items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedCart);
    localStorage.setItem(LS_KEY, JSON.stringify(updatedCart));
  };

  const decreaseItem = (product) => {
    const item = items.find((item) => item.id === product.id);
    if (!item) return;

    if (item.quantity > 1) {
      const updatedCart = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setItems(updatedCart);
      localStorage.setItem(LS_KEY, JSON.stringify(updatedCart));
    } else {
      const updatedCart = items.filter((item) => item.id !== product.id);
      setItems(updatedCart);
      localStorage.setItem(LS_KEY, JSON.stringify(updatedCart));
    }
  };

  const deleteItem = (product) => {
    const updatedCart = items.filter((item) => item.id !== product.id);
    setItems(updatedCart);
    localStorage.setItem(LS_KEY, JSON.stringify(updatedCart));
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem(LS_KEY);
  };

  const itemQuantity = (product) => {
    const item = items.find((item) => item.id === product.id);
    return item ? item.quantity : 0;
  };

  const isInCart = (product) => {
    return items.some((item) => item.id === product.id);
  };

  const totalProducts = items.length;
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        increaseItem,
        decreaseItem,
        deleteItem,
        clearItems,
        totalItems,
        totalProducts,
        totalPrice,
        isInCart,
        itemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
}

export default CartContextProvider;
