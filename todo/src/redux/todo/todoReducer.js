import todoInitialState from "./TodoinitialState";


export function todoReducer(state = todoInitialState, action) {
  switch (action.type) {
	case "ADD_TODO":
	  return {
		...state,
		todo: [...state.todo, action.payload]
	  }


	case "CHECK_TODO":
	  return {
		...state,
		todo: state.todo.map(todo => {
			if (todo.id === action.payload) {
			  return {...todo, complete: !todo.complete}
			}
			return todo
		  }
		)
	  }

	case "DELETE_TODO":
	  return {
		...state,
		todo: [...state.todo.filter((todo) => todo.id !== action.payload)]
	  }

	case "DELETE_CHECKED":
	  return {
		...state,
		todo: [...state.todo.filter((todo) => todo.complete === false)]
	  }

	case "CHECK_ALL":
	  return {
		...state,
		todo: state.todo.map(todo => {
			return {
			  ...todo,
			  complete: true
			}
		  }
		)
	  }

	default:
	  return state
  }
}