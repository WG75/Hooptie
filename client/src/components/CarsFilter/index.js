// @flow

import React from 'react';
import FilterResults from '../../containers/FilterResults/FilterResultsContainer';
import Filters from '../../containers/Filters/FiltersContainer';

import './CarsFilter.css';

const FilterCars = () => (
  <div className="cars-filter">
    <div className="cars-filter__left-container">
      <Filters />
    </div>

    <div className="cars-filter__right-container">
      <FilterResults />
    </div>
  </div>
);

export default FilterCars;
