import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as EmailValidator from 'email-validator';
import { MIN_NAME_LENGTH } from '../helpers/magicNumbers';

export class InputLogin extends Component {
  state = {
    inputEmail: '',
    inputName: '',
    isBtnDisabled: true,
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const { inputEmail, inputName } = this.state;
    const isEmailValid = EmailValidator.validate(inputEmail);

    if (inputName.length > MIN_NAME_LENGTH && isEmailValid) {
      this.setState({ isBtnDisabled: false });
    } else {
      this.setState({ isBtnDisabled: true });
    }
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { inputEmail, inputName } = this.state;
    dispatch({ type: 'LOGIN_SUCCESS', payload: { email: inputEmail, name: inputName } });
    history.push('/welcome');
  }

  render() {
    const { email, name, isBtnDisabled } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="inputEmail"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            name="inputName"
            value={ name }
            onChange={ this.handleChange }
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
}

const mapStateToProps = ({ user }) => user;

InputLogin.propTypes = {
  dispatch: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(InputLogin);
