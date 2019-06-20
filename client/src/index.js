import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import createStore from './redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import './main.css';

// Clear Reactotron on every app refresh
if (process.env.NODE_ENV === 'development')
  {console.tron && console.tron.clear();} //eslint-disable-line

// Create our redux store
const store = createStore();
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
