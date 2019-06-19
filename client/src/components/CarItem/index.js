// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import './CarItem.css';

type Props = {
  item: Object,
};

const CarItem = ({ item }: Props) => (item ? (
  <div className="cart-item">
    <div className="cart-item__left-container">
      {item.pictureUrl && (
      <figure className="cart-item__image-container">
        <img
          className="cart-item__image"
          src={item.pictureUrl}
          alt="car picture"
        />
      </figure>
      )}
    </div>
    <div className="cart-item__right-container">
      {item.manufacturerName && (
      <h1 className="car-item__name is-bold-meduim">{item.manufacturerName}</h1>
      )}
      <div className="cart-item__info-container">
        <span className="cart-item__info">
          {item.stockNumber
              && item.mileage
              && item.mileage.number
              && `Stock # ${item.stockNumber} - ${item.mileage.number
                / 1000} KM - ${item.fuelType} - ${item.color}`}
        </span>
      </div>

      <Link className="cart-item__link link" to={`/cars/${item.stockNumber}`}>view details</Link>


    </div>
  </div>
) : null);

export default CarItem;
