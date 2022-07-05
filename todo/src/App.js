import {useState} from "react";
import ToDoForm from "./todo-form/ToDoForm"
import ToDo from "./tasks/ToDo"
import style from "./App.module.css"

function App() {

  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
	if (userInput) {
	  const newItem = {
		id: Math.random().toString().substr(2, 9),
		task: userInput,
		complete: false
	  }
setTodos([...todos,newItem])
	}
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
	  <div className={style.container} >
		<ToDoForm addTask={addTask}/>
		{todos.map((todo) => {
		  return (
			<ToDo
			  todo={todo}
			  key={todo.id}
			  text={todo.task}
			  toggleTask={handleTouggle}
			  removeTask={removeTask}
			/>
		  )
		})}
	  </div>
	</div>
  );
}

export default App;
