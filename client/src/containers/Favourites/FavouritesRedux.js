/* ------------- Actions ------------- */
const ADD_CAR_REQUEST = 'Auto1/Favourites/ADD_CAR_REQUEST';
const REMOVE_CAR_REQUEST = 'Auto1/Favourites/REMOVE_CAR_REQUEST';
const SEARCH_CAR_REQUEST = 'Auto1/Favourites/SEARCH_CAR_REQUEST';

/* ------------- initial state ------------- */
const initialState = {
  collection: [],
  isSaved: false,
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CAR_REQUEST:
      return {
        ...state,
        collection: [...state.collection, action.payload.carId],
        isSaved: true,
      };

    case REMOVE_CAR_REQUEST:
      return {
        ...state,
        collection: state.collection.filter(id => id !== action.payload.carId),
        isSaved: false,
      };

    case SEARCH_CAR_REQUEST:
      return {
        ...state,
        error: false,
        loading: false,
        isSaved: state.collection.includes(action.payload.carId),
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function saveToCollection(carId) {
  return { type: ADD_CAR_REQUEST, payload: { carId } };
}

export function removeFromCollection(carId) {
  return { type: REMOVE_CAR_REQUEST, payload: { carId } };
}

export function searchInCollection(carId) {
  return { type: SEARCH_CAR_REQUEST, payload: { carId } };
}
