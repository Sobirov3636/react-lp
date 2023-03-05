import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/Button";
import { ProductCardContainer, ProductCardFooter } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, price } = product;

  const handleAddToCard = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </ProductCardFooter>

      <Button buttonTpye='inverted' onClick={handleAddToCard}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
