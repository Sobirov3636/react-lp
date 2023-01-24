/*
default button

google

enverted

*/

import { BaseButton, GoogleSignInButton, InvertedButton } from "./Button.styles";
import { lazy } from "react";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  base: "base",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);
const Button = ({ children, buttonTpye, ...otherprops }) => {
  const CustumButton = getButton(buttonTpye);

  return <CustumButton {...otherprops}>{children}</CustumButton>;
};

export default Button;
