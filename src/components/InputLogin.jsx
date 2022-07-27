import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import { MIN_NAME_LENGTH } from '../helpers/magicNumbers';

export default function InputLogin() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const isEmailValid = EmailValidator.validate(inputEmail);

    if (inputName.length > MIN_NAME_LENGTH && isEmailValid) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
    if (name === 'inputName') {
      setInputName(value);
    } else {
      setInputEmail(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGIN_SUCCESS', payload: { email: inputEmail, name: inputName } });
    history.push('/welcome');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="inputEmail"
          value={ inputEmail }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          id="name"
          name="inputName"
          value={ inputName }
          onChange={ handleChange }
        />
      </label>
      <button
        type="submit"
        disabled={ isBtnDisabled }
      >
        Entrar
      </button>
    </form>
  );
}
