import TodoContainer from "./containers/todo-container/TodoContainer";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/authorization/login/Login";
import Registration from "./components/authorization/registration/Registration";
import {useDispatch, useSelector} from "react-redux";
import ErrorBoundary from "./ErrorBoundary";
import {errorAction} from "./redux/share/actions";


function App() {
  const dispatch = useDispatch()



  const {isLogin} = useSelector((state) => state.auth)
  const errorCatcher = (error) => {
	dispatch(errorAction(error))
  }

  return (
	<ErrorBoundary errorCatcher={errorCatcher}>
	  <Routes>
		<Route path={"/"} element={<Navigate to={"/login"} replace/>}/>
		<Route path="/todos" element={
		  <TodoContainer/>}/>
		<Route
		  path="/login"
		  element={isLogin ? <Navigate to="/todos"/> : <Login/>}
		/>
		<Route path="/registration" element={<Registration/>}/>
	  </Routes>
	</ErrorBoundary>
  )
}

export default App;
