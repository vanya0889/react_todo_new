import {createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {initialState} from "./initialState";
import {composeWithDevTools} from "redux-devtools-extension";
import todoReducer from "./todoReducer";



export const store = createStore(todoReducer, initialState, composeWithDevTools())