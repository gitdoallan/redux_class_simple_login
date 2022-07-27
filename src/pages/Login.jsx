import React, { Component } from 'react';
import propTypes from 'prop-types';
import InputLogin from '../components/InputLogin';

export default class Login extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1>Página de Login</h1>
        <InputLogin
          history={ history }
        />
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
