import shareInitialState from "./shareInitialState";


export function shareReducer(state = shareInitialState, action) {
  switch (action.type) {

	case "LOADER_START":
	  return {
		...state,
		isLoading: !action.payload
	  }

	case "LOADER_END":
	  return {
		...state,
		isLoading: false
	  }

	case "ERROR":
	  return {
		...state,
		hasError: true
	  }

	default:
	  return state
  }
}