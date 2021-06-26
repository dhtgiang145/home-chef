import { FETCH_CHEFS } from "../types.js";

export const fetchChefs = () => async (dispatch) => {
  const res = await fetch("api/chefs");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_CHEFS,
    payload: data,
  });
};
