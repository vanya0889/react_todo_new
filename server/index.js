const express = require("express");
const mongoose = require("mongoose")
const authRouter = require("./authRouter");
require("dotenv").config();



const PORT = process.env.PORT ||5001;
const app = express();

app.use(express.json());
app.use('/', authRouter);





async function startApp() {
  try {
	await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
	app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
	console.log(e)
  }
}

 startApp();