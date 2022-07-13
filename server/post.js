import mongoose from 'mongoose';


const Post = new mongoose.Schema({
  author: { type: 'string', required: true},
  title: { type: 'string', required: true},
  content: { type: 'string', required: true},

})

export default mongoose.model('Post', Post)