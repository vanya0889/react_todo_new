const {Schema, model} = require('mongoose')


const Todo = new Schema({
  userid: String,
  task: String,
  complete: Boolean

})

module.exports = model('Todo', Todo)
