import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className='categoriy-container'>
      {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Category;
