import {api} from "../api/api";
import {TokenService} from "./token-service";

export class TodoService {
  static async addTodoService(values) {
    console.log(values)
	const {data} = await api.post("/posts/", values, {
	  headers: {
		'Authorization': TokenService.getToken("token")
	  }

	});
	return data;
  }

  static async getAllTodoService() {
	const {data} = await api.get("/getAll/");
	return data;
  }

  static async checkTodoService(values) {
    console.log(values)
	const {data} = await api.patch("/check", values,{
	  headers: {
		'Authorization': TokenService.getToken("token")
	  }
	});
	return data;
  }



}