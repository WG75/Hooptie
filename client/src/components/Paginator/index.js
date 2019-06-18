// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import './Paginator.css';

type Props = {
  nextPage: number,
  prevPage: number,
  lastPage: number,
  currentPage: number,
  onChange: (page: {page: number}) => void
};

const Paginator = ({
  nextPage,
  prevPage,
  lastPage,
  currentPage,
  onChange,
}: Props) => (
  <ul className="paginator">
    <li className="paginator__item">
      <a className="link" onClick={() => onChange({ page: 1 })}>
        First
      </a>
    </li>
    <li className="paginator__item">
      <a className="link" onClick={() => onChange({ page: prevPage })}>
        Previuos
      </a>
    </li>
    <li className="paginator__item">
      <span>{`Page ${currentPage} of ${lastPage}`}</span>
    </li>
    <li className="paginator__item">
      <a className="link" onClick={() => onChange({ page: nextPage })}>
        Next
      </a>
    </li>
    <li className="paginator__item">
      <a className="link" onClick={() => onChange({ page: lastPage })}>
        Last
      </a>
    </li>
  </ul>
);

export default Paginator;
