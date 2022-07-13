import Post from "./post";

class PostController {
  async create(req, res, ) {
    try{
      const {author, title, content} = req.body
      const post = await Post.create({author, title, content})

      res.json(post);
    } catch (e) {
      res.status(500).json(e)
    }
  }

  async getAll() {

  }
  async getOne() {

  }
  async update() {

  }
  async delete() {

  }

}

export default new PostController;