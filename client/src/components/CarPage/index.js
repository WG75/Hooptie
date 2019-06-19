// @flow

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import logo from '../../assets/logo.png';
import Favourites from '../../containers/Favourites/FavouritesContainer';
import SelectedCar from '../../containers/SelectedCar/SelectedCarContainer';

import './CarPage.css';

export default () => (
  <section className="page">
    <Header logo={logo} links={['Purchase', 'My Orders', 'Sell']} />

    <main className="page__main-content">
      <div className="page__jumpotran" />

      <article className="page__content-wrapper">
        <SelectedCar />
        <Favourites />
      </article>
    </main>
    <Footer />
  </section>
);
