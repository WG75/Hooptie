/* ------------- Actions ------------- */
const FETCH_COLORS_REQUEST = 'Auto1/COLORS/FETCH_COLORS_REQUEST';
const FETCH_COLORS_SUCCESS = 'Auto1/COLORS/FETCH_COLORS_SUCCESS';
const FETCH_COLORS_ERROR = 'Auto1/COLORS/FETCH_COLORS_ERROR';

/* ------------- initial state ------------- */
const initialState = {
  values: [],
  loading: false,
  error: false,
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COLORS_REQUEST:
      return { ...state, loading: true, error: false };

    case FETCH_COLORS_ERROR:
      return { ...state, error: true, loading: false };

    case FETCH_COLORS_SUCCESS:
      return {
        values: action.payload.colors.map(color => ({ label: color, value: color })),
        loading: false,
        error: false,
      };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function fetchColorsRequest() {
  return { type: FETCH_COLORS_REQUEST };
}

export function fetchColorsSuccess(colors) {
  return { type: FETCH_COLORS_SUCCESS, payload: colors };
}

export function fetchColorsError(error) {
  return { type: FETCH_COLORS_ERROR, payload: { error } };
}

/* ------------- Thunks ------------- */
export function fetchColors() {
  return async (dispatch, getState, api) => {
    try {
      dispatch(fetchColorsRequest());
      const results = await api.ColorsModel.getColors();

      dispatch(fetchColorsSuccess(results));
    } catch (error) {
      dispatch(fetchColorsError(error));
    }
  };
}
