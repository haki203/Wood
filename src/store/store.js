// store.js
import { createStore, combineReducers } from 'redux';
import playReducer from '../reducers/playReducer';

const rootReducer = combineReducers({
  play: playReducer,
});

const store = createStore(rootReducer);

export default store;
