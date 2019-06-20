/* ------------- Actions ------------- */
import { push } from 'connected-react-router';

export const QUERY_CHANGE = 'Auto1/FilterCars/QUERY_CHANGE';
export const FETCH_CARS_REQUEST = 'Auto1/FilterCars/FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'Auto1/FilterCars/FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'Auto1/FilterCars/FETCH_CARS_ERROR';

/* ------------- initial state ------------- */
export const initialState = {
  query: {
    color: '',
    manufacture: '',
    sort: null,
    page: 1,
  },
  currentPage: 1,
  nextPage: 2,
  prevPage: 1,
  lastPage: null,
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
        currentPage: state.query.page,
        nextPage:
          state.query.page + 1 > action.payload.totalPageCount
            ? action.payload.totalPageCount
            : state.query.page + 1,
        prevPage: state.query.page - 1 || 1,
        lastPage: action.payload.totalPageCount,
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
  return { type: FETCH_CARS_SUCCESS, payload: cars };
}

export function fetchCarsError(error) {
  return { type: FETCH_CARS_ERROR, payload: { error } };
}

export function queryChange(query) {
  return {
    type: QUERY_CHANGE,
    payload: { query },
  };
}

/* ------------- Thunks ------------- */
export function fetchCars(query) {
  return async (dispatch, getState, api) => {
    try {
      const {
        page, color, sort, manufacturer,
      } = query;

      const url = `/cars?${`page=${page || 1}`}${
        color ? `&color=${color}` : ''
      }${manufacturer ? `&manufacturer=${manufacturer}` : ''}${
        sort ? `&sort=${sort}` : ''
      }`;

      dispatch(queryChange({ ...query, page: parseInt(page, 10) || 1 }));
      dispatch(fetchCarsRequest());
      const results = await api.CarsModel.paginate(query);
      dispatch(fetchCarsSuccess(results));
      dispatch(push(url));
    } catch (error) {
      dispatch(fetchCarsError(error));
    }
  };
}
