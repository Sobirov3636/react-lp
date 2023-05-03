import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../ulils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./SignUpForm.styles.scss";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("Password and Confirm password are not match");

    try {
      // const { user } = await createAuthUserWithEmailAndPassword(email, password);

      dispatch(signUpStart(email, password, displayName));

      setFormFields(defaultFormFields);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email is already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          name='displayName'
          id='name'
          onChange={handleChange}
          value={displayName}
        />

        <FormInput label='Email' type='email' required name='email' id='email' onChange={handleChange} value={email} />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          id='password'
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          name='confirmPassword'
          id='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button>Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
