import authInitialState from "./authInitialState";


export function authReducer(state = authInitialState, action) {
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
		isLogin: false

	  }


	default:
	  return state
  }
}