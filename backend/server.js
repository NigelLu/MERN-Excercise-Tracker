// modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// pull config
require("dotenv").config();

// config app
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// database
const uri = "mongodb://localhost/mern";
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
	console.log(
		`MongoDB database connection established successfully at URI ${uri}`
	);
});

// load routers
const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

app.use("/users", userRouter);
app.use("/exercises", exerciseRouter);

// start app
app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});
