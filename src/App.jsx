import { Route, Routes } from "react-router-dom";

import "./categories.styles.scss";

import Home from "./pages/Home";

import Navigation from "./routes/Navigation";
import Auth from "./pages/Auth/Auth";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "./ulils/firebase/firebase.utils";
import { useEffect } from "react";
import { setCurrenUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrenUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
