import React from 'react';
import Login from './components/Login';
import Signup from './components/Login';

const Auth = ({
  match: {
    params: { type }
  }
}) => {
  console.log(type);
  switch (type) {
    case 'sign-in':
      return <Login />;
    case 'sign-up':
      return <Signup />;
    default:
      return <h1>404</h1>;
  }
};

export default Auth;
