import {combineReducers} from "redux";
import items from './itemsReducer';
import cart from './cartReducer';
import errorReducer from './errorReducer';
const rootReducer = combineReducers({
  items,
  cart,
  errors: errorReducer
});

export default rootReducer;
