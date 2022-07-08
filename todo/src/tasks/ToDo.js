import style from "./ToDo.module.css"
import {FaTrashAlt} from "react-icons/fa";
import {FcCheckmark} from "react-icons/fc";


function ToDo({todo, checkTodo, removeTask, text, isCheck}) {


  return (
	<div>
	  <div key={todo.id} className={style.item}>

		<div className={style.check_wrapper} onClick={() => checkTodo(todo.id)}>
		  {
			isCheck && <FcCheckmark className={style.check_inner}/>

		  }
		</div>

		<div
		  className={todo.complete ? style.strike : style.item}
		>


		  {/*<input className={style.check} checked={isCheck} onClick={() => checkTodo(todo.id)} type="checkbox"/>*/}
		  {todo.task}
		</div>

		<FaTrashAlt className={style.delete} onClick={() => removeTask(todo.id)}/>

	  </div>
	  <hr/>
	</div>


  );
}


export default ToDo;