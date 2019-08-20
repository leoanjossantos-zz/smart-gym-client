import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;
export default createStore(
  combineReducers({
    app: rootReducer
  }),
  compose(
    applyMiddleware(thunk),
    reduxDevTools
  )
);
