// @flow

import React from 'react';
import './CarItem.css';

const CartItemLoading = () => (
  <div className="cart-item cart-item--isloading">
    <div className="cart-item__left-container">
      <div className="cart-item__image-container">
        <div className="cart-item__image" />
      </div>
    </div>

    <div className="cart-item__right-container">
      <div className="car-item__name" />

      <div className="cart-item__info-container" />

      <div className="cart-item__link" />
    </div>
  </div>
);

export default CartItemLoading;
