import React from 'react';
import Header from '../Header';
import logo from '../../assets/logo.png';
import Select from '../Select';
import Button from '../Button';

export default () => (
  <div>
    <Header links={['Purchase', 'My Orders', 'Sell']} logo={logo} />
    <Select withLabel label="name" />
    <Button>Save</Button>
    <a className="link">seemore</a>
  </div>
);
