import {addTodoAction, checkAllActon} from "./actions";
import {UserService} from "../../services/user-service";

export const registrationThunk =
  (todo)  =>
  async (dispatch) => {
	try {
	  const data = await UserService.registrationUserService(todo);
	  dispatch(addTodoAction(data));
	} catch (e) {
	  console.error(e);
	}
  };

export const loginThunk = () => async (dispatch) => {
  try {
	const data = await UserService.loginUserService();
	console.log(data)
  } catch (e) {
	console.error(e);
  }
};