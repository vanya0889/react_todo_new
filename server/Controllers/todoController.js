const Todo = require("../Components/todo")


class TodoController {
  async createTodo(req, res) {
	try {
	  const {userID, text, isCheck} = req.body;
	  const todo = await Todo.create({userID, text, isCheck});

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

  async getOneTodo(req, res, next) {
	try {
	  const {id} = req.params;
	  if (!id) {
		res.status(400).json({message: "Id not found"})
	  }
	  const post = await Todo.findById(id);
	  return res.json(post);
	} catch (e) {
	  next(e);
	}
  }

  async updateTodo(req, res) {
	try {
	  const post = req.body;
	  if (!post._id) {
		res.status(400).json({message: "Id not found"});
	  }
	  const updatedPost = await Todo.findByIdAndUpdate(post._id, post, {new: true});
	  return res.json(updatedPost);
	} catch (e) {
	  res.status(500).json(e);
	}
  }

  async deleteTodo(req, res) {
	try {
		const {id} = req.params;
		const post = await Todo.findByIdAndDelete(id);
		return res.json(post);
	} catch (e) {
	  res.status(500).json(e)
	}
  }

}

module.exports = new TodoController;