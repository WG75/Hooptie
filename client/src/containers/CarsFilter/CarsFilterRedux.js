/* ------------- Actions ------------- */
const QUERY_CHANGE = 'Auto1/FilterCars/QUERY_CHANGE';
const FETCH_CARS_REQUEST = 'Auto1/FilterCars/FETCH_CARS_REQUEST';
const FETCH_CARS_SUCCESS = 'Auto1/FilterCars/FETCH_CARS_REQUEST';
const FETCH_CARS_ERROR = 'Auto1/FilterCars/FETCH_CARS_REQUEST';

/* ------------- initial state ------------- */
const initialState = {
  query: {
    color: 'All',
    manufacture: 'All',
    sort: null,
    page: 1,
  },
  currentPage: 1,
  nextPage: 2,
  prevPage: 1,
  lastPage: 100,
  loading: false,
  error: false,
  cars: [],
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case QUERY_CHANGE:
      return { ...state, query: { ...state.query, ...action.payload.query } };

    case FETCH_CARS_REQUEST:
      return { ...state, loading: true };

    case FETCH_CARS_ERROR:
      return { ...state, error: true, loading: false };

    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        cars: action.payload.cars,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function fetchCarsRequest() {
  return { type: FETCH_CARS_REQUEST };
}

export function fetchCarsSuccess(cars) {
  return { type: FETCH_CARS_SUCCESS, payload: { cars } };
}

export function fetchCarsError(error) {
  return { type: FETCH_CARS_ERROR, payload: { error } };
}

export function queryChange(query) {
  return { type: QUERY_CHANGE, payload: { query } };
}

/* ------------- Thunks ------------- */
export function fetchCars(query) {
  return async (dispatch, getState, api) => {
    try {
      dispatch(fetchCarsRequest());
      const results = await api.CarsModel.paginate(query);

      dispatch(fetchCarsSuccess(results));
    } catch (error) {
      dispatch(fetchCarsError(error));
    }
  };
}
