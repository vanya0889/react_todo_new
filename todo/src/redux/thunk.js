import {TodoService} from "../services/todo-service";
import {addTodoAction, checkAllActon} from "./actions";

export const addTodoThunk =
  (todo)  =>
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
	console.log(data)
  } catch (e) {
	console.error(e);
  }
};