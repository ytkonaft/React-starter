import React, { Fragment } from 'react';
import Header from 'ui/components/Header';
import './index.scss';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    {children}
  </div>
);

export default MainLayout;
