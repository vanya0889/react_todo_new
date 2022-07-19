import {initialState} from "./initialState";


export function authReducer(state = initialState, action) {
  switch (action.type) {



	case "IS_LOGIN_ACTION":
	  return {
		...state,
		user: action.payload,
		isLogin: true

		  }

	case "LOGOUT_ACTION":
	  return {
		...state,
		isLogin: true

	  }


	default:
	  return state
  }
}