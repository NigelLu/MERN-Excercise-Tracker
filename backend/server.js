const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost/mern';
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB database connection established successfully at URI ${uri}`);
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});