import {useState} from "react";


function ToDoForm({addTask}) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
	setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
	e.preventDefault()
	addTask(userInput)
	setUserInput("")
  }

  const handleKeyPress = (e) => {
	if (e === "Enter") {
	  console.log("hey")
	  handleSubmit(e)
	}
  }


  return (
	<form onSubmit={handleSubmit}>
	  <input
		value={userInput}
		type="text"
		onChange={handleChange}
		onKeyDown={handleKeyPress}
		placeholder={`Enter your task name here`}
	  />
	</form>
  );
}


export default ToDoForm;