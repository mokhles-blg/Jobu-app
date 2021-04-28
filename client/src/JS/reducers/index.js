import { combineReducers } from "redux";
import userReducer from "./user";
import jobReducer from "./job";
import applicationReducer from "./application";
const rootReducer = combineReducers({
  userReducer,
  jobReducer,
  applicationReducer,
});
export default rootReducer;
