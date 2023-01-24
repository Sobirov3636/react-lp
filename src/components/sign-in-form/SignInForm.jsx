import React, { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../ulils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./SignInForm.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      setFormFields(defaultFormFields);
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

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
    // setCurrentUser(user);
    // createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-in-container'>
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
        <div className='buttons-container'>
          <Button>Sign in</Button>
          <Button buttonTpye={BUTTON_TYPE_CLASSES.google} type='button' onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
