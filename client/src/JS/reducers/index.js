import { combineReducers } from "redux";
import userReducer from "./user";
import jobReducer from "./job";
const rootReducer = combineReducers({
  userReducer,
  jobReducer,
});
export default rootReducer;
