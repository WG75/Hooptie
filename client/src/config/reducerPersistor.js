import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favourites',
  whitelist: ['collection'],
  storage,
};

export default reducer => persistReducer(persistConfig, reducer);
