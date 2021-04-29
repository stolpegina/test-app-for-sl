import { createStore, combineReducers, applyMiddleware } from "redux";
import posts from "./posts/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ posts });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
