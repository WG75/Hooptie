import React from 'react';
import Header from '../Header';
import logo from '../../assets/logo.png';
import Select from '../Select';

export default () => (
  <div>
    <Header links={['Purchase', 'My Orders', 'Sell']} logo={logo} />
    <Select withLabel label="name" />
  </div>
);
