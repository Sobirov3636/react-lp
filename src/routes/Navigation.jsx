import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../ulils/firebase/firebase.utils";
import CartItem from "../components/CartIcon/CartIcon";
import CartIcon from "../components/CartIcon/CartIcon";
import CartDropdown from "../components/CartDropdown/CartDropdown";
import { CartContext } from "../contexts/cartContext";
import { NavigationContainer, LogoContainer, NavLinks, NavLink, SpanNavLink } from "./Navigation.styles";
import { GlobalStyles } from "../styles/Global.styles";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../Theme.styles";
import { useState } from "react";

const themeIconStyle = {
  cursor: "pointer",
  width: "20px",
  height: "20px",
};

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const [currentTheme, setcurrentTheme] = useState(() => JSON.parse(localStorage.getItem("theme")) || light);

  const signOutHandler = async () => {
    await signOutUser();
  };

  const handleTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    setcurrentTheme(theme);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrownLogo />
          </LogoContainer>
          <NavLinks>
            <NavLink to='./shop'>Shop</NavLink>

            {currentUser ? (
              <SpanNavLink onClick={signOutHandler}>Sign Out</SpanNavLink>
            ) : (
              <NavLink to='./auth'>Sign In</NavLink>
            )}

            {currentTheme.name === "light" ? (
              <BsFillMoonFill style={themeIconStyle} onClick={() => handleTheme(dark)} />
            ) : (
              <BsFillSunFill style={themeIconStyle} onClick={() => handleTheme(light)} />
            )}

            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Navigation;
