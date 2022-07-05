import {useMemo, useState} from "react";
import ToDoForm from "./todo-form/ToDoForm"
import ToDo from "./tasks/ToDo"
import style from "./App.module.css"
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function App() {
  const [viewOptions, setViewOptions] = useState("all")


  const [todos, setTodos] = useState([]);

  const filteredTasks = useMemo(() => {
	switch (viewOptions) {
	  case "all":
		return todos;
	  case "checked":
		return todos.filter((todo) => todo.complete === true);
	  case "unchecked":
		return todos.filter((todo) => todo.complete === false);
	  default:
		return
	}
  }, [viewOptions, todos])

  const addTask = (userInput) => {
	if (userInput) {
	  const newItem = {
		id: Math.random().toString().substr(2, 9),
		task: userInput,
		complete: false
	  }
	  setTodos([...todos, newItem])
	}
  }
  const checkAll = () => {
    setTodos(todos.map((element) => {
	  return {
	    ...element,
		complete: true
	  }
	}))
  }



  const deleteChecked = () => {
	setTodos(todos.filter(element => element.complete === false))
  }
  const removeTask = (id) => {
	setTodos([...todos.filter((todo) => todo.id !== id)])
  }
  const handleTouggle = (id) => {
	setTodos([...todos.map((todo) =>
	  todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
	)])
  }

  return (
	<div className={style.App}>

	  <br/>
	  <h1>Your todos list</h1>
	  <div className={style.container}>
		<ToDoForm addTask={addTask}/>
		{filteredTasks.map((todo) => {
		  return (
			<ToDo
			  todo={todo}
			  key={todo.id}
			  isCheck={todo.complete}
			  text={todo.task}
			  toggleTask={handleTouggle}
			  removeTask={removeTask}
			/>
		  )
		})}

		<div className={style.filter}>
		  {
			todos.length > 0 &&

			<ButtonGroup  aria-label="Basic example">
			  <span onClick={() => checkAll()} className={style.sec}>{todos.filter(element => element.complete === false).length}tasks left</span>
			  <Button className={style.btn} variant="secondary" onClick={() => setViewOptions("all")}>All</Button>
			  <Button variant="secondary" onClick={() => setViewOptions("unchecked")}>ToDo</Button>
			  <Button variant="secondary" onClick={() => setViewOptions("checked")}>Completed</Button>
			</ButtonGroup>

		  }
		  {
			todos.some(element => element.complete === true) && <ButtonGroup aria-label="Basic example">
			  <Button variant="secondary" onClick={() => deleteChecked()}>Clear completed</Button>
			</ButtonGroup>
		  }

		</div>


	  </div>
	</div>
  );
}

export default App;
