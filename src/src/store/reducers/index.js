import { combineReducers } from "redux";

import panoramasReducer from "./panoramasReducer";

export default combineReducers({
  panoramas: panoramasReducer
});