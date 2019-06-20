// @flow
import React from 'react';
import Sort from '../../containers/Sort/SortContainer';
import Paginator from '../../containers/Paginator/PaginatorContainer';
import CarItem from '../CarItem';
import CarItemLoading from '../CarItem/CartItemLoading';
import './FilterResults.css';

type Props = {
  cars: Array<Object>,
  loading: boolean,
  totalPages: number
};

const FilterResults = ({ cars, loading, totalPages }: Props) => (
  <section className="results">
    <div className="results__top-container">
      <div className="results__top-left-container">
        <h1 className="results__heading is-bold-medium">Available cars</h1>
        <span className="results__summary is-regular-large">
          {`Showing 10 of ${totalPages * 10} results`}
        </span>
      </div>

      <div className="results__top-right-container">
        <Sort className="results__select" />
      </div>
    </div>

    <div className="results__container">
      {!loading && cars.length > 0 && cars.map((car, i) => <CarItem key={i} item={car} />)}
      {loading && [...Array(10)].map((index, i) => <CarItemLoading key={i} />)}
    </div>

    <div className="result__paginator">
      <Paginator />
    </div>
  </section>
);

export default FilterResults;
