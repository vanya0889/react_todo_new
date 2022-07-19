const Router = require("express")
const PostController = require("./todoController")
const UserController = require("./userController")

const router = new Router();

router.post('/registration', UserController.createNewUser);
router.post('/login', UserController.loginNewUser);
router.get('/users', UserController.getUsers);
router.post('/posts', PostController.createTodo);
router.get('/posts', PostController.getAllTodos);
router.get('/posts/:id', PostController.getOneTodo);
router.put('/posts', PostController.updateTodo);
router.delete('/posts/:id', PostController.deleteTodo);


module.exports = router;
