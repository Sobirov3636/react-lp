import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./categories.styles.scss";
import CategoryItem from "./components/Directory-item/DirectoryItem";
import Directory from "./components/Directory/Directory";
import Home from "./pages/Home";

import Navigation from "./routes/Navigation";
import Auth from "./pages/Auth/Auth";
import Shop from "./pages/Shop/Shop";
import Checkout from "./pages/Checkout/Checkout";

function App() {
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
