import React from 'react';
import Header from '../Header';
import logo from '../../assets/logo.png';
import Select from '../Select';
import Button from '../Button';
import CartItemLoading from '../CarItem/CartItemLoading';
import Paginator from '../Paginator';

export default () => (
  <div>
    <Header links={['Purchase', 'My Orders', 'Sell']} logo={logo} />
    <Paginator currentPage={2} lastPage={100} nextPage={3} prevPage={1} />
  </div>
);
