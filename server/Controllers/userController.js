const bcrypt = require("bcrypt")
const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const User = require("../Components/user")
require("dotenv")


const generateAccessToken = (id) => {
  const payload = {
	id
  }
  return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "1h"})
}



class UserController {

  async createNewUser(req, res, next) {
	try {
	  const errors = validationResult(req)
	  if (!errors.isEmpty()) {
		return res.status(400).json({message: "Registration error"})
	  }
	  const {username, password} = req.body
	  const candidate = await User.findOne({username})
	  if (!candidate) {
		const hashPassword = bcrypt.hashSync(password, 1)
		const user = new User({username, password: hashPassword})
		await user.save()
		return res.status(200).json({message: "Registration successful"})
	  } else {
		return res.status(400).json({message: "Already registered user"})
	  }
	} catch (error) {
	  // res.status(400).json({error, message: 'Registration error'})
	  return next(error)
	}
  }


  async loginNewUser(req, res, next) {
	try {
	  const {username, password} = req.body;

	  const user = await User.findOne({username});
	  if (!user) return res.status(400).json({message: `Пользователь ${username} не найден`});

	  const validPassword = bcrypt.compareSync(password, user.password);
	  if (!validPassword) return res.status(400).json({message: `Неверный пароль`});

	  const token = generateAccessToken();
	  return res.json(token);
	} catch (e) {

	}
  }


  async getUsers(req, res, next) {
	try {
		const users = await User.find()
	  res.json(users);
	} catch (e) {

	}
  }


}

module.exports = new UserController