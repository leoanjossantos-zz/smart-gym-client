import { createStore, combineReducers } from "redux";
import { rootReducer } from "./reducers";

export default createStore(
  combineReducers({
    app: rootReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
