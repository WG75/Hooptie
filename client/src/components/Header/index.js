// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

type Props = {
  logo: string,
  links: Array<string>
};

const Header = ({ logo, links }: Props) => (
  <header className="header">
    <nav className="header__nav">
      <div className="header__logo-container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo-image" src={logo} alt="Auto1 logo" />
        </Link>
      </div>

      <div className="header__nav-right">
        {links
          && links.length > 0
          && links.map((link, i) => (
            <Link key={i} className="header__nav-link is-regular-large" to="/">
              {link}
            </Link>
          ))}
      </div>
    </nav>
  </header>
);

export default Header;
