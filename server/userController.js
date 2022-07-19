const bcrypt = require("bcrypt")
const {validationResult} = require("express-validator")

const Role = require("./role")
const User = require("./user")

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

	} catch (e) {

	}
  }


  async getUsers(req, res, next) {
	try {

	} catch (e) {

	}
  }


}

module.exports =  new UserController