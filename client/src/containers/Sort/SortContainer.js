// @flow

import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import Select from '../../components/Select';
import { fetchCars } from '../CarsFilter/CarsFilterRedux';

type Props = {
  onChange: (value: Object) => void,
  className: string,
  query: Object
};


const Sort = ({ onChange, className, query }: Props) => (
  <Select
    defaultValue={
      query.sort && {
        label:
          query.sort === 'asc' ? 'Mileage - Ascending' : 'Mileage - Descending',
        value: query.sort,
      }
    }
    className={className}
    onChange={sort => onChange({ ...query, sort, page: 1 })}
    options={[
      { label: 'Mileage - Ascending', value: 'asc' },
      { label: 'Mileage - Descending', value: 'des' },
    ]}
    withLabel
    label="sort by"
  />
);

function mapStateToProps(state: any) {
  return {
    query: qs.parse(state.router.location.search),
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    onChange: (query: Object) => dispatch(fetchCars(query)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort);
