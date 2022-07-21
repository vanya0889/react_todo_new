import {TodoService} from "../../services/todo-service";
import {addTodoAction, checkAllActon, checkTodoAction, getAllTodoAction} from "./actions";

export const addTodoThunk =
  (todo) =>
	async (dispatch) => {
	  try {
		const data = await TodoService.addTodoService(todo);
		dispatch(addTodoAction(data));
	  } catch (e) {
		console.error(e);
	  }
	};

export const getAllTodoThunk = () => async (dispatch) => {
  try {
	const data = await TodoService.getAllTodoService();
	dispatch(getAllTodoAction(data))
  } catch (e) {
	console.error(e);
  }
};

export const checkTodoThunk =
  (id) =>
	async (dispatch) => {
	  try {
		const data = await TodoService.checkTodoService(id);
		dispatch(checkTodoAction(data))
	  } catch (e) {
		console.error(e);
	  }
	};