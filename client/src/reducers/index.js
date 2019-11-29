import {combineReducers} from "redux";
import items from './itemsReducer';
import cart from './cartReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  items,
  cart,
  errors: errorReducer,
  authReducer
});

export default rootReducer;
