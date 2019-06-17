// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import './Paginator.css';

type Props = {
  nextPage: number,
  prevPage: number,
  lastPage: number,
  currentPage: number
};

const Paginator = ({
  nextPage, prevPage, lastPage, currentPage,
}: Props) => (
  <ul className="paginator">
    <li className="paginator__item">
      <Link className="link" to={`/cars/${1}`}>
        First
      </Link>
    </li>
    <li className="paginator__item">
      <Link className="link" to={`/cars/${prevPage}`}>
        Previuos
      </Link>
    </li>
    <li className="paginator__item">
      <span>{`Page ${currentPage} of ${lastPage}`}</span>
    </li>
    <li className="paginator__item">
      <Link className="link" to={`/cars/${nextPage}`}>
        Next
      </Link>
    </li>
    <li className="paginator__item">
      <Link className="link" to={`/cars/${lastPage}`}>
        Last
      </Link>
    </li>
  </ul>
);

export default Paginator;
