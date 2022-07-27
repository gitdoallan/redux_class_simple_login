import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

export class Welcome extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div>
        Olá,
        {' '}
        {name}
        . Seu e-mail é:
        {' '}
        {email}
        .
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => user;

Welcome.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Welcome);
