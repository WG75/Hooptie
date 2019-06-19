import React from 'react';
import { create } from 'react-test-renderer';
import SelectedCar from '../../components/SelectedCar';

describe('SelectedCar component', () => {
  test('it matches the snapshot', () => {
    const component = create(<SelectedCar
      isLoading={false}
      car={{
        stockNumber: 10293,
        manufacturerName: 'BMW',
        modelName: '6er',
        color: 'yellow',
        mileage: {
          number: 123501,
          unit: 'km',
        },
        fuelType: 'Diesel',
        pictureUrl: 'http://localhost:3001/car.svg',
      }}
    />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
