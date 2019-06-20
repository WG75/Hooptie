// @flow

import React from 'react';
import Select from '../Select';

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

export default Sort;
