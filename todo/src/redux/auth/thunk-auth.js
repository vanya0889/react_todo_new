import { isLoginAction } from "./actions";
import {UserService} from "../../services/user-service";

import {TokenService} from "../../services/token-service";

// export const registrationThunk =
//   (todo)  =>
//   async (dispatch) => {
// 	try {
// 	  const data = await UserService.registrationUserService(todo);
// 	  dispatch(addTodoAction(data));
// 	} catch (e) {
// 	  console.error(e);
// 	}
//   };
export const RegistrationDis = (username, password) => {
  return async (dispatch) => {
	try {
	  const response = await UserService.registrationUserService({username, password})
	  alert(response.data.message)
	} catch (error) {
	  alert(error.message)
	}
  }
}

// export const loginThunk = () => async (dispatch) => {
//   try {
// 	const data = await UserService.loginUserService();
// 	console.log(data)
//   } catch (e) {
// 	console.error(e);
//   }
// };


export const loginDis = (username, password) => {
  return async (dispatch) => {
	try {
	  const data = await UserService.loginUserService({username, password});
	  localStorage.setItem("token", data);
	  dispatch(isLoginAction(username))

	} catch (error) {
	  console.log(error)
	}
  }
}