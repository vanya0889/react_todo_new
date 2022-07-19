const express = require("express");
const mongoose = require("mongoose")
const router = require("./router");



const PORT = 5001;
const DB_URL = `mongodb+srv://user:user@cluster0.48udvp2.mongodb.net/?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use('/', router);





async function startApp() {
  try {
	await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
	app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
	console.log(e)
  }
}

startApp();