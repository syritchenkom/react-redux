import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/* function logger() {
    return function (store) {
        return function (next) {
            
        }
    }
} */

const logger = (store) => (next) => (action) => {
    const state = store.getState();

    console.log(action, state);

    return next(action);
}

 const thunk = ({ dispatch, getState }) => (next) => (action) => {
    return typeof action === "function" ? action(dispatch, getState) : next(action); 
 }
/* const thunk = (store) => (next) => (action) => {
    const { dispatch, getState } = store;
    if (typeof action === "function") {
        return action(dispatch, getState);
    }
    return next(action);
} */

export const middlewares = composeWithDevTools(applyMiddleware(logger, thunk));