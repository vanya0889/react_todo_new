import { isLoginAction} from "./actions";
import {endLoading, errorAction, startLoading} from "../share/actions";

import {UserService} from "../../services/user-service";

import {TokenService} from "../../services/token-service";



export const RegistrationDis = (username, password) => {
  return async (dispatch) => {
	dispatch(startLoading)
	try {
	  const response = await UserService.registrationUserService({username, password})
	  alert(response.data.message)
	} catch (e) {
	  dispatch(errorAction(e))
	} finally {
	  dispatch(endLoading())
	}
  }
}



export const loginDis = (username, password) => {
  return async (dispatch) => {
	dispatch(startLoading())
	try {
	  const data = await UserService.loginUserService({username, password});
	  localStorage.setItem("token", data);
	  dispatch(isLoginAction(username))

	} catch (e) {
	  dispatch(errorAction(e))
	} finally {
	  dispatch(endLoading())
	}
  }
}