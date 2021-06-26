import {FETCH_CHEFS} from "../types"
export const chefReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHEFS:
      return { chefs: action.payload };
    default:
      return state;
  }
};
