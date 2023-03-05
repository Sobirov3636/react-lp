import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import { signOutUser } from "../ulils/firebase/firebase.utils";
import CartIcon from "../components/CartIcon/CartIcon";
import CartDropdown from "../components/CartDropdown/CartDropdown";
import { NavigationContainer, LogoContainer, NavLinks, NavLink, SpanNavLink } from "./Navigation.styles";
import { GlobalStyles } from "../styles/Global.styles";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../Theme.styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { selectIsCartOpen } from "../store/cart/cart.selector";

const themeIconStyle = {
  cursor: "pointer",
  width: "20px",
  height: "20px",
};

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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
