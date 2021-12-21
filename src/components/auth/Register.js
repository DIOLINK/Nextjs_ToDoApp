import React from 'react';
import useForm from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, unSetError } from '../../actions/ui';
import { startRegisterWithNameEmailPassword } from '../../actions/auth';
export const Register = ({ handleToggle }) => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(
        startRegisterWithNameEmailPassword(name, email, password),
      );
    }
    reset();
  };

  const MSG_ERRORS = {
    name: 'Name is required',
    email: 'Email is not valid',
    password: 'Password is not valid',
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError(MSG_ERRORS.name));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError(MSG_ERRORS.email));

      return false;
    } else if (password.trim().length < 5 || password2 !== password) {
      dispatch(setError(MSG_ERRORS.password));

      return false;
    }
    dispatch(unSetError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register...</h3>
      <form
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && (
          <div className="auth__alert-error">{msgError}</div>
        )}
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          autoComplete="off"
          required={true}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>
        <button
          className="btn btn-primary btn-block mb-5"
          onClick={handleToggle}
        >
          Already registered?
        </button>
      </form>
    </>
  );
};
