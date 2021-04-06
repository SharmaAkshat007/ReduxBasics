import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import counterReducer from "./counter/counterReducer";
import sumReducer from "./sum/sumReducer";
import { userReducer } from "./async/userReducer";

const rootReducer = combineReducers({
  countReducer: counterReducer,
  sumReducer: sumReducer,
  userReducer: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
