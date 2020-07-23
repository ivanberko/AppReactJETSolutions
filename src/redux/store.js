import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reduserPairColor from './reducers';

const rootReducer = combineReducers({
  pairColor: reduserPairColor,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
