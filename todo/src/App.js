import {useMemo, useState} from "react";
import ToDoForm from "./todo-form/ToDoForm"
import ToDo from "./tasks/ToDo"
import style from "./App.module.css"
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {addTodoAction, checkTodoAction, deleteCheckedAction, deleteTodoAction, checkAllActon} from "./redux/actions";

function App() {
  const [viewOptions, setViewOptions] = useState("all")


  const dispatch = useDispatch()
  const {todo} = useSelector((state) => state)

  const filteredTasks = useMemo(() => {
	switch (viewOptions) {
	  case "all":
		return todo;
	  case "checked":
		return todo.filter((todo) => todo.complete === true);
	  case "unchecked":
		return todo.filter((todo) => todo.complete === false);
	  default:
		return
	}
  }, [viewOptions, todo])

  const addTodo = (userInput) => {
	if (userInput) {
	  const newItem = {
		id: Date.now(),
		task: userInput,
		complete: false
	  }
	  dispatch(addTodoAction(newItem))
	}
  }
  const checkAll = () => {

	dispatch(checkAllActon())

  }


  const deleteChecked = () => {
	dispatch(deleteCheckedAction())

  }
  const removeTask = (id) => {
	dispatch(deleteTodoAction(id))

  }
  const checkTodo = (id) => {
	dispatch(checkTodoAction(id))
  }

  return (
	<div className={style.App}>

	  <br/>
	  <h1>Your todos list</h1>
	  <div className={style.container}>
		<ToDoForm addTask={addTodo}/>
		{filteredTasks.map((todo) => {
		  return (
			<ToDo
			  todo={todo}
			  key={todo.id}
			  isCheck={todo.complete}
			  text={todo.task}
			  checkTodo={checkTodo}
			  removeTask={removeTask}
			/>
		  )
		})}

		<div className={style.filter}>
		  {
			todo.length > 0 &&

			<ButtonGroup className={style.group} aria-label="Basic example">
			  <span onClick={() => checkAll()}
					className={style.sec}>{todo.filter(element => element.complete === false).length}tasks left</span>
			  <Button className={style.mg} variant="secondary" onClick={() => setViewOptions("all")}>All</Button>
			  <Button className={style.btn} variant="secondary"
					  onClick={() => setViewOptions("unchecked")}>ToDo</Button>
			  <Button className={style.btn} variant="secondary"
					  onClick={() => setViewOptions("checked")}>Completed</Button>
			</ButtonGroup>

		  }
		  {
			todo.some(element => element.complete === true) &&
			<div className={style.clearButton} onClick={() => deleteChecked()}>
			  Clear completed
			</div>
		  }


		</div>


	  </div>
	</div>
  );
}

export default App;
