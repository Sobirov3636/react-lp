// import { createContext, useState, useEffect } from "react";
// import { getCategoriesAndDocuments } from "../ulils/firebase/firebase.utils";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});

//   useEffect(() => {
//     (async function () {
//       const categoriesMap = await getCategoriesAndDocuments();
//       setCategoriesMap(categoriesMap);
//     })();
//   }, []);

//   const value = { categoriesMap };

//   return <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>;
// };
