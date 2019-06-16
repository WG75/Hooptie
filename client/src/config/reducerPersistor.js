import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  whitelist: ['global'],
  storage,
};

export default reducer => persistReducer(persistConfig, reducer);
