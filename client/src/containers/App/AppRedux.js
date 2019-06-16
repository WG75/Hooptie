
/* ------------- Actions ------------- */
const APP_STARTED_REQUEST = 'Auto1/App/APP_STARTED_REQUEST';
const APP_STARTED_SUCCESS = 'Auto1/App/APP_STARTED_SUCCESS';
const APP_STARTED_ERROR = 'Auto1/App/APP_STARTED_ERROR';

/* ------------- initial state ------------- */
const initialState = {
  initialized: false,
};

/* ------------- Reducer ------------- */
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case APP_STARTED_REQUEST:
      return { ...state, initialized: false };

    case APP_STARTED_SUCCESS:
      return { ...state, initialized: true };

    case APP_STARTED_ERROR:
      return { ...state, initialized: false, appError: action.payload.error };

    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */
export function appStartedRequest() {
  return { type: APP_STARTED_REQUEST };
}

export function appStartedSuccess() {
  return { type: APP_STARTED_SUCCESS };
}

export function appStartedError(error) {
  return { type: APP_STARTED_ERROR, payload: { error } };
}

/* ------------- Thunks ------------- */
export function appStarted() {
  return async (dispatch, getState, api) => {
    try {
      dispatch(appStartedRequest());

      dispatch(appStartedSuccess());
    } catch (error) {
      dispatch(appStartedError(error));
    }
  };
}
