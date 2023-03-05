import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item));

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
