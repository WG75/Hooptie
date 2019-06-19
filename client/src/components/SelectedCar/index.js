// @flow

import React from 'react';
import './SelectedCar.css';

type Props = {
  car: Object,
  isLoading: boolean
};

const Favourites = ({ car, isLoading }: Props) => !console.log(isLoading) && (
  !isLoading && car ? (
    <div className="selected-car">
      <h1 className="selected-car__heading is-bold-large">{car.manufacturerName}</h1>
      <span className="cart-item__info is-regular-large">
        {car.stockNumber
        && car.mileage
        && car.mileage.number
        && `Stock # ${car.stockNumber} - ${car.mileage.number / 1000} KM - ${
          car.fuelType
        } - ${car.color}`}
      </span>

      <p className="selected-car__about-paragraph is-regular-medium">
      This car is currently available and can be delivered as soon as tomorrow
      morning. Please be aware that delivery times shown in this page are not
      definitive and may change due to bad weather conditions.
      </p>
    </div>
  ) : 'loading.........'
);
export default Favourites;
