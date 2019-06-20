// @flow

import React from 'react';
import Header from '../Header';
import CarsFilter from '../../containers/CarsFilter/CarsFilterContainer';
import Footer from '../Footer';
import logo from '../../assets/logo.png';

import './CarsPage.css';

export default () => (
  <section className="page">
    <Header logo={logo} links={['Purchase', 'My Orders', 'Sell']} />
    <main className="page__main-content">
      <CarsFilter />
    </main>
    <Footer />
  </section>
);
