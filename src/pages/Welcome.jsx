import React from 'react';
import { useSelector } from 'react-redux';

export default function Welcome() {
  const { email, name } = useSelector((state) => state.user);
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
