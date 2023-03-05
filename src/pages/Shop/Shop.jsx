import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview";
import Category from "../../components/Category/Category";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocuments } from "../../ulils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    })();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
