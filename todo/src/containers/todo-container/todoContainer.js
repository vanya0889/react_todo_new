import {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  addTodoAction,
  checkAllActon,
  checkTodoAction,
  deleteCheckedAction,
  deleteTodoAction
} from "../../redux/todo/actions";
import style from "../../App.module.css";
import ToDoForm from "../../components/todo-form/ToDoForm";
import ToDo from "../../components/todo/ToDo";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {addTodoThunk, getAllTodoThunk} from "../../redux/todo/thunk-todo";

function TodoContainer() {
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
	  // dispatch(addTodoThunk(newItem))
	  dispatch(getAllTodoThunk())
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
		<div className={style.containerForms}>
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
		</div>


		{
		  todo.length > 0 &&
		  <div className={style.filter}>
			{
			  todo.length > 0 &&

			  <ButtonGroup className={style.btnGroup} aria-label="Basic example">
			  <span onClick={() => checkAll()}
					className={style.counterTodo}>{todo.filter(element => element.complete === false).length}tasks left</span>
				<Button className={viewOptions === "all" ? style.borderBtn : style.btn} variant="secondary"
						onClick={() => setViewOptions("all")}>All</Button>
				<Button className={viewOptions === "unchecked" ? style.borderBtn : style.btn} variant="secondary"
						onClick={() => setViewOptions("unchecked")}>ToDo</Button>
				<Button className={viewOptions === "checked" ? style.borderBtn : style.btn} variant="secondary"
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
		}


	  </div>
	</div>
  );
}

export default TodoContainer;
