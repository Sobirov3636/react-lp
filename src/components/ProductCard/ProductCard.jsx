import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Button from "../button/Button";
import { ProductCardContainer, ProductCardFooter } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCard = () => {
    addItemToCart(product);
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
