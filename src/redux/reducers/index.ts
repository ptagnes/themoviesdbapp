import { combineReducers } from "redux";
import moviesReducer from "./movies";

// interface Movies {
//   title: string,
//   ....
// }
export interface StoreState {
  moviesState: any;
}

export const reducers = combineReducers<StoreState>({
  moviesState: moviesReducer,
});
