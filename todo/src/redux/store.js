import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {initialState} from "./initialState";
import {composeWithDevTools} from "redux-devtools-extension";
import todoReducer from "./todoReducer";
import thunk from 'redux-thunk'
const middlewareEnchanter = applyMiddleware(thunk);

export const store = createStore(todoReducer, initialState, composeWithDevTools(middlewareEnchanter))