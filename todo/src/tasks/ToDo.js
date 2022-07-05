import style from "./ToDo.module.css"
import { FaTrashAlt } from 'react-icons/fa';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {useState} from "react";



function ToDo({todo, toggleTask, removeTask, text}) {

  const [filtered, setFiltered] = useState(todo)


  const todofilter = (complete) => {
	if (complete==='all') {
	  setFiltered(todo)
	} else {
	  let newTodo = [...todo].filter(item => item.complete === complete)
	  setFiltered(newTodo)
	}
  }

  return (
    <div>
	  <div key={todo.id} className={style.item}>
		<div
		  className={todo.complete ? style.item & style.strike : style.item }
		  onClick={() => toggleTask(todo.id)}>
		  {todo.task}
		</div>

		<FaTrashAlt className={style.delete} onClick={() => removeTask(todo.id)}/>

	  </div>
	  <hr/>
	  <ButtonGroup aria-label="Basic example">
		<Button variant="secondary" onClick={()=>todofilter('all')}>All</Button>
		<Button variant="secondary" onClick={()=>todofilter(true)}>ToDo</Button>
		<Button variant="secondary" onClick={()=>todofilter(false)}>Completed</Button>
	  </ButtonGroup>
	</div>


  );
}


export default ToDo;