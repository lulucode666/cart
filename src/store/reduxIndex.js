import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { orderListReducer } from "orderListReducer";

const store = createStore(orderListReducer, applyMiddleware(logger));

export default store;