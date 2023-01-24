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

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
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
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
