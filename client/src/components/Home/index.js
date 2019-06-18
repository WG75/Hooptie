// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import CarsFilter from '../../containers/CarsFilter/CarsFilterContainer';
import Footer from '../Footer';
import logo from '../../assets/logo.png';

import './Home.css';

export default () => (
  <section className="home-page">
    <Header logo={logo} links={['Purchase', 'My Orders', 'Sell']} />
    <main className="home-page__main-content">
      <CarsFilter />
    </main>
    <Footer />
  </section>
);
