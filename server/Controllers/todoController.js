const Todo = require("../Components/todo")


class TodoController {
  async createTodo(req, res) {
	try {

	  const {task, complete} = req.body;
	  let userId = req.user
	  const todo = await Todo.create({userId,  task, complete});
	  res.json(todo);
	} catch (e) {
	  res.status(500).json({e, message: 'Create failed'});
	}
  }

  async getAllTodos(req, res, next) {
	try {
	  let userId = req.user
	  let allTasks = await Todo.find({userId})
	  return res.json(allTasks);
	} catch (e) {
	   res.status(500).json({e, message: 'Server error'})

	}
  }

  async checkTodo(req, res, next) {
	try {
	  const {_id, complete} = req.body
	  let userId = req.user
	  const result = await Todo.findOneAndUpdate({_id,userId}, {complete}, {new: true})
	  res.status(200).json(result)
	} catch (e) {
	  res.status(500).json({e, message: 'Check error'});
	}
  }

  async checkAllTodo(req, res, next) {
	try {
	  let userId = req.user
	  const result = await Todo.updateMany({userId ,complete: false},{ $set: {  complete: true}} )
	  console.log(result)
	  res.status(200).json({message: 'success'})
	} catch (e) {
	  res.status(500).json({e, message: 'Check error'});
	}
  }

  async deleteTodo(req, res, next) {
	try {
	  const _id = req.query._id
	  const result = await Todo.deleteOne({_id})
	  res.status(200).json(result)
	} catch (e) {

	  res.status(500).json({e, message: 'Delete error'});
	}

  }


  async deleteChecked(req, res, next) {
	try {
	  let userId = req.user
	  const complete = true
	  const result = await Todo.deleteMany({userId, complete})
	  res.status(200).json(result)
	} catch (e) {

	  res.status(500).json({e, message: 'Delete error'});
	}

  }

}

module.exports = new TodoController;