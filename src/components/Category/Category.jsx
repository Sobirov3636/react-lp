import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../ProductCard/ProductCard";
import { CategoriyContainer } from "./Category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <CategoriyContainer>
      {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
    </CategoriyContainer>
  );
};

export default Category;
