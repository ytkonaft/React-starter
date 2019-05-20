import React from 'react';
import './index.scss';

const AuthLayout = ({ children, ...rest }) => {
  console.log(children);
  return (
    <div className="auth-layout">
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
