import {createStore, combineReducers} from "redux";
import { memReducer } from "./reducers/mem";

const reducers = combineReducers({ mem: memReducer})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())