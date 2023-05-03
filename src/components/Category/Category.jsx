import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../spinner/Spinner";
import { CategoriyContainer, CategoryTitle } from "./Category.styles";

const Category = () => {
  const { category } = useParams();

  const isLoading = useSelector(selectCategoriesIsLoading);

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoriyContainer>
          {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </CategoriyContainer>
      )}
    </>
  );
};

export default Category;
