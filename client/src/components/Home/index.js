import React from 'react';
import Header from '../Header';
import logo from '../../assets/logo.png';

export default () => (
  <div>
    <Header links={['Purchase', 'My Orders', 'Sell']} logo={logo} />
  </div>
);
