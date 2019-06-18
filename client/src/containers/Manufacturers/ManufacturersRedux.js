/* ------------- Actions ------------- */
const FETCH_MANUFACTURERS_REQUEST = 'Auto1/Manufacturers/FETCH_MANUFACTURERS_REQUEST';
const FETCH_MANUFACTURERS_SUCCESS = 'Auto1/Manufacturers/FETCH_MANUFACTURERS_SUCCESS';
const FETCH_MANUFACTURERS_ERROR = 'Auto1/Manufacturers/FETCH_MANUFACTURERS_ERROR';

/* ------------- initial state ------------- */
const initialState = {
  values: [],
  loading: false,
  error: false,
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_MANUFACTURERS_REQUEST:
      return { ...state, loading: true, error: false };

    case FETCH_MANUFACTURERS_ERROR:
      return { ...state, error: true, loading: false };

    case FETCH_MANUFACTURERS_SUCCESS:
      return {
        values: action.payload.manufacturers.map(manufacturer => ({
          label: manufacturer.name,
          value: manufacturer.name,
        })),
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function fetchManufacturersRequest() {
  return { type: FETCH_MANUFACTURERS_REQUEST };
}

export function fetchManufacturersSuccess(manufacturers) {
  return { type: FETCH_MANUFACTURERS_SUCCESS, payload: manufacturers };
}

export function fetchManufacturersError(error) {
  return { type: FETCH_MANUFACTURERS_ERROR, payload: { error } };
}

/* ------------- Thunks ------------- */
export function fetchManufacturers() {
  return async (dispatch, getState, api) => {
    try {
      dispatch(fetchManufacturersRequest());
      const results = await api.ManufacturersModel.getManufacturers();

      dispatch(fetchManufacturersSuccess(results));
    } catch (error) {
      dispatch(fetchManufacturersError(error));
    }
  };
}
