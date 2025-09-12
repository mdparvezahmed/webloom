const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require('./config/dbconnect.js');
const authRoutes = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoute.js");


dbConnect();

//middleware
const app = express();
app.use(express.json());


//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRouter);


//run server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});