import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../ProductCard/ProductCard";
import { CategoriyContainer } from "./Category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
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
