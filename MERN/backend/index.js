//calling packages needed
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//use Middlewere
app.use(cors());
app.use(express.json());

//Connect to DB.
mongoose.connect('mongodb://localhost/houses', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected ! ")).catch((e) => console.error("Failed ! ", e));

//require and use files
const houseRouter = require('./routes/house');

app.use('/house', houseRouter);

//to make port dynamic
const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log("Server is Running on Port ", port);
});

