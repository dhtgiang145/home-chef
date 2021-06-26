import { createStore } from "redux";
import { chefReducer } from "./Reducers/chefReducer";

const initialState = {};
const store = createStore(chefReducer,initialState);

export default store;
