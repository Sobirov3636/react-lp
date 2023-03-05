import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("prev state:", store.getState());

  next(action);

  console.log("next state:", store.getState());
};

const middleWares = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middleWares), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

export const store = createStore(rootReducer, composeEnhancers);
