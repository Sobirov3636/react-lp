import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutName,
  CheckoutQuantity,
  CheckoutQuntityArrow,
  CheckoutQuntityValue,
  CheckoutPrice,
  CheckoutRemoveButton,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

  const { name, imageUrl, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <CheckoutName> {name}</CheckoutName>
      <CheckoutQuantity>
        <CheckoutQuntityArrow onClick={removeItemHandler}>&#10094;</CheckoutQuntityArrow>
        <CheckoutQuntityValue>{quantity}</CheckoutQuntityValue>
        <CheckoutQuntityArrow onClick={addItemHandler}>&#10095;</CheckoutQuntityArrow>
      </CheckoutQuantity>
      <CheckoutPrice>{price}</CheckoutPrice>
      <CheckoutRemoveButton onClick={clearItemHandler}>&#10005;</CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
