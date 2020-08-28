import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const middlewares = [thunk];
const store = createStore(
    rootReducer, 
    {}, 
    compose(
        applyMiddleware(...middlewares),
        typeof window.__REDUX_DEVTOOLS_EXTENSION__!=='undefined'?
        window.__REDUX_DEVTOOLS_EXTENSION__():(f)=>f
    )
    );

export default store;
