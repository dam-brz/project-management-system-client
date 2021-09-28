import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const innitialState = {};
const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
        rootReducer, 
        innitialState, 
        compose(
            applyMiddleware(...middleware), 
            window.__REDUX_DEVTOOLS_EXTEMSION__ && window.__REDUX_DEVTOOLS_EXTEMSION__())
    );
} else {
    store = createStore(
        rootReducer, 
        innitialState, 
        compose(
            applyMiddleware(...middleware))
    );
}

export default store;