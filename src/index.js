import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from "./components/App";
import gridReducer from "./state/grid/grid.reducers";
import snakesReducer from "./state/snakes/snakes.reducers";

let reducers = combineReducers({
  grid: gridReducer,
  snakes: snakesReducer
});
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
