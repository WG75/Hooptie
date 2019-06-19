// @flow

import React from 'react';
import Button from '../Button';
import './Favourites.css';

type Props = {
  isSaved: boolean,
  onRemove: () => void,
  onSave: () => void
};

const Favourites = ({ isSaved, onRemove, onSave }: Props) => (
  <div className="favourites">
    {isSaved ? (
      <div className="favourites__wrapper">
        <p className="favourites__hint is-regular-medium">
          This car is saved in your collection of favourite items. However if
          you want to remove it click the button below.
        </p>

        <Button onClick={onRemove}>remove</Button>
      </div>
    ) : (
      <div className="favourites__wrapper">
        <p className="favourites__hint is-regular-medium">
          If you like this car, click the button and save it in your collection
          of favourite items.
        </p>

        <Button className="favourites__button" onClick={onSave}>
          save
        </Button>
      </div>
    )}
  </div>
);

export default Favourites;
