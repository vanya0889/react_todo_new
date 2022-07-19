import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {initialState} from "./todo/initialState";
import {composeWithDevTools} from "redux-devtools-extension";

import thunk from 'redux-thunk'
import {todoReducer} from "./todo/todoReducer";
const middlewareEnchanter = applyMiddleware(thunk);

export const store = createStore(todoReducer, initialState, composeWithDevTools(middlewareEnchanter))