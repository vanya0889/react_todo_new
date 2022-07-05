import {useState} from "react";
import style from "./ToDoForm.module.css"
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function ToDoForm({addTask}) {
  const [userInput, setUserInput] = useState("");
  const [filtered, setFiltered] = useState("")



  const handleChange = (e) => {
	setUserInput(e.currentTarget.value)
  }
  const todofilter = (e) => {

  }

  const handleSubmit = (e) => {
	e.preventDefault()
	addTask(userInput)
	setUserInput("")
  }

  const handleKeyPress = (e) => {
	if (e === "Enter") {
	  handleSubmit(e)
	}
  }


  return (


	<div>

	  <form onSubmit={handleSubmit}>
		<input className={style.form}
			   value={userInput}
			   type="text"
			   onChange={handleChange}
			   onKeyDown={handleKeyPress}
			   placeholder={`Enter your task name here`}
		/>

	  </form>


	</div>

  );
}


export default ToDoForm;