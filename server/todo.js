import mongoose from 'mongoose';


const Todo = new mongoose.Schema({
  id: String,
  task: String,
  complete: Boolean

})

export default mongoose.model('Todo', Todo)