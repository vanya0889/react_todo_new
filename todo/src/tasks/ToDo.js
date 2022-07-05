import style from "./ToDo.module.css"
import { FaTrashAlt } from 'react-icons/fa';




function ToDo({todo, toggleTask, removeTask, text, isCheck}) {



  return (
    <div>
	  <div key={todo.id} className={style.item}>
		<div
		  className={todo.complete ? style.strike : style.item }
		  >
		  <input className={style.check} checked={isCheck} onClick={() => toggleTask(todo.id)} type="checkbox"/>
		  {todo.task}
		</div>

		<FaTrashAlt className={style.delete} onClick={() => removeTask(todo.id)}/>

	  </div>
	  <hr/>
	</div>


  );
}


export default ToDo;