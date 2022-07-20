import {combineReducers} from "redux";
import {todoReducer} from "./todo/todoReducer";
import {authReducer} from "./auth/authReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer
})
export default  rootReducer
