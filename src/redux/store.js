import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk"; // ✅ Correct import
import { authReducer } from "./reducers/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = legacy_createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
