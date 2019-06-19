// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import logo from '../../assets/logo.png';
import './Page404.css';

export default () => (
  <section className="page">
    <Header logo={logo} links={['Purchase', 'My Orders', 'Sell']} />
    <main className="page__main-content">
      <div className="not-found">
        <img className="not-found__logo" src={logo} alt="Auto1 logo image" />
        <h1 className="not-found__heading is-bold-large">404 - Not Found</h1>
        <span className="not-found__text is-regular-large">
          Sorry, the page you are looking for does not exist.
        </span>
        <span className="not-found__text is-regular-large">
          You can always go back to the
          <Link className="not-found__link link" to="/">
            homepage
          </Link>
.

        </span>
      </div>
    </main>
    <Footer />
  </section>
);
