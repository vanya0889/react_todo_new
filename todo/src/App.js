import {useState} from "react";
import ToDoForm from '/.ToDoForm'
import ToDo from '/.ToDo'



function App() {

  const [todos, setTodos] = useState([]);

  const addTask = () => {

  }
  const removeTask = () => {

  }
  const handleTouggle = () => {

  }

  return (
    <div className="App">
      <h1>Your todo list</h1>
      <div>
        <ToDoForm/>
        {todos.map((todo) => {
          return (
            <ToDo
              key={todos.id}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
