/* ------------- Actions ------------- */
const FETCH_CAR_REQUEST = 'Auto1/SelectedCar/FETCH_CAR_REQUEST';
const FETCH_CAR_ERROR = 'Auto1/SelectedCar/FETCH_CAR_ERROR';
const FETCH_CAR_SUCCESS = 'Auto1/SelectedCar/FETCH_CAR_SUCCESS';

/* ------------- initial state ------------- */
const initialState = {
  car: null,
  loading: true,
  error: false,
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_CAR_REQUEST:
      return { ...state, loading: true, error: false };

    case FETCH_CAR_ERROR:
      return { ...state, loading: false, error: true };

    case FETCH_CAR_SUCCESS:
      return {
        ...state, error: false, loading: false, car: action.payload.car,
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function fetchCarRequest() {
  return { type: FETCH_CAR_REQUEST };
}

export function fetchCarSuccess(car) {
  return { type: FETCH_CAR_SUCCESS, payload: car };
}

export function fetchCarError(error) {
  return { type: FETCH_CAR_ERROR, payload: { error } };
}

/* ------------- Thunks ------------- */
export function fetchCar(carId) {
  return async (dispatch, getState, api) => {
    try {
      const result = await api.CarsModel.getOne(carId);

      dispatch(fetchCarSuccess(result));
    } catch (error) {
      dispatch(fetchCarError(error));
    }
  };
}
