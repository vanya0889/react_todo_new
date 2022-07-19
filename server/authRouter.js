const AuthRouter = require("express")
const PostController = require("./Controllers/todoController")
const UserController = require("./Controllers/userController")
const {check} = require("express-validator")
const authMiddleware = require("./middleware/authMiddleware")

const router = new AuthRouter();

router.post('/registration', [
  check('username', "Username must not be empty"). notEmpty(),
  check('password', "Password must not be less than 8 symbols").isLength({min:3, max: 20})
], UserController.createNewUser);
router.post('/login', UserController.loginNewUser);
router.get('/users', authMiddleware, UserController.getUsers);
router.post('/posts',authMiddleware, PostController.createTodo);
router.get('/posts',authMiddleware, PostController.getAllTodos);
router.get('/posts/:id',authMiddleware, PostController.getOneTodo);
router.put('/posts',authMiddleware, PostController.updateTodo);
router.delete('/posts/:id',authMiddleware, PostController.deleteTodo);


module.exports = router;
