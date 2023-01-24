import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Button from "../button/Button";
import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCard = () => {
    addItemToCart(product);
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <Button buttonTpye='inverted' onClick={handleAddToCard}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
