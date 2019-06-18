import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import thunk from 'redux-thunk';
import Reactotron from '../config/Reactotron';
import createRootReducer from './reducers';
import api from '../api';

export const history = createBrowserHistory();

export default () => {
  const middlewares = [];

  // init thunk middleware
  const thunkMiddleware = thunk.withExtraArgument(api);
  middlewares.push(thunkMiddleware);

  // router middleware
  middlewares.push(routerMiddleware(history));

  let store;
  if (process.env.NODE_ENV === 'development') {
    // only use Reactotron debugger in DEV mode
    store = createStore(
      createRootReducer(history),
      compose(
        applyMiddleware(...middlewares),
        Reactotron.createEnhancer(),
      ),
    );
  } else {
    store = createStore(
      createRootReducer(history),
      applyMiddleware(...middlewares),
    );
  }

  return store;
};
