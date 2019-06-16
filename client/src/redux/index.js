import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../config/Reactotron';
import RootReducer from './reducers';
import api from '../api';


export default () => {
  const middlewares = [];

  // init thunk middleware
  const thunkMiddleware = thunk.withExtraArgument(api);
  middlewares.push(thunkMiddleware);


  let store;
  if (process.env.NODE_ENV === 'development') {
    // only use Reactotron debugger in DEV mode
    store = createStore(
      RootReducer,
      compose(
        applyMiddleware(...middlewares),
        Reactotron.createEnhancer(),
      ),
    );
  } else {
    store = createStore(
      RootReducer,
      applyMiddleware(...middlewares),
    );
  }

  return store;
};
