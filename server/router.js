import {Router} from "express";
import postController from "./postController.js";
const router = new Router();


router.post('/posts', postController.createTodo);
router.get('/posts', postController.getAllTodos);
router.get('/posts/:id', postController.getOneTodo);
router.put('/posts', postController.updateTodo);
router.delete('/posts/:id', postController.deleteTodo);


export default router;
