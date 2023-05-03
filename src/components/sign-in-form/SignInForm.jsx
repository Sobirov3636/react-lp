import React, { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../ulils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { useNavigate } from "react-router-dom";
import { ButtonsContainer, SignInContainer } from "./SignInForm.styles.jsx";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      setFormFields(defaultFormFields);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Cannot find user, please check your");
      } else if (error.code === "auth/wrong-password") {
        alert("incorrect password for email");
      } else {
        console.log(error);
      }
    }
  };

  const logGoogleUser = () => {
    dispatch(googleSignInStart());
    navigate("/");
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          id='signInEmail'
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          id='signInPassword'
          onChange={handleChange}
          value={password}
        />
        <ButtonsContainer>
          <Button>Sign in</Button>
          <Button buttonTpye={BUTTON_TYPE_CLASSES.google} type='button' onClick={logGoogleUser}>
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
