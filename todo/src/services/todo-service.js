import {api} from "../api/api";

 export class TodoService{
  static async addTodoService(values) {
	const { data } = await api.post("/post/", values);
	return data;
  }
   static async getAllTodoService() {
	 const { data } = await api.get("/posts/"

	 );
	 return data;
   }
}