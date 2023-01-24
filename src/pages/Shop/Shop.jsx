import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview";
import Category from "../../components/Category/Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
