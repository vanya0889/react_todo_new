import TodoContainer from "./containers/todo-container/todoContainer";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/authorization/login/login";
import Registration from "./components/authorization/registration/registration";



function App() {


  return (
	<Routes>
	  <Route path={"/"} element={<Navigate to={"/login"} replace />} />
	  <Route path="/todos" element={<TodoContainer/>}/>
	  <Route path="/login" element={<Login/>}/>
	  <Route path="/registration" element={<Registration/>}/>
	</Routes>
  )
}

export default App;
