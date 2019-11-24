import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemsReducer(state = initialState.items, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;
    // case types.CREATE_ITEMS_SUCCESS:
    //   return [
    //     ...state,
    //     Object.assign({}, action.course)
    //   ];

    // case types.UPDATE_ITEMS_SUCCESS:
    //   return [
    //     ...state.filter(course => course.id !== action.course.id),
    //     Object.assign({}, action.course)
    //   ];

    default:
      return state;
  }
}
