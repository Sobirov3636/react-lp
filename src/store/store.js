import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

export const store = createStore(rootReducer, composeEnhancers);
