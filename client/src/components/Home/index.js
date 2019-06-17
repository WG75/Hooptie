import React from 'react';
import Header from '../Header';
import logo from '../../assets/logo.png';
import Select from '../Select';
import Button from '../Button';
import CartItemLoading from '../CarItem/CartItemLoading';

export default () => (
  <div>
    <Header links={['Purchase', 'My Orders', 'Sell']} logo={logo} />
    <CartItemLoading />
  </div>
);
