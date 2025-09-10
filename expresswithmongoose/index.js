const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require("./routeHandler/todoHandler.js")
//-------express app init--------------
const app = express()
app.use(express.json());

//database connection with mongoose-----------
mongoose
    .connect('mongodb://127.0.0.1:27017/todos')
    .then(
        () => { console.log("connection successfull"); })
    .catch(err => console.log(err));

//todo handler
app.use('/todo', todoHandler);


//default errror handler
function errorHandler(err, req, res, next) {
    if (res.headerSent) {
        return (next(err));
    }
    res.status(500).json({ error: err });
}



app.listen(3000, () => {
    console.log("server listen at port 3000");
})