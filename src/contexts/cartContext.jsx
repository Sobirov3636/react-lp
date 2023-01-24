import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  // if found, increment quantity and return updated cartItems
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  // else return cartItems.push(productToAdd)
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find the cart item to remove

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  //check if item has 1 quantity, remove it from the cart

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }
  //return back cartItems with reduced quantity of matched cart Item

  return cartItems.map((item) => (item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item));
};

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((item) => item.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
  removeItemFromCart: () => null,
  addItemToCart: () => null,
  setIsCartOpen: () => Boolean,
  clearItemFromCart: () => null,
});

/*

product {
    id,
    name,
    price,
    imageUrl
}

cartItem {
    ...product,
    quantity
}

*/

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(cartItems.reduce((total, item) => total + item.quantity * item.price, 0));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
