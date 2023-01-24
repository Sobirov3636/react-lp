import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

  const { name, imageUrl, price, quantity } = item;
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'> {name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItemHandler}>
          &#10095;
        </span>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
