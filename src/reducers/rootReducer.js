// Kết hợp tất cả các reducer con thành rootReducer:
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import favouriteReducer from './favouriteReducer';
import playReducer from './playReducer';
import scrollReducer from './scrollReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  favourites: favouriteReducer,
  play:playReducer,
  scroll:scrollReducer,
});

export default rootReducer;
