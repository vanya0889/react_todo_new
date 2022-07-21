const Todo = require("../Components/todo")


class TodoController {
  async createTodo(req, res) {
	try {
	  const {userId, task, complete} = req.body;
	  const todo = await Todo.create({userId, task, complete});
	  res.json(todo);
	} catch (e) {
	  res.status(500).json(e);
	}
  }

  async getAllTodos(req, res, next) {
	try {
	  let allTasks = await Todo.find()
	  return res.json(allTasks);
	} catch (error) {
	  // res.status(400).json({error, message: 'Login error'})
	  next(error)
	}
  }

  async checkTodo(req, res, next) {
	try {
	  const id = req.body.userId
	  const complete = req.body.complete
	  const result = await Todo.findOneAndUpdate({id}, {complete}, {new: true})
	  res.status(200).json(result)
	} catch (e) {
	  return next(e)
	}
  }

  async checkAllTodo(req, res, next) {
	try {
	  const user = req.username
	  const complete = true
	  const result = await Todo.updateMany({user}, {complete}, {new: true})
	  res.status(200).json(result)
	} catch (e) {
	  return next(e)
	}
  }

  async deleteChecked(req, res, next) {
	try {
	  const user = req.username
	  const complete = true
	  const result = await Todo.deleteMany({user, complete})
	  res.status(200).json(result)
	} catch (error) {

	  return next(error)
	}

  }

}

module.exports = new TodoController;