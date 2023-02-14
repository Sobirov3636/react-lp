import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.styles.jsx";
import { useNavigate } from "react-router-dom";
import { CategoryPreviewContainer, CategoryPreviewDiv, CategoryPreviewTitle } from "./CategoryPreview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const handleRoute = () => navigate(`${title}`);
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle onClick={handleRoute}>{title.toUpperCase()}</CategoryPreviewTitle>
      </h2>
      <CategoryPreviewDiv>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryPreviewDiv>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
